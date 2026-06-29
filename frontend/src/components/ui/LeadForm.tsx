"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Button } from "./Button";
import { cn, formatPhone } from "@/lib/utils";
import { MESSENGER_OPTIONS } from "@/lib/constants";

const leadSchema = z.object({
  name: z.string().min(2, "Укажите имя"),
  phone: z.string().min(10, "Укажите корректный телефон"),
  city: z.string().min(2, "Укажите город"),
  email: z.string().email("Укажите корректный email").optional().or(z.literal("")),
  messenger: z.enum(["whatsapp", "telegram", "phone"]),
  consent: z.boolean().refine((val) => val === true, {
    message: "Необходимо согласие на обработку персональных данных",
  }),
});

type LeadFormValues = z.infer<typeof leadSchema>;

export interface LeadFormProps {
  onSubmit?: (data: LeadFormValues) => Promise<{ ok: boolean; message: string }>;
  buttonText?: string;
  showMessenger?: boolean;
  showEmail?: boolean;
  className?: string;
  source?: string;
  variant?: "light" | "dark";
}

export function LeadForm({
  buttonText = "Оставить заявку",
  showMessenger = true,
  showEmail = true,
  className,
  source = "form",
  variant = "light",
}: LeadFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setValue,
    reset,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      messenger: "whatsapp",
      consent: false,
    },
  });

  const [result, setResult] = React.useState<{ ok: boolean; message: string } | null>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const isDark = variant === "dark";

  const inputBase =
    "w-full rounded-lg px-4 py-3 outline-none transition focus:ring-2 focus:ring-primary/20";
  const inputLight =
    "border bg-white focus:border-primary placeholder:text-muted";
  const inputDark =
    "border-white/20 bg-transparent text-white placeholder:text-white/90 focus:border-primary";
  const inputClass = cn(inputBase, isDark ? inputDark : inputLight, "border");

  const onSubmit = async (data: LeadFormValues) => {
    setResult(null);
    if (!executeRecaptcha) {
      setResult({ ok: false, message: "Ошибка инициализации антиспама" });
      return;
    }

    try {
      const recaptchaToken = await executeRecaptcha("lead_submit");
      const params = new URLSearchParams(window.location.search);
      const payload = {
        ...data,
        phone: formatPhone(data.phone),
        recaptchaToken,
        utm_source: params.get("utm_source") || undefined,
        utm_medium: params.get("utm_medium") || undefined,
        utm_campaign: params.get("utm_campaign") || undefined,
        utm_content: params.get("utm_content") || undefined,
        utm_term: params.get("utm_term") || undefined,
        source,
      };

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      setResult({ ok: res.ok, message: json.message || (res.ok ? "Заявка отправлена" : "Ошибка отправки") });

      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "lead_form_submit",
          form_source: source,
        });
      }

      if (res.ok) reset();
    } catch {
      setResult({ ok: false, message: "Не удалось отправить заявку. Попробуйте позже." });
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 11);
    let formatted = raw;
    if (raw.length > 0) formatted = `+${raw[0]}`;
    if (raw.length > 1) formatted += ` (${raw.slice(1, 4)}`;
    if (raw.length >= 4) formatted += ")";
    if (raw.length > 4) formatted += ` ${raw.slice(4, 7)}`;
    if (raw.length > 7) formatted += `-${raw.slice(7, 9)}`;
    if (raw.length > 9) formatted += `-${raw.slice(9, 11)}`;
    setValue("phone", formatted, { shouldValidate: true });
  };

  if (isSubmitSuccessful && result?.ok) {
    return (
      <div
        className={cn(
          "rounded-xl p-6 text-center",
          isDark ? "bg-white/10 text-white" : "bg-success/10 text-success"
        )}
      >
        <p className="text-lg font-medium">Спасибо!</p>
        <p className={cn("mt-2", isDark ? "text-white/90" : "text-foreground")}>{result.message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-4", className)}>
      <div>
        <input
          type="text"
          placeholder="Имя"
          className={cn(inputClass, errors.name ? "border-error" : "")}
          {...register("name")}
        />
        {errors.name && (
          <p className={cn("mt-1 text-sm", isDark ? "text-red-300" : "text-error")}>{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          type="tel"
          inputMode="tel"
          placeholder="+7 (999) 999-99-99"
          className={cn(inputClass, errors.phone ? "border-error" : "")}
          {...register("phone", { onChange: handlePhoneChange })}
        />
        {errors.phone && (
          <p className={cn("mt-1 text-sm", isDark ? "text-red-300" : "text-error")}>{errors.phone.message}</p>
        )}
      </div>

      <div>
        <input
          type="text"
          placeholder="Город"
          className={cn(inputClass, errors.city ? "border-error" : "")}
          {...register("city")}
        />
        {errors.city && (
          <p className={cn("mt-1 text-sm", isDark ? "text-red-300" : "text-error")}>{errors.city.message}</p>
        )}
      </div>

      {showEmail && (
        <div>
          <input
            type="email"
            placeholder="E-mail (необязательно)"
            className={cn(inputClass, errors.email ? "border-error" : "")}
            {...register("email")}
          />
          {errors.email && (
            <p className={cn("mt-1 text-sm", isDark ? "text-red-300" : "text-error")}>{errors.email.message}</p>
          )}
        </div>
      )}

      {showMessenger && (
        <div>
          <p className={cn("mb-2 text-sm", isDark ? "text-white/90" : "text-muted")}>Удобный мессенджер</p>
          <div className="flex flex-wrap gap-3">
            {MESSENGER_OPTIONS.map((option) => (
              <label
                key={option.value}
                className={cn(
                  "cursor-pointer rounded-lg border px-4 py-2 text-sm transition",
                  isDark
                    ? "border-white/20 text-white/90 has-[:checked]:border-primary has-[:checked]:bg-primary/20 has-[:checked]:text-white"
                    : "border-border text-foreground has-[:checked]:border-primary has-[:checked]:bg-primary-light"
                )}
              >
                <input type="radio" value={option.value} className="sr-only" {...register("messenger")} />
                {option.label}
              </label>
            ))}
          </div>
          {errors.messenger && (
            <p className={cn("mt-1 text-sm", isDark ? "text-red-300" : "text-error")}>{errors.messenger.message}</p>
          )}
        </div>
      )}

      <div className="flex items-start gap-3">
        <input
          id={`consent-${source}`}
          type="checkbox"
          className={cn(
            "mt-1 h-4 w-4 rounded focus:ring-primary",
            isDark ? "border-white/30 bg-transparent text-white" : "border-border text-primary-dark"
          )}
          {...register("consent")}
        />
        <label
          htmlFor={`consent-${source}`}
          className={cn("text-xs", isDark ? "text-white/90" : "text-muted")}
        >
          Я согласен на обработку{" "}
          <a href="/privacy" className={cn("font-semibold hover:underline", isDark ? "text-white hover:text-secondary" : "text-primary-dark")} target="_blank" rel="noopener noreferrer">
            персональных данных
          </a>
        </label>
      </div>
      {errors.consent && (
        <p className={cn("text-sm", isDark ? "text-red-300" : "text-error")}>{errors.consent.message}</p>
      )}

      <Button type="submit" size="lg" fullWidth disabled={isSubmitting}>
        {isSubmitting ? "Отправка..." : buttonText}
      </Button>

      {result && !result.ok && (
        <p className={cn("text-center text-sm", isDark ? "text-red-300" : "text-error")}>{result.message}</p>
      )}
    </form>
  );
}

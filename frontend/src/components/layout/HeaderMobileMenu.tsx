"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface Props {
  phone: string;
  schedule?: string;
}

const PHONE_LABEL = "ТЕЛЕФОН";
const SCHEDULE_LABEL = "ГРАФИК РАБОТЫ";
const DEFAULT_SCHEDULE = "Пн-Пт: 09:00-18:00";
const NAV_FONT = "font-[family-name:var(--font-playfair)]";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {open ? (
        <>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </>
      ) : (
        <>
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </>
      )}
    </svg>
  );
}

function scrollToLeadForm() {
  const el = document.getElementById("lead-form-1") || document.getElementById("footer");
  el?.scrollIntoView({ behavior: "smooth" });
}

export function HeaderMobileMenu({ phone, schedule = DEFAULT_SCHEDULE }: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  React.useEffect(() => {
    document.body.classList.toggle("overflow-hidden", mobileOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  return (
    <>
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-surface"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={mobileOpen}
      >
        <MenuIcon open={mobileOpen} />
      </button>

      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-border bg-white p-4 shadow-lg lg:hidden">
          <div className="container-app flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PhoneIcon className="shrink-0 text-primary-dark" />
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-medium uppercase tracking-widest text-muted">{PHONE_LABEL}</span>
                  <a
                    href={phoneHref}
                    className={cn(NAV_FONT, "text-sm font-semibold text-foreground hover:text-primary-dark")}
                    aria-label={phone ? `Позвонить: ${phone}` : "Телефон"}
                  >
                    {phone || "—"}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <ClockIcon className="shrink-0 text-primary-dark" />
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-medium uppercase tracking-widest text-muted">{SCHEDULE_LABEL}</span>
                  <span className={cn(NAV_FONT, "text-sm font-semibold text-foreground")}>{schedule}</span>
                </div>
              </div>
            </div>

            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    NAV_FONT,
                    "text-sm font-semibold uppercase tracking-[0.12em] text-foreground"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <Button
                fullWidth
                onClick={() => {
                  setMobileOpen(false);
                  scrollToLeadForm();
                }}
              >
                Получить презентацию
              </Button>
              <Button
                variant="outline"
                fullWidth
                onClick={() => {
                  setMobileOpen(false);
                  window.location.href = phoneHref;
                }}
              >
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

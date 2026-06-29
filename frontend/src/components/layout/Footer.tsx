import * as React from "react";
import Link from "next/link";
import { SiteSettings } from "@/types";
import { LeadFormDynamic } from "@/components/ui/LeadFormDynamic";
import { FooterLeadForm } from "@/components/ui/FooterLeadForm";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export interface FooterProps {
  settings: Partial<SiteSettings>;
}

const DEFAULT_SETTINGS: SiteSettings = {
  phone: "",
  email: "",
  schedule: "Пн-Пт: 09:00-18:00",
  legalName: "ООО «Яркие дети»",
  inn: "",
  ogrn: "",
  legalAddress: "",
  privacyPolicyUrl: "/privacy",
  offerUrl: "/offer",
  yandexMetrikaId: "",
  gtmId: "",
  socialLinks: {},
};

function LogoMark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1 font-semibold tracking-tight", className)}>
      <span className="text-secondary">Яркие</span>
      <span className="text-white">дети</span>
    </span>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/80 transition hover:border-white/30 hover:text-white"
    >
      {children}
    </a>
  );
}

function VkIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.946 4 8.522c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.779.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.475-.119.72-.576.72z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function FooterNavColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{title}</h3>
      <ul className="mt-6 space-y-3">
        {links.map((link) => (
          <li key={link.href + link.label}>
            {link.href === "#" ? (
              <span className="text-sm text-white/70">{link.label}</span>
            ) : link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 transition hover:text-white"
              >
                {link.label}
              </a>
            ) : (
              <Link href={link.href} className="text-sm text-white/70 transition hover:text-white">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ settings }: FooterProps) {
  const s = { ...DEFAULT_SETTINGS, ...settings };
  const phoneHref = s.phone ? `tel:${s.phone.replace(/\D/g, "")}` : "";
  const emailHref = s.email ? `mailto:${s.email}` : "";

  const hasSocials =
    s.socialLinks.vk || s.socialLinks.telegram || s.socialLinks.youtube || s.socialLinks.whatsapp;
  const hasLegal = s.inn || s.ogrn || s.legalName;
  const hasContacts = s.phone || s.email || s.legalAddress || s.schedule;

  return (
    <footer id="footer" className="text-white">
      {/* CTA band */}
      <section className="bg-[#111] py-20 lg:py-28">
        <div className="container-app">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Старт партнёрства</p>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                Получите финансовую модель франшизы «Яркие дети» для вашего города
              </h2>
              <ul className="mt-8 space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-secondary" />
                  Рассчитаем инвестиции под формат и локацию
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-secondary" />
                  Покажем сроки окупаемости и запуска
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-secondary" />
                  Оценим потенциальную выручку и прибыль
                </li>
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/70">40+</p>
                  <p className="text-sm text-white/70">центров по России</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/70">от 300 000 ₽</p>
                  <p className="text-sm text-white/70">чистой прибыли в месяц</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/70">24/7</p>
                  <p className="text-sm text-white/70">сопровождение партнёров</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm lg:p-8">
              <p className="mb-6 text-sm text-white/80">
                Заполните форму — менеджер пришлёт финмодель и ответит на вопросы в течение рабочего дня.
              </p>
              <FooterLeadForm
                buttonText="Получить расчёт"
                source="footer"
                variant="dark"
                showEmail={true}
                showMessenger={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <section className="bg-foreground py-16 lg:py-20">
        <div className="container-app">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Link href="/" className="inline-flex items-center">
                <LogoMark className="text-2xl" />
              <span className="sr-only">Главная</span>
              </Link>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/80">
                Франшиза детского образовательного центра с полным сопровождением: от выбора локации до
                первых продаж и стабильной прибыли.
              </p>

              <div className="mt-8 space-y-2">
                {[
                  s.phone ? (
                    <a
                      key="phone"
                      href={phoneHref}
                      className="block text-2xl font-semibold tracking-tight text-white transition hover:text-secondary"
                    >
                      {s.phone}
                    </a>
                  ) : null,
                  s.email ? (
                    <a
                      key="email"
                      href={emailHref}
                      className="block text-sm text-white/80 transition hover:text-white"
                    >
                      {s.email}
                    </a>
                  ) : null,
                  s.legalAddress ? (
                    <p key="address" className="max-w-xs text-sm text-white/70">{s.legalAddress}</p>
                  ) : null,
                  !s.phone && !s.email && !s.legalAddress && s.schedule ? (
                    <p key="schedule" className="max-w-xs text-sm text-white/70">{s.schedule}</p>
                  ) : null,
                ].filter(Boolean)}
              </div>

              {hasSocials ? (
                <div className="mt-8 flex gap-3">
                  <SocialIcon href={s.socialLinks.vk} label="ВКонтакте">
                    <VkIcon />
                  </SocialIcon>
                  <SocialIcon href={s.socialLinks.telegram} label="Telegram">
                    <TelegramIcon />
                  </SocialIcon>
                  <SocialIcon href={s.socialLinks.youtube} label="YouTube">
                    <YoutubeIcon />
                  </SocialIcon>
                  <SocialIcon href={s.socialLinks.whatsapp} label="WhatsApp">
                    <WhatsAppIcon />
                  </SocialIcon>
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-12 sm:grid-cols-3">
                <FooterNavColumn
                  title="Навигация"
                  links={NAV_LINKS.map((link) => ({
                    label: link.label,
                    href: link.href,
                  }))}
                />
                <FooterNavColumn
                  title="Информация"
                  links={[
                    { label: "Политика конфиденциальности", href: s.privacyPolicyUrl || "/privacy" },
                    { label: "Публичная оферта", href: s.offerUrl || "/offer" },
                    { label: "Блог", href: "/blog" },
                  ]}
                />
                {hasContacts && (
                  <FooterNavColumn
                    title="Контакты"
                    links={[
                      ...(s.phone ? [{ label: s.phone, href: phoneHref, external: true }] : []),
                      ...(s.email ? [{ label: s.email, href: emailHref, external: true }] : []),
                      ...(s.schedule ? [{ label: s.schedule, href: "#", external: true }] : []),
                    ]}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-xs text-white/70 md:flex-row">
            <div className="text-center md:text-left">
              {hasLegal ? (
                <span>
                  {[s.legalName, s.inn && ` · ИНН ${s.inn}`, s.ogrn && ` · ОГРН ${s.ogrn}`]
                    .filter(Boolean)
                    .join("")}
                </span>
              ) : (
                <span suppressHydrationWarning>© {new Date().getFullYear()} Франшиза «Яркие дети»</span>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link href="/privacy" className="transition hover:text-white">Политика конфиденциальности</Link>
              <Link href="/offer" className="transition hover:text-white">Оферта</Link>
              <Link href="/blog" className="transition hover:text-white">Блог</Link>
            </div>

            {hasSocials ? (
              <div className="flex gap-3 md:hidden">
                <SocialIcon href={s.socialLinks.vk} label="ВКонтакте">
                  <VkIcon />
                </SocialIcon>
                <SocialIcon href={s.socialLinks.telegram} label="Telegram">
                  <TelegramIcon />
                </SocialIcon>
                <SocialIcon href={s.socialLinks.youtube} label="YouTube">
                  <YoutubeIcon />
                </SocialIcon>
                <SocialIcon href={s.socialLinks.whatsapp} label="WhatsApp">
                  <WhatsAppIcon />
                </SocialIcon>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </footer>
  );
}

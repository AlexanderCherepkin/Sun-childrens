import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { HeaderScrollTracker } from "./HeaderScrollTracker";
import { HeaderMobileMenu } from "./HeaderMobileMenu";

export interface HeaderProps {
  phone: string;
  schedule?: string;
}

const PHONE_LABEL = "ТЕЛЕФОН";
const SCHEDULE_LABEL = "ГРАФИК РАБОТЫ";
const DEFAULT_SCHEDULE = "Пн-Пт: 09:00-18:00";
const NAV_FONT = "font-[family-name:var(--font-playfair)]";

function LogoSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 520 80"
      className="h-10 w-auto lg:h-12"
      aria-label="Яркие дети"
      role="img"
    >
      <title>Яркие дети</title>
      <defs>
        <linearGradient id="gradY" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff9f43" />
          <stop offset="100%" stopColor="#ff7a00" />
        </linearGradient>
        <linearGradient id="gradA" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#ee5253" />
        </linearGradient>
        <linearGradient id="gradR" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#48dbfb" />
          <stop offset="100%" stopColor="#0abde3" />
        </linearGradient>
        <linearGradient id="gradK" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1dd1a1" />
          <stop offset="100%" stopColor="#10ac84" />
        </linearGradient>
        <linearGradient id="gradI" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#feca57" />
          <stop offset="100%" stopColor="#ff9f43" />
        </linearGradient>
        <linearGradient id="gradE" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff9ff3" />
          <stop offset="100%" stopColor="#f368e0" />
        </linearGradient>
        <linearGradient id="gradD" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#54a0ff" />
          <stop offset="100%" stopColor="#2e86de" />
        </linearGradient>
        <linearGradient id="gradT" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5f27cd" />
          <stop offset="100%" stopColor="#341f97" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#000" floodOpacity="0.18" />
        </filter>
      </defs>

      <g filter="url(#softShadow)">
        <g transform="translate(4, 8)">
          <ellipse cx="22" cy="55" rx="16" ry="12" fill="#fff3e0" />
          <text x="22" y="48" textAnchor="middle" fontSize="44" fontFamily="system-ui, sans-serif" fontWeight="800" fill="url(#gradY)">Я</text>
          <circle cx="30" cy="16" r="4" fill="#ff7a00" />
          <circle cx="36" cy="12" r="2.5" fill="#ffd600" />
        </g>

        <g transform="translate(48, 8)">
          <ellipse cx="22" cy="55" rx="16" ry="12" fill="#fff0f0" />
          <text x="22" y="48" textAnchor="middle" fontSize="44" fontFamily="system-ui, sans-serif" fontWeight="800" fill="url(#gradA)">р</text>
          <circle cx="8" cy="18" r="3" fill="#ff6b6b" />
          <circle cx="4" cy="12" r="2" fill="#ff6b6b" opacity="0.7" />
        </g>

        <g transform="translate(92, 8)">
          <ellipse cx="22" cy="55" rx="16" ry="12" fill="#e6f8fc" />
          <text x="22" y="48" textAnchor="middle" fontSize="44" fontFamily="system-ui, sans-serif" fontWeight="800" fill="url(#gradR)">к</text>
          <path d="M34 12 L40 6 L36 18 Z" fill="#0abde3" />
          <path d="M40 12 L46 8 L42 18 Z" fill="#48dbfb" />
        </g>

        <g transform="translate(136, 8)">
          <ellipse cx="22" cy="55" rx="16" ry="12" fill="#eafff5" />
          <text x="22" y="48" textAnchor="middle" fontSize="44" fontFamily="system-ui, sans-serif" fontWeight="800" fill="url(#gradK)">и</text>
          <circle cx="36" cy="16" r="4" fill="#1dd1a1" />
          <path d="M36 10 L38 4 L34 4 Z" fill="#10ac84" />
        </g>

        <g transform="translate(180, 8)">
          <ellipse cx="22" cy="55" rx="16" ry="12" fill="#fff9e6" />
          <text x="22" y="48" textAnchor="middle" fontSize="44" fontFamily="system-ui, sans-serif" fontWeight="800" fill="url(#gradI)">е</text>
          <rect x="6" y="8" width="6" height="6" rx="1.5" fill="#feca57" />
          <rect x="14" y="4" width="4" height="4" rx="1" fill="#ff9f43" />
        </g>

        <g transform="translate(230, 8)">
          <ellipse cx="22" cy="55" rx="16" ry="12" fill="#fdefff" />
          <text x="22" y="48" textAnchor="middle" fontSize="44" fontFamily="system-ui, sans-serif" fontWeight="800" fill="url(#gradE)">Д</text>
          <circle cx="36" cy="14" r="5" fill="#ff9ff3" opacity="0.8" />
          <circle cx="40" cy="22" r="3" fill="#f368e0" opacity="0.7" />
        </g>

        <g transform="translate(274, 8)">
          <ellipse cx="22" cy="55" rx="16" ry="12" fill="#eef5ff" />
          <text x="22" y="48" textAnchor="middle" fontSize="44" fontFamily="system-ui, sans-serif" fontWeight="800" fill="url(#gradD)">е</text>
          <path d="M6 12 Q10 6 14 12" stroke="#2e86de" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M10 18 Q14 12 18 18" stroke="#54a0ff" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>

        <g transform="translate(318, 8)">
          <ellipse cx="22" cy="55" rx="16" ry="12" fill="#f3efff" />
          <text x="22" y="48" textAnchor="middle" fontSize="44" fontFamily="system-ui, sans-serif" fontWeight="800" fill="url(#gradT)">т</text>
          <polygon points="36,6 38,12 44,12 39,16 41,22 36,18 31,22 33,16 28,12 34,12" fill="#5f27cd" />
        </g>

        <g transform="translate(362, 8)">
          <ellipse cx="22" cy="55" rx="16" ry="12" fill="#fff3e0" />
          <text x="22" y="48" textAnchor="middle" fontSize="44" fontFamily="system-ui, sans-serif" fontWeight="800" fill="url(#gradY)">и</text>
          <circle cx="10" cy="16" r="4" fill="#ff7a00" />
          <circle cx="6" cy="24" r="2.5" fill="#ffd600" />
        </g>
      </g>
    </svg>
  );
}

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

export function Header({ phone, schedule = DEFAULT_SCHEDULE }: HeaderProps) {
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  return (
    <header
      id="main-header"
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        "bg-gradient-to-r from-[#FFF5B7] via-[#E6F980] to-[#FFC9DE]",
        "lg:backdrop-blur"
      )}
    >
      <HeaderScrollTracker targetId="main-header" />

      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block" aria-hidden="true">
        <svg className="absolute left-0 top-0 h-full w-full opacity-40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <rect x="0" y="0" width="100%" height="6" fill="url(#stripeGrad)" />
          <rect x="0" y="calc(100% - 6px)" width="100%" height="6" fill="url(#stripeGrad)" />
          <defs>
            <linearGradient id="stripeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffd600" />
              <stop offset="20%" stopColor="#ff9f43" />
              <stop offset="40%" stopColor="#ff6b6b" />
              <stop offset="60%" stopColor="#1dd1a1" />
              <stop offset="80%" stopColor="#54a0ff" />
              <stop offset="100%" stopColor="#5f27cd" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute left-[6%] top-[20%] h-2.5 w-2.5 rotate-12 rounded-sm bg-[#ff9f43]" />
        <div className="absolute left-[14%] top-[55%] h-2 w-2 -rotate-45 rounded-full bg-[#1dd1a1]" />
        <div className="absolute left-[22%] top-[30%] h-3 w-1.5 rotate-45 rounded-full bg-[#ff6b6b]" />
        <div className="absolute left-[32%] top-[70%] h-2 w-2 rotate-12 rounded-sm bg-[#54a0ff]" />
        <div className="absolute left-[42%] top-[25%] h-1.5 w-3 -rotate-12 rounded-full bg-[#ffd600]" />
        <div className="absolute left-[52%] top-[60%] h-2.5 w-2.5 rotate-30 rounded-full bg-[#ff9ff3]" />
        <div className="absolute left-[62%] top-[35%] h-2 w-2 -rotate-12 rounded-sm bg-[#10ac84]" />
        <div className="absolute left-[72%] top-[65%] h-3 w-1.5 rotate-60 rounded-full bg-[#ff7a00]" />
        <div className="absolute left-[82%] top-[28%] h-2 w-2 rotate-12 rounded-full bg-[#5f27cd]" />
        <div className="absolute left-[90%] top-[52%] h-2.5 w-2.5 -rotate-30 rounded-sm bg-[#0abde3]" />
        <div className="absolute left-[7%] top-[78%] h-1.5 w-1.5 rotate-12 rounded-full bg-[#ee5253]" />
        <div className="absolute left-[95%] top-[18%] h-2 w-2 rotate-45 rounded-full bg-[#feca57]" />
      </div>

      <div className="container-app relative z-10">
        <div className="flex items-center justify-between gap-4 py-3 lg:py-4">
          <Link href="/" className="flex items-center">
            <LogoSvg />
          </Link>

          <div className="hidden items-center gap-6 xl:flex">
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

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="outline" size="sm" href={phoneHref}>
              Заказать звонок
            </Button>
            <Button size="sm" href="#lead-form-1">
              Получить презентацию
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={phoneHref}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-primary-dark hover:bg-primary-light"
              aria-label={phone ? `Позвонить: ${phone}` : "Телефон"}
            >
              <PhoneIcon />
            </a>
            <HeaderMobileMenu phone={phone} schedule={schedule} />
          </div>
        </div>

        <div className="hidden items-center justify-between gap-4 border-t border-border pb-4 pt-2 lg:flex">
          <nav className="flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  NAV_FONT,
                  "group relative text-sm font-bold uppercase tracking-[0.14em] text-foreground/80 transition duration-300 hover:text-primary-dark"
                )}
              >
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary-dark transition-all duration-300 group-hover:w-full" />
                {link.label}
              </a>
            ))}
          </nav>

          <Button variant="primary" size="sm" href="#lead-form-1">
            Оставить заявку
          </Button>
        </div>
      </div>
    </header>
  );
}

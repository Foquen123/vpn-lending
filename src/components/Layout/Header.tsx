'use client';
import { ShieldCheck, Moon, SunMedium, Menu, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const links: { href: string; name: string }[] = [
  {
    href: '#benefits',
    name: 'Преимущества',
  },
  {
    href: '#servers',
    name: 'Сервера',
  },
  {
    href: '#plans',
    name: 'Тарифы',
  },
  {
    href: '#devices',
    name: 'Устройства',
  },
  {
    href: '#faq',
    name: 'Вопросы',
  },
];

function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const init = () => {
      setMounted(true);
    };
    init();
  }, []);

  const cycleTheme = () => {
    if (theme === 'system') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('system');
    }
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-dark-border bg-dark-surface text-text-primary transition"
        aria-label="Загрузка..."
        disabled
      >
        <div className="h-5 w-5 animate-pulse rounded-full bg-gray-400/20" />
      </button>
    );
  }

  return (
    <button
      type="button"
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-dark-border bg-dark-surface text-text-primary transition hover:scale-[1.02] hover:border-accent-primary"
      aria-label="Переключить тему"
      onClick={cycleTheme}
    >
      <div className="relative h-5 w-5">
        <SunMedium
          className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
            theme === 'light'
              ? 'rotate-0 scale-100 opacity-100'
              : 'rotate-90 scale-0 opacity-0'
          }`}
        />
        <Moon
          className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
            theme === 'dark'
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
        <Monitor
          className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
            theme === 'system'
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
    </button>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-dark-border bg-(--dark-deep)/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-primary text-white shadow-lg shadow-(color:--accent-primary)/30">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold tracking-wide">
                VPN Shield
              </div>
              <div className="text-xs text-text-muted">
                Secure internet access
              </div>
            </div>
          </div>

          <nav className=" items-center gap-8 flex max-[940px]:hidden">
            {links.map((l) => (
              <a
                key={l.name}
                className="text-sm text-text-secondary transition hover:text-text-primary"
                href={l.href}
              >
                {l.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ToggleThemeButton></ToggleThemeButton>
            <button
              type="button"
              className="inline-flex min-[940px]:hidden h-11 w-11 items-center justify-center rounded-xl border border-dark-border bg-dark-surface text-text-primary "
              aria-label="Открыть меню"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>

            <a
              href="#plans"
              className="hidden rounded-xl bg-accent-primary px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-(color:--accent-primary)/25 transition hover:bg-accent-glow sm:inline-flex"
            >
              Подключить VPN
            </a>
          </div>
        </div>
      </header>
      <>
        {isMenuOpen && (
          <div
            className="fixed  inset-0 z-50 bg-black/60 backdrop-blur-sm "
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        <div
          className={`fixed  right-0 top-0 z-50 h-full w-80 transform border-l border-dark-border bg-dark-deep p-6 shadow-2xl transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-dark-border bg-dark-surface text-text-primary"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Закрыть меню"
            >
              ✕
            </button>
          </div>
          <nav className="mt-8 flex flex-col gap-6">
            {links.map((l) => (
              <a
                key={l.name}
                className="text-lg text-text-secondary transition hover:text-text-primary"
                href={l.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {l.name}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-dark-border">
              <a
                href="#plans"
                className="inline-flex w-full items-center justify-center rounded-xl bg-accent-primary px-5 py-3 text-sm font-medium text-white shadow-lg shadow-(color:--accent-primary)/25 transition hover:bg-accent-glow"
                onClick={() => setIsMenuOpen(false)}
              >
                Подключить VPN
              </a>
            </div>
          </nav>
        </div>
      </>
    </>
  );
}

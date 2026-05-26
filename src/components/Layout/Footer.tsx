import {
  ArrowRight,
  Clock,
  Mail,
  MessageCircle,
  Shield,
  ShieldCheck,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-dark-border bg-dark-surface/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
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
            <p className="text-sm text-text-secondary">
              Современный VPN-сервис с упором на скорость, стабильность и
              приватность. Защищаем ваши данные с 2020 года.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-muted">
              Навигация
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Преимущества', href: '#benefits' },
                { name: 'Тарифы', href: '#plans' },
                { name: 'Серверы', href: '#servers' },
                { name: 'Как работает', href: '#how-it-works' },
                { name: 'FAQ', href: '#faq' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-text-secondary transition hover:text-accent-primary"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-muted">
              Юридическая информация
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Политика конфиденциальности', href: '#' },
                { name: 'Публичная оферта', href: '#' },
                { name: 'Политика возврата', href: '#' },
                { name: 'DMCA', href: '#' },
                { name: 'Лицензионное соглашение', href: '#' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-text-secondary transition hover:text-accent-primary"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-muted">
              Связаться с нами
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <Mail className="h-4 w-4 text-accent-cyan" />
                <a
                  href="mailto:support@example.com"
                  className="hover:text-accent-primary"
                >
                  support@example.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <MessageCircle className="h-4 w-4 text-accent-cyan" />
                <a href="#" className="hover:text-accent-primary">
                  Telegram: @example
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <Clock className="h-4 w-4 text-accent-cyan" />
                <span>Поддержка 24/7</span>
              </li>
            </ul>

            <div className="mt-6">
              <p className="mb-2 text-sm text-text-secondary">
                Будьте в курсе новостей
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 rounded-xl border border-dark-border bg-dark-elevated px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none"
                />
                <button
                  type="button"
                  className="rounded-xl bg-accent-primary px-3 py-2 text-white transition hover:bg-accent-glow"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-xs text-text-muted">
                Никакого спама, только важные обновления
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-dark-border pt-8 text-center sm:flex-row">
          <div className="text-sm text-text-muted">
            © {new Date().getFullYear()} VPN Shield. Все права защищены.
          </div>
          <div className="flex gap-6 text-sm text-text-muted">
            <a href="#" className="transition hover:text-accent-primary">
              Пользовательское соглашение
            </a>
            <a href="#" className="transition hover:text-accent-primary">
              Cookies
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Shield className="h-3 w-3" />
            Работает на Next.js
          </div>
        </div>
      </div>
    </footer>
  );
}

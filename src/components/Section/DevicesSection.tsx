import {
  Check,
  Clock,
  Globe,
  Monitor,
  Repeat,
  Smartphone,
  Terminal,
  Tv,
  Users,
  Wifi,
} from 'lucide-react';
import BlurReveal from '@/components/BlurReveal';
import StaggerReveal from '@/components/StaggerReveal';
import ScrollReveal from '@/components/ScrollReveal';

export default function DevicesSection() {
  return (
    <section
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      id="devices"
    >
      {/* Заголовок с размытием */}
      <BlurReveal className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-dark-border bg-dark-surface px-4 py-2 text-sm text-text-secondary">
          <Smartphone className="h-4 w-4 text-accent-cyan" />
          Кроссплатформенность
        </div>
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Работает на всех ваших устройствах
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
          Одна подписка — защита для всех устройств в вашей цифровой жизни
        </p>
      </BlurReveal>

      {/* Сетка устройств с каскадным появлением */}
      <StaggerReveal
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        staggerDelay={0.08}
      >
        {/* Windows */}
        <div className="group rounded-2xl border border-dark-border bg-dark-surface p-6 text-center transition-all hover:-translate-y-1 hover:border-accent-primary hover:shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30">
            <Monitor className="h-8 w-8 text-blue-400" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">Windows</h3>
          <p className="mt-1 text-sm text-text-muted">10 / 11</p>
          <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-dark-elevated px-2 py-0.5 text-xs text-text-muted">
            <Check className="h-3 w-3 text-success" />
            Готово
          </div>
        </div>

        {/* macOS */}
        <div className="group rounded-2xl border border-dark-border bg-dark-surface p-6 text-center transition-all hover:-translate-y-1 hover:border-accent-primary hover:shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-500/20 to-slate-500/20 group-hover:from-gray-500/30 group-hover:to-slate-500/30">
            <Monitor className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">macOS</h3>
          <p className="mt-1 text-sm text-text-muted">Ventura и новее</p>
          <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-dark-elevated px-2 py-0.5 text-xs text-text-muted">
            <Check className="h-3 w-3 text-success" />
            Готово
          </div>
        </div>

        {/* Android */}
        <div className="group rounded-2xl border border-dark-border bg-dark-surface p-6 text-center transition-all hover:-translate-y-1 hover:border-accent-primary hover:shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 group-hover:from-green-500/30 group-hover:to-emerald-500/30">
            <Smartphone className="h-8 w-8 text-green-400" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">Android</h3>
          <p className="mt-1 text-sm text-text-muted">10 и выше</p>
          <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-dark-elevated px-2 py-0.5 text-xs text-text-muted">
            <Check className="h-3 w-3 text-success" />
            Готово
          </div>
        </div>

        {/* iOS */}
        <div className="group rounded-2xl border border-dark-border bg-dark-surface p-6 text-center transition-all hover:-translate-y-1 hover:border-accent-primary hover:shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30">
            <Smartphone className="h-8 w-8 text-purple-400" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">iOS</h3>
          <p className="mt-1 text-sm text-text-muted">15 и выше</p>
          <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-dark-elevated px-2 py-0.5 text-xs text-text-muted">
            <Check className="h-3 w-3 text-success" />
            Готово
          </div>
        </div>

        {/* Linux */}
        <div className="group rounded-2xl border border-dark-border bg-dark-surface p-6 text-center transition-all hover:-translate-y-1 hover:border-accent-primary hover:shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 group-hover:from-orange-500/30 group-hover:to-amber-500/30">
            <Terminal className="h-8 w-8 text-orange-400" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">Linux</h3>
          <p className="mt-1 text-sm text-text-muted">Ubuntu, Debian, Fedora</p>
          <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-dark-elevated px-2 py-0.5 text-xs text-text-muted">
            <Check className="h-3 w-3 text-success" />
            CLI + GUI
          </div>
        </div>

        {/* Routers */}
        <div className="group rounded-2xl border border-dark-border bg-dark-surface p-6 text-center transition-all hover:-translate-y-1 hover:border-accent-primary hover:shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 group-hover:from-indigo-500/30 group-hover:to-blue-500/30">
            <Wifi className="h-8 w-8 text-indigo-400" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">Роутеры</h3>
          <p className="mt-1 text-sm text-text-muted">OpenWRT, DD-WRT, ASUS</p>
          <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-dark-elevated px-2 py-0.5 text-xs text-text-muted">
            <Check className="h-3 w-3 text-success" />
            Защита всей сети
          </div>
        </div>

        {/* Chrome Extension */}
        <div className="group rounded-2xl border border-dark-border bg-dark-surface p-6 text-center transition-all hover:-translate-y-1 hover:border-accent-primary hover:shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/20 to-yellow-500/20 group-hover:from-red-500/30 group-hover:to-yellow-500/30">
            <Globe className="h-8 w-8 text-red-400" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">Браузеры</h3>
          <p className="mt-1 text-sm text-text-muted">Chrome, Firefox, Edge</p>
          <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-dark-elevated px-2 py-0.5 text-xs text-text-muted">
            <Check className="h-3 w-3 text-success" />
            Расширение
          </div>
        </div>

        {/* Smart TV */}
        <div className="group rounded-2xl border border-dark-border bg-dark-surface p-6 text-center transition-all hover:-translate-y-1 hover:border-accent-primary hover:shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 group-hover:from-teal-500/30 group-hover:to-cyan-500/30">
            <Tv className="h-8 w-8 text-teal-400" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">Smart TV</h3>
          <p className="mt-1 text-sm text-text-muted">Android TV, Apple TV</p>
          <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-dark-elevated px-2 py-0.5 text-xs text-text-muted">
            <Check className="h-3 w-3 text-success" />
            Стриминг
          </div>
        </div>
      </StaggerReveal>

      {/* Блок с преимуществами — отдельная анимация */}
      <ScrollReveal direction="up" delay={0.2} className="mt-12">
        <div className="rounded-3xl bg-gradient-to-r from-accent-primary/5 to-accent-cyan/5 p-4 sm:p-6">
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:flex-wrap lg:flex-nowrap lg:text-left">
            {/* Первый блок */}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-primary/10 sm:h-14 sm:w-14">
                <Users className="h-6 w-6 text-accent-primary sm:h-7 sm:w-7" />
              </div>
              <div>
                <div className="text-xl font-bold sm:text-2xl">
                  До 5 устройств
                </div>
                <div className="text-sm text-text-muted sm:text-base">
                  по одной подписке Pro
                </div>
              </div>
            </div>

            {/* Разделитель */}
            <div className="h-px w-full bg-dark-border sm:hidden" />
            <div className="hidden h-12 w-px bg-dark-border sm:block" />

            {/* Второй блок */}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-cyan/10 sm:h-14 sm:w-14">
                <Repeat className="h-6 w-6 text-accent-cyan sm:h-7 sm:w-7" />
              </div>
              <div>
                <div className="text-xl font-bold sm:text-2xl">
                  Неограниченный трафик
                </div>
                <div className="text-sm text-text-muted sm:text-base">
                  на всех тарифах
                </div>
              </div>
            </div>

            {/* Разделитель */}
            <div className="h-px w-full bg-dark-border sm:hidden" />
            <div className="hidden h-12 w-px bg-dark-border sm:block" />

            {/* Третий блок */}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-success/10 sm:h-14 sm:w-14">
                <Clock className="h-6 w-6 text-success sm:h-7 sm:w-7" />
              </div>
              <div>
                <div className="text-xl font-bold sm:text-2xl">
                  Бесплатные обновления
                </div>
                <div className="text-sm text-text-muted sm:text-base">
                  на все устройства
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

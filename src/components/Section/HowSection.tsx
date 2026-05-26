import {
  ArrowRight,
  Check,
  Download,
  ShieldCheck,
  ToggleLeft,
  Zap,
} from 'lucide-react';
import BlurReveal from '@/components/BlurReveal';
import StaggerReveal from '@/components/StaggerReveal';
import ScrollReveal from '@/components/ScrollReveal';

export default function HowSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="how">
      {/* Заголовок с эффектом размытия */}
      <BlurReveal className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-dark-border bg-dark-surface px-4 py-2 text-sm text-text-secondary">
          <Zap className="h-4 w-4 text-accent-cyan" />
          Простота и скорость
        </div>
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Начните пользоваться за 3 минуты
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
          Никаких сложных настроек — всё работает сразу после установки
        </p>
      </BlurReveal>

      {/* <div className="absolute left-1/3 right-1/3 top-20 hidden h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent md:block" /> */}
      <StaggerReveal className="relative grid gap-8 md:grid-cols-3">
        <div className="group relative rounded-3xl border border-dark-border bg-dark-surface p-6 text-center transition-all hover:-translate-y-2 hover:border-accent-primary hover:shadow-xl">
          <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary to-accent-cyan shadow-lg">
            <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-dark-surface text-lg font-bold text-accent-primary shadow-md">
              1
            </span>
            <Download className="h-8 w-8 text-white" />
          </div>
          <h3 className="mt-6 text-xl font-semibold">Скачайте приложение</h3>
          <p className="mt-3 text-text-secondary">
            Доступно для всех платформ: Windows, macOS, iOS, Android, Linux и
            даже роутеров
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {['Windows', 'macOS', 'iOS', 'Android'].map((os) => (
              <span
                key={os}
                className="rounded-full bg-dark-elevated px-3 py-1 text-xs text-text-muted"
              >
                {os}
              </span>
            ))}
          </div>
        </div>

        <div className="group relative rounded-3xl border border-dark-border bg-dark-surface p-6 text-center transition-all hover:-translate-y-2 hover:border-accent-primary hover:shadow-xl">
          <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary to-accent-cyan shadow-lg">
            <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-dark-surface text-lg font-bold text-accent-primary shadow-md">
              2
            </span>
            <ToggleLeft className="h-8 w-8 text-white" />
          </div>
          <h3 className="mt-6 text-xl font-semibold">Нажмите «Подключиться»</h3>
          <p className="mt-3 text-text-secondary">
            Одно нажатие — и ваше соединение зашифровано. Мы подберем лучший
            сервер автоматически
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent-primary/10 px-3 py-1 text-sm text-accent-primary">
            <Check className="h-3 w-3" />
            Kill Switch активен
          </div>
        </div>

        <div className="group relative rounded-3xl border border-dark-border bg-dark-surface p-6 text-center transition-all hover:-translate-y-2 hover:border-accent-primary hover:shadow-xl">
          <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary to-accent-cyan shadow-lg">
            <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-dark-surface text-lg font-bold text-accent-primary shadow-md">
              3
            </span>
            <ShieldCheck className="h-8 w-8 text-white" />
          </div>
          <h3 className="mt-6 text-xl font-semibold">Пользуйтесь безопасно</h3>
          <p className="mt-3 text-text-secondary">
            Ваш IP скрыт, трафик зашифрован. Смотрите контент, играйте и
            работайте без ограничений
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-success">
            <div className="h-2 w-2 animate-pulse rounded-full bg-success" />
            Защита активна
          </div>
        </div>
      </StaggerReveal>

      {/* Гарантийная плашка с отдельной анимацией */}
      <ScrollReveal direction="up" delay={0.3} className="mt-12">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-dark-border bg-dark-elevated p-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
              <Check className="h-6 w-6 text-success" />
            </div>
            <div>
              <div className="font-semibold">30 дней гарантии возврата</div>
              <div className="text-sm text-text-muted">
                Попробуйте VPN без риска — вернем деньги, если не подойдет
              </div>
            </div>
          </div>
          <a
            href="#plans"
            className="inline-flex items-center gap-2 rounded-xl bg-accent-primary px-5 py-2.5 font-medium text-white transition hover:bg-accent-glow"
          >
            Начать бесплатно
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}

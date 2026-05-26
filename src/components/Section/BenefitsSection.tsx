

import { Globe2, ShieldCheck, Zap } from 'lucide-react';
import StaggerReveal from '@/components/StaggerReveal';
import BlurReveal from '@/components/BlurReveal';

const features = [
  {
    icon: ShieldCheck,
    title: 'AES-256 защита',
    text: 'Надёжное шифрование трафика, чтобы данные оставались приватными в любых сетях.',
  },
  {
    icon: Zap,
    title: 'Высокая скорость',
    text: 'Оптимизированная инфраструктура для стриминга, игр и повседневного серфинга без лагов.',
  },
  {
    icon: Globe2,
    title: 'Серверы по всему миру',
    text: 'Выбор локаций для стабильного доступа к нужным сервисам и быстрого соединения.',
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <BlurReveal className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-semibold">Преимущества сервиса</h2>
      </BlurReveal>

      <StaggerReveal className="grid gap-6 md:grid-cols-3" staggerDelay={0.15}>
        {features.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-3xl border border-dark-border bg-dark-surface p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 h-full"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-dark-elevated text-accent-primary">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">{title}</h3>
            <p className="mt-3 leading-7 text-text-secondary">{text}</p>
          </article>
        ))}
      </StaggerReveal>
    </section>
  );
}

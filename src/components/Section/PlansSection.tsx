

import { Check } from 'lucide-react';
import BlurReveal from '@/components/BlurReveal';
import StaggerReveal from '@/components/StaggerReveal';

const plans = [
  {
    name: 'Starter',
    price: '199 ₽',
    period: '/ мес',
    description: 'Для личного использования и безопасного серфинга.',
    items: ['1 устройство', 'Базовые локации', '24/7 поддержка'],
    featured: false,
  },
  {
    name: 'Pro',
    price: '399 ₽',
    period: '/ мес',
    description: 'Оптимальный вариант для повседневной работы и контента.',
    items: ['До 5 устройств', 'Все локации', 'Приоритетная поддержка'],
    featured: true,
  },
  {
    name: 'Team',
    price: '799 ₽',
    period: '/ мес',
    description: 'Для команды, семьи или нескольких активных пользователей.',
    items: [
      'До 10 устройств',
      'Расширенные настройки',
      'Персональный менеджер',
    ],
    featured: false,
  },
];

export default function PlansSection() {
  return (
    <section
      id="plans"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Заголовок с размытием */}
      <BlurReveal className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-semibold">Тарифы</h2>
      </BlurReveal>

      {/* Карточки с каскадным появлением */}
      <StaggerReveal className="grid gap-6 lg:grid-cols-3" staggerDelay={0.2}>
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-3xl border p-6 ${
              plan.featured
                ? 'border-accent-primary bg-[linear-gradient(180deg,rgba(108,92,231,0.12),rgba(17,24,39,0))]'
                : 'border-dark-border bg-dark-surface'
            }`}
          >
            {plan.featured && (
              <div className="mb-4 inline-flex rounded-full bg-accent-primary px-3 py-1 text-xs font-medium text-white">
                Popular
              </div>
            )}
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <div className="mt-4 flex items-end gap-1">
              <span className="text-4xl font-semibold">{plan.price}</span>
              <span className="pb-1 text-text-muted">{plan.period}</span>
            </div>
            <p className="mt-4 text-text-secondary">{plan.description}</p>
            <ul className="mt-6 space-y-3">
              {plan.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-text-secondary"
                >
                  <Check className="h-4 w-4 text-success" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={`mt-8 w-full rounded-xl px-5 py-3.5 font-medium transition ${
                plan.featured
                  ? 'bg-accent-primary text-white hover:bg-accent-glow'
                  : 'border border-dark-border bg-dark-elevated text-text-primary hover:border-accent-primary'
              }`}
            >
              Выбрать {plan.name}
            </button>
          </article>
        ))}
      </StaggerReveal>
    </section>
  );
}

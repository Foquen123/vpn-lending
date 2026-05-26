'use client';

import {
  ArrowRight,
  Check,
  ChevronDown,
  Headphones,
  HelpCircle,
  Mail,
  MessageCircle,
  MessageSquare,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import BlurReveal from '../BlurReveal';
import ScrollReveal from '../ScrollReveal';

const faqItems = [
  {
    question: 'Будет ли падать скорость интернета?',
    answer: (
      <>
        <p>
          Наши серверы оптимизированы для минимальной потери скорости. В среднем
          снижение составляет 10-15%, что незаметно при обычном серфинге,
          стриминге и даже онлайн-играх. Благодаря протоколу WireGuard вы
          получите максимальную скорость среди VPN-решений.
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm text-success">
          <Check className="h-4 w-4" />
          Большинство пользователей не замечают разницы в скорости
        </div>
      </>
    ),
  },
  {
    question: 'Вы храните логи моей активности?',
    answer: (
      <>
        <p className="mb-3">
          <span className="font-semibold text-accent-primary">
            Нет, мы не храним логи.
          </span>{' '}
          У нас строгая политика no-logs, подтвержденная независимым аудитом. Мы
          не собираем:
        </p>
        <ul className="space-y-2">
          {[
            'IP-адреса при подключении',
            'Историю посещенных сайтов',
            'Время и длительность сессий',
            'Объем переданного трафика',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm">
              <X className="h-3.5 w-3.5 text-danger" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 rounded-lg bg-accent-primary/5 p-3 text-sm">
          🔒 Единственное, что мы храним — зашифрованные данные для оплаты и
          обратной связи.
        </p>
      </>
    ),
  },
  {
    question: 'Сколько устройств можно подключить?',
    answer: (
      <>
        <p>Количество устройств зависит от выбранного тарифа:</p>
        <ul className="mt-3 space-y-2">
          {[
            {
              plan: 'Starter',
              devices: '1 устройство',
              color: 'text-text-secondary',
            },
            {
              plan: 'Pro',
              devices: 'До 5 устройств',
              color: 'text-accent-primary',
            },
            {
              plan: 'Team',
              devices: 'До 10 устройств',
              color: 'text-accent-cyan',
            },
          ].map((item) => (
            <li
              key={item.plan}
              className="flex items-center justify-between border-b border-dark-border pb-2 last:border-0"
            >
              <span className="font-medium">{item.plan}</span>
              <span className={item.color}>{item.devices}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-text-muted">
          Вы можете использовать VPN на всех устройствах одновременно —
          ограничений по времени нет.
        </p>
      </>
    ),
  },
  {
    question: 'Подходит ли VPN для Netflix и других сервисов?',
    answer: (
      <>
        <p>
          Да! Наши серверы оптимизированы для разблокировки популярных
          стриминговых сервисов:
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            'Netflix',
            'YouTube',
            'HBO Max',
            'Disney+',
            'Amazon Prime',
            'Spotify',
          ].map((service) => (
            <span
              key={service}
              className="rounded-full bg-dark-elevated px-3 py-1 text-sm"
            >
              {service}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-text-muted">
          💡 Рекомендуем использовать выделенные серверы для стриминга — они
          отмечены в приложении.
        </p>
      </>
    ),
  },
  {
    question: 'Как получить возврат денег?',
    answer: (
      <>
        <p>
          У нас действует{' '}
          <span className="font-semibold text-accent-primary">
            30-дневная гарантия возврата денег
          </span>
          . Если сервис вам не подошел, просто напишите в поддержку:
        </p>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm">
          <li>
            Отправьте запрос через форму на сайте или на почту
            support@vpnshield.com
          </li>
          <li>Укажите причину возврата (опционально, для улучшения сервиса)</li>
          <li>Мы вернем полную сумму в течение 7 рабочих дней</li>
        </ol>
        <div className="mt-4 rounded-lg bg-success/10 p-3 text-sm text-success">
          ✅ Деньги возвращаются без лишних вопросов — никаких скрытых комиссий
        </div>
      </>
    ),
  },
  {
    question: 'Что такое Kill Switch и зачем он нужен?',
    answer: (
      <>
        <p>
          Kill Switch (аварийное отключение) — это функция, которая
          автоматически блокирует интернет-трафик, если VPN-соединение
          неожиданно прерывается.
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-danger/20 bg-danger/5 p-3">
            <div className="text-sm font-semibold text-danger">
              Без Kill Switch
            </div>
            <div className="mt-1 text-xs text-text-muted">
              Ваш реальный IP может стать видимым на секунду
            </div>
          </div>
          <div className="rounded-xl border border-success/20 bg-success/5 p-3">
            <div className="text-sm font-semibold text-success">
              С Kill Switch
            </div>
            <div className="mt-1 text-xs text-text-muted">
              Трафик полностью блокируется до восстановления VPN
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm">
          Функция включена по умолчанию во всех наших приложениях.
        </p>
      </>
    ),
  },
  {
    question: 'Какая у вас служба поддержки?',
    answer: (
      <>
        <p>
          Мы работаем 24/7 и отвечаем в среднем за 2-5 минут. Вы можете
          связаться с нами:
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 rounded-xl border border-dark-border px-4 py-2">
            <MessageCircle className="h-4 w-4 text-accent-cyan" />
            <span className="text-sm">Онлайн-чат на сайте</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-dark-border px-4 py-2">
            <Mail className="h-4 w-4 text-accent-cyan" />
            <span className="text-sm">Email: support@vpnshield.com</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-dark-border px-4 py-2">
            <MessageSquare className="h-4 w-4 text-accent-cyan" />
            <span className="text-sm">Telegram: @vpnshield_support</span>
          </div>
        </div>
      </>
    ),
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      className={`mb-4 rounded-2xl border bg-dark-surface transition-colors ${
        isOpen ? 'border-accent-primary' : 'border-dark-border'
      }`}
      initial={false}
      animate={{
        borderColor: isOpen ? 'var(--accent-primary)' : 'var(--dark-border)',
      }}
    >
      <button
        onClick={onClick}
        className="flex w-full cursor-pointer list-none items-center justify-between p-6 font-medium text-left"
      >
        <span className="text-lg pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-5 w-5 text-text-muted flex-shrink-0" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.3, ease: 'easeInOut' },
              opacity: { duration: 0.2, delay: isOpen ? 0.1 : 0 },
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-dark-border px-6 pb-6 pt-4 text-text-secondary">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="faq">
      <BlurReveal className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-dark-border bg-dark-surface px-4 py-2 text-sm text-text-secondary">
          <HelpCircle className="h-4 w-4 text-accent-cyan" />
          Ответы на вопросы
        </div>
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Часто задаваемые вопросы
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
          Всё, что нужно знать перед началом использования
        </p>
      </BlurReveal>

      <div className="mx-auto max-w-3xl">
        {faqItems.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFaq(index)}
          />
        ))}
      </div>

      {/* Блок "Не нашли ответ?" */}
      <ScrollReveal direction="up" className="mx-auto mt-12 max-w-3xl">
        <div className="rounded-2xl bg-gradient-to-r from-accent-primary/5 to-accent-cyan/5 p-6 text-center">
          <Headphones className="mx-auto mb-3 h-8 w-8 text-accent-primary" />
          <h3 className="text-xl font-semibold">Остались вопросы?</h3>
          <p className="mt-2 text-text-secondary">
            Наша поддержка готова помочь вам 24/7. Среднее время ответа — 2
            минуты.
          </p>
          <button
            type="button"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-accent-primary px-5 py-2.5 font-medium text-white transition hover:bg-accent-glow"
          >
            Написать в поддержку
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}

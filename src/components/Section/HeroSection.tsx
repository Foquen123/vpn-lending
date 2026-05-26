'use client';

import { ArrowRight, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import BlurReveal from '../BlurReveal';
import ScaleReveal from '../ScaleReveal';
import StaggerReveal from '../StaggerReveal';
import TypewriterText from '../TypewriterText';

function RightSide() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Фоновое свечение */}
      <motion.div
        className="absolute -inset-6 rounded-4xl bg-[linear-gradient(135deg,rgba(108,92,231,0.25),rgba(0,168,138,0.15))] blur-3xl"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative h-[450px] w-[450px] sm:h-[500px] sm:w-[500px] lg:h-[550px] lg:w-[550px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Внешнее кольцо */}
        <motion.div
          className="absolute inset-0 rounded-full border border-accent-primary/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-8 rounded-full border border-accent-cyan/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-16 rounded-full border border-accent-primary/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />

        {/* Узлы сети — внешний круг */}
        {[
          { x: '50%', y: '8%', delay: 0, size: 'h-4 w-4' },
          { x: '79%', y: '16%', delay: 0.15, size: 'h-3 w-3' },
          { x: '92%', y: '37%', delay: 0.3, size: 'h-4 w-4' },
          { x: '87%', y: '60%', delay: 0.45, size: 'h-3 w-3' },
          { x: '70%', y: '80%', delay: 0.6, size: 'h-4 w-4' },
          { x: '45%', y: '86%', delay: 0.75, size: 'h-3 w-3' },
          { x: '20%', y: '72%', delay: 0.9, size: 'h-4 w-4' },
          { x: '8%', y: '48%', delay: 1.05, size: 'h-3 w-3' },
          { x: '13%', y: '24%', delay: 1.2, size: 'h-4 w-4' },
          { x: '28%', y: '10%', delay: 1.35, size: 'h-3 w-3' },
        ].map((point, i) => (
          <motion.div
            key={`outer-${i}`}
            className={`absolute ${point.size} -translate-x-1/2 -translate-y-1/2 rounded-full`}
            style={{ left: point.x, top: point.y }}
            initial={{ scale: 0 }}
            animate={{
              scale: [1, 1.6, 1],
              backgroundColor:
                i % 2 === 0
                  ? ['rgb(108,92,231)', 'rgb(0,216,170)', 'rgb(108,92,231)']
                  : ['rgb(0,216,170)', 'rgb(108,92,231)', 'rgb(0,216,170)'],
            }}
            transition={{
              scale: { duration: 3, delay: point.delay, repeat: Infinity },
              backgroundColor: {
                duration: 4,
                delay: point.delay,
                repeat: Infinity,
              },
            }}
          />
        ))}

        {/* Узлы сети — внутренний круг */}
        {[
          { x: '50%', y: '20%', delay: 0.5, size: 'h-2.5 w-2.5' },
          { x: '68%', y: '32%', delay: 0.7, size: 'h-2 w-2' },
          { x: '63%', y: '55%', delay: 0.9, size: 'h-2.5 w-2.5' },
          { x: '42%', y: '62%', delay: 1.1, size: 'h-2 w-2' },
          { x: '28%', y: '45%', delay: 1.3, size: 'h-2.5 w-2.5' },
          { x: '35%', y: '28%', delay: 1.5, size: 'h-2 w-2' },
        ].map((point, i) => (
          <motion.div
            key={`inner-${i}`}
            className={`absolute ${point.size} -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/60`}
            style={{ left: point.x, top: point.y }}
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{
              duration: 2.5,
              delay: point.delay,
              repeat: Infinity,
            }}
          />
        ))}

        {/* Линии сетки */}
        <svg className="absolute inset-0 h-full w-full">
          <defs>
            <motion.linearGradient
              id="lineGradient"
              animate={{
                x1: ['0%', '100%', '0%'],
                x2: ['100%', '0%', '100%'],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <stop offset="0%" stopColor="rgb(108,92,231)" stopOpacity="0.4" />
              <stop offset="50%" stopColor="rgb(0,216,170)" stopOpacity="0.4" />
              <stop
                offset="100%"
                stopColor="rgb(108,92,231)"
                stopOpacity="0.4"
              />
            </motion.linearGradient>
          </defs>

          {/* Внешние соединения */}
          {[
            ['50%', '8%', '79%', '16%'],
            ['79%', '16%', '92%', '37%'],
            ['92%', '37%', '87%', '60%'],
            ['87%', '60%', '70%', '80%'],
            ['70%', '80%', '45%', '86%'],
            ['45%', '86%', '20%', '72%'],
            ['20%', '72%', '8%', '48%'],
            ['8%', '48%', '13%', '24%'],
            ['13%', '24%', '28%', '10%'],
            ['28%', '10%', '50%', '8%'],
          ].map(([x1, y1, x2, y2], i) => (
            <motion.line
              key={`outer-line-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 + i * 0.08 }}
            />
          ))}

          {/* Внутренние соединения */}
          {[
            ['50%', '20%', '68%', '32%'],
            ['68%', '32%', '63%', '55%'],
            ['63%', '55%', '42%', '62%'],
            ['42%', '62%', '28%', '45%'],
            ['28%', '45%', '35%', '28%'],
            ['35%', '28%', '50%', '20%'],
          ].map(([x1, y1, x2, y2], i) => (
            <motion.line
              key={`inner-line-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1, delay: 1.5 + i * 0.1 }}
            />
          ))}

          {/* Соединения от центра к внешним узлам */}
          {[
            ['50%', '50%', '50%', '8%'],
            ['50%', '50%', '92%', '37%'],
            ['50%', '50%', '70%', '80%'],
            ['50%', '50%', '20%', '72%'],
            ['50%', '50%', '13%', '24%'],
            ['50%', '50%', '50%', '20%'],
          ].map(([x1, y1, x2, y2], i) => (
            <motion.line
              key={`center-line-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              strokeDasharray="6 3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0.5, 1] }}
              transition={{
                duration: 3,
                delay: 2 + i * 0.15,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          ))}
        </svg>

        {/* Бегущие точки по линиям */}
        {[
          ['50%', '8%', '79%', '16%', 0],
          ['79%', '16%', '92%', '37%', 0.8],
          ['92%', '37%', '87%', '60%', 1.6],
          ['50%', '50%', '70%', '80%', 2.4],
          ['50%', '50%', '13%', '24%', 3.2],
        ].map(([x1, y1, x2, y2, delay], i) => (
          <motion.div
            key={`runner-${i}`}
            className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg shadow-accent-primary/50"
            animate={{
              left: [x1, x2, x1],
              top: [y1, y2, y1],
            }}
            transition={{
              duration: 3,
              delay: delay as number,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Центральный узел */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
        >
          {/* Пульсирующие кольца */}
          {/* {[0, 1, 2].map((i) => (
            <motion.div
              key={`pulse-${i}`}
              className="absolute left-1/2 top-1/2 rounded-full border-2 border-accent-primary/30"
              style={{
                width: 60,
                height: 60,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                scale: [1, 1 + (i + 1) * 1.3],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 1,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))} */}

          {/* Основной круг */}
          <motion.div
            className="relative rounded-full bg-gradient-to-br from-accent-primary to-accent-cyan p-6 shadow-2xl shadow-accent-primary/30"
            animate={{
              boxShadow: [
                '0 0 20px 5px rgba(108,92,231,0.3)',
                '0 0 40px 10px rgba(0,216,170,0.3)',
                '0 0 20px 5px rgba(108,92,231,0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Lock className="h-10 w-10 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Статусные метки */}
        {[
          {
            text: 'Защищено',
            position: 'top-[5%] -right-4',
            color: 'text-success',
          },
          {
            text: 'Серверов: 120+',
            position: 'bottom-[5%] -right-2',
            color: 'text-accent-cyan',
          },
          {
            text: '256 Mbps',
            position: 'top-[5%] -left-2',
            color: 'text-accent-primary',
          },
        ].map(({ text, position, color }, i) => (
          <motion.div
            key={`label-${i}`}
            className={`absolute ${position} hidden sm:block`}
            initial={{ opacity: 0, x: i === 1 ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5 + i * 0.3 }}
          >
            <motion.span
              className={`rounded-full border border-dark-border bg-dark-surface/90 backdrop-blur-sm px-3 py-1 text-xs font-medium ${color}`}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
            >
              {text}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,92,231,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(0,216,170,0.10),transparent_30%)]" />
        {/* Плавающие частицы */}
        <motion.div
          className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-accent-primary/5 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-accent-cyan/5 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        {/* Левая колонка */}
        <div className="flex flex-col justify-center">
          {/* Бейдж с анимацией */}
          <BlurReveal>
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-dark-border bg-dark-surface px-4 py-2 text-sm text-text-secondary">
              <Lock className="h-4 w-4 text-accent-cyan" />
              Безопасный доступ в интернет
            </div>
          </BlurReveal>

          {/* Заголовок */}
          <BlurReveal>
            <h1 className="max-w-xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Быстрый и приватный VPN{' '}
              <motion.span
                className="bg-gradient-to-r from-accent-primary to-accent-cyan bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                style={{ backgroundSize: '200% 200%' }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              >
                для работы
              </motion.span>
              , стриминга и свободы в сети
            </h1>
          </BlurReveal>

          <div className="mt-6 max-w-xl text-lg leading-8 text-text-secondary h-25">
            <TypewriterText
              texts={[
                'Современный VPN-сервис с упором на скорость, стабильность и удобство. Подходит для личного использования и команд.',
              ]}
              typeSpeed={30}
            />
          </div>

          {/* Кнопки */}
          <ScaleReveal>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="#plans"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-primary px-6 py-3.5 font-medium text-white shadow-lg shadow-accent-primary/25 transition hover:bg-accent-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Выбрать тариф
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </motion.a>
              <motion.a
                href="#benefits"
                className="inline-flex items-center justify-center rounded-xl border border-dark-border bg-dark-surface px-6 py-3.5 font-medium text-text-primary transition hover:border-accent-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Посмотреть преимущества
              </motion.a>
            </div>
          </ScaleReveal>

          {/* Статистика с каскадным появлением */}
          <StaggerReveal
            staggerDelay={0.2}
            className="mt-10 grid max-w-xl grid-cols-3 gap-4"
          >
            {[
              ['99.9%', 'Uptime'],
              ['50+', 'Локаций'],
              ['24/7', 'Поддержка'],
            ].map(([value, label]) => (
              <motion.div
                key={label}
                className="rounded-2xl border border-dark-border bg-dark-surface p-4"
                whileHover={{
                  scale: 1.05,
                  borderColor: 'var(--accent-primary)',
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="text-2xl font-semibold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 10,
                    delay: 0.6,
                  }}
                >
                  {value}
                </motion.div>
                <div className="mt-1 text-sm text-text-muted">{label}</div>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>

        {/* Вместо этого блока я хочу 3д картинку vpn */}
        {/* <div className="relative">
          <motion.div
            className="absolute -inset-6 rounded-4xl bg-[linear-gradient(135deg,rgba(108,92,231,0.20),rgba(0,168,138,0.12))] blur-3xl"
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="relative rounded-4xl border border-dark-border bg-dark-surface p-6 shadow-2xl shadow-black/10"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between border-b border-dark-border pb-4">
              <div>
                <div className="text-sm text-text-muted">Подключение</div>
                <motion.div
                  className="text-lg font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Москва → Нидерланды
                </motion.div>
              </div>
              <motion.div
                className="rounded-full bg-success/10 px-3 py-1 text-sm text-success"
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(34, 197, 94, 0)',
                    '0 0 0 8px rgba(34, 197, 94, 0.1)',
                    '0 0 0 0 rgba(34, 197, 94, 0)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Stable
                </motion.span>
              </motion.div>
            </div>
            <div className="mt-6 space-y-4">
              {[
                {
                  label: 'Ping',
                  value: '18 ms',
                  accent: 'text-accent-cyan',
                },
                {
                  label: 'Download',
                  value: '256 Mbps',
                  accent: 'text-accent-primary',
                },
                {
                  label: 'Encryption',
                  value: 'Enabled',
                  accent: 'text-success',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="rounded-2xl border border-dark-border bg-dark-elevated p-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-muted">
                      {item.label}
                    </span>
                    <motion.span
                      className={`text-lg font-semibold ${item.accent}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 + index * 0.2 }}
                    >
                      {item.value}
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <motion.div
                className="rounded-2xl border border-dark-border bg-dark-elevated p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                whileHover={{
                  rotate: [-1, 1, 0],
                  transition: { duration: 0.3 },
                }}
              >
                <Server className="h-5 w-5 text-accent-primary" />

                <div className="mt-3 text-sm text-text-muted">Server pool</div>
                <motion.div
                  className="text-xl font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                >
                  120+
                </motion.div>
              </motion.div>

              <motion.div
                className="rounded-2xl border border-dark-border bg-dark-elevated p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                whileHover={{
                  rotate: [1, -1, 0],
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Rocket className="h-5 w-5 text-accent-cyan" />
                </motion.div>
                <div className="mt-3 text-sm text-text-muted">
                  Quick connect
                </div>
                <motion.div
                  className="text-xl font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.4 }}
                >
                  &lt; 3 sec
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div> */}
        <div className='max-[560px]:hidden'><RightSide></RightSide></div>
      </div>
    </section>
  );
}

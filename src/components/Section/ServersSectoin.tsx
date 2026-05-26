import {
  ArrowRight,
  Globe2,
  Rocket,
  Server,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import StaggerReveal from '../StaggerReveal';
import BlurReveal from '../BlurReveal';

export default function ServersSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id='servers'>
      <ScrollReveal>
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-dark-border bg-dark-surface px-4 py-2 text-sm text-text-secondary">
            <Server className="h-4 w-4 text-accent-cyan" />
            Глобальная инфраструктура
          </div>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Более 120 серверов в 50+ странах
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Стабильное соединение с любой точки мира. Выбирайте оптимальную
            локацию для своих задач.
          </p>
        </div>
      </ScrollReveal>

      {/* Статистика серверов */}
      <StaggerReveal className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {/* <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4"> */}
        {[
          { value: '120+', label: 'Серверов', icon: Server },
          { value: '50+', label: 'Стран', icon: Globe2 },
          { value: '99.9%', label: 'Аптайм', icon: Zap },
          { value: '24/7', label: 'Поддержка', icon: ShieldCheck },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-dark-border bg-dark-surface p-4 text-center transition hover:scale-105"
          >
            <stat.icon className="mx-auto mb-2 h-6 w-6 text-accent-primary" />
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-text-muted">{stat.label}</div>
          </div>
        ))}
        {/* </div> */}
      </StaggerReveal>

      {/* Регионы и страны */}
      <StaggerReveal className="space-y-8" staggerDelay={0.3}>
        {/* <div className="space-y-8"> */}
          {[
            {
              region: 'Европа',
              flag: '🇪🇺',
              latency: '~30-60 ms',
              countries: [
                {
                  flag: '🇳🇱',
                  name: 'Нидерланды',
                  cities: 'Амстердам +2',
                  speed: '10 Gbps',
                },
                {
                  flag: '🇩🇪',
                  name: 'Германия',
                  cities: 'Франкфурт, Берлин',
                  speed: '10 Gbps',
                },
                {
                  flag: '🇬🇧',
                  name: 'Великобритания',
                  cities: 'Лондон, Манчестер',
                  speed: '10 Gbps',
                },
                {
                  flag: '🇫🇷',
                  name: 'Франция',
                  cities: 'Париж',
                  speed: '5 Gbps',
                },
              ],
            },
            {
              region: 'Северная Америка',
              flag: '🇺🇸',
              latency: '~110-150 ms',
              countries: [
                {
                  flag: '🇺🇸',
                  name: 'США',
                  cities: 'Нью-Йорк, Лос-Анджелес, Майами',
                  speed: '10 Gbps',
                },
                {
                  flag: '🇨🇦',
                  name: 'Канада',
                  cities: 'Торонто, Ванкувер',
                  speed: '5 Gbps',
                },
              ],
            },
            {
              region: 'Азия',
              flag: '🇸🇬',
              latency: '~180-220 ms',
              countries: [
                {
                  flag: '🇸🇬',
                  name: 'Сингапур',
                  cities: 'Сингапур',
                  speed: '10 Gbps',
                },
                {
                  flag: '🇯🇵',
                  name: 'Япония',
                  cities: 'Токио, Осака',
                  speed: '5 Gbps',
                },
                {
                  flag: '🇰🇷',
                  name: 'Южная Корея',
                  cities: 'Сеул',
                  speed: '5 Gbps',
                },
                {
                  flag: '🇮🇳',
                  name: 'Индия',
                  cities: 'Мумбаи',
                  speed: '2.5 Gbps',
                },
              ],
            },
            {
              region: 'Остальной мир',
              flag: '🌏',
              latency: '~200-300 ms',
              countries: [
                {
                  flag: '🇦🇺',
                  name: 'Австралия',
                  cities: 'Сидней, Мельбурн',
                  speed: '5 Gbps',
                },
                {
                  flag: '🇧🇷',
                  name: 'Бразилия',
                  cities: 'Сан-Паулу',
                  speed: '5 Gbps',
                },
                {
                  flag: '🇿🇦',
                  name: 'ЮАР',
                  cities: 'Йоханнесбург',
                  speed: '2.5 Gbps',
                },
              ],
            },
          ].map((region) => (
            <div
              key={region.region}
              className="rounded-3xl border border-dark-border bg-dark-surface p-6 shadow-lg"
            >
              <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{region.flag}</span>
                    <h3 className="text-xl font-semibold">{region.region}</h3>
                  </div>
                  <div className="mt-1 text-sm text-text-muted">
                    Средняя задержка: {region.latency}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-accent-cyan">
                  <Zap className="h-4 w-4" />
                  Оптимальные маршруты
                </div>
              </div>
  
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {region.countries.map((country) => (
                  <div
                    key={country.name}
                    className="group rounded-2xl border border-dark-border bg-dark-elevated p-4 transition-all hover:border-accent-primary hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{country.flag}</span>
                      <div>
                        <div className="font-semibold">{country.name}</div>
                        <div className="text-xs text-text-muted">
                          {country.cities}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-text-muted">
                        <Server className="h-3 w-3" />
                        <span>Скорость:</span>
                      </div>
                      <div className="text-sm font-medium text-accent-cyan">
                        {country.speed}
                      </div>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-dark-border">
                      <div
                        className="h-full rounded-full bg-accent-primary transition-all duration-500 group-hover:bg-accent-glow"
                        style={{
                          width:
                            country.speed === '10 Gbps'
                              ? '100%'
                              : country.speed === '5 Gbps'
                                ? '60%'
                                : '30%',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        {/* </div> */}
      </StaggerReveal>

      <BlurReveal duration={0.4}>
        <div className="mt-12 rounded-3xl bg-linear-to-r from-accent-primary/10 to-accent-cyan/10 p-6 text-center sm:p-8">
          <Rocket className="mx-auto mb-4 h-10 w-10 text-accent-primary" />
          <h3 className="text-xl font-semibold">
            Не уверены, какой сервер выбрать?
          </h3>
          <p className="mx-auto mt-2 max-w-md text-text-secondary">
            Включите «Быстрое подключение» — мы автоматически подберем оптимальную
            локацию.
          </p>
          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent-primary px-6 py-3 font-medium text-white transition hover:bg-accent-glow"
          >
            Подключиться автоматически
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </BlurReveal>
    </section>
  );
}

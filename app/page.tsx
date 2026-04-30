import { news } from '@/data/news';

const maxLink = 'https://max.ru/id9403014108_gos';
const phoneHref = 'tel:+78572931614';
const mapsLink = 'https://yandex.ru/maps/?text=Луганск%2C%20ул.%20Даля%2C%207';

const audience = [
  'Боли в спине и суставах',
  'Восстановление после травм',
  'Восстановление после операций',
  'Неврологические нарушения',
  'ЛОР-заболевания',
  'Кожные заболевания',
  'Медицинская реабилитация',
];

const routeSteps = [
  'Позвоните или обратитесь в поликлинику.',
  'Попадите на приём к врачу.',
  'Пройдите консультацию.',
  'Получите назначение.',
  'Пройдите процедуры бесплатно по ОМС.',
];

const procedures = [
  {
    title: 'Водолечение',
    list: [
      'лечебные ванны',
      'лечебные души',
      'душ Шарко',
      'циркулярный душ',
      'восходящий душ',
      'подводный душ-массаж',
      'гидромассаж',
    ],
    description:
      'Может применяться в составе комплексного лечения и восстановления. Конкретные процедуры назначаются врачом с учётом состояния пациента и противопоказаний.',
  },
  {
    title: 'Физиотерапия',
    list: ['электролечение', 'светолечение', 'магнитотерапия', 'ультразвуковая терапия', 'ингаляции'],
    description:
      'Используется по назначению специалиста после консультации. Подбирается индивидуально при наличии медицинских показаний.',
  },
  {
    title: 'Восстановление',
    list: ['массаж', 'ЛФК', 'медицинская реабилитация'],
    description:
      'Направления могут применяться для поэтапного восстановления после заболеваний, травм и операций в рамках бесплатной помощи по ОМС.',
  },
];

export default function HomePage() {
  return (
    <div className="page">
      <header className="headerWrap">
        <div className="header container">
          <p className="brand">ЛРФТП им. А. Е. Щербака</p>
          <div className="headerActions">
            <a href={phoneHref} className="phoneText">
              +7 (8572) 93-16-14
            </a>
            <a href={phoneHref} className="btn btnPrimary">
              Позвонить
            </a>
            <a href={maxLink} target="_blank" rel="noreferrer" className="btn btnGhost">
              Канал MAX
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="heroText">
            <h1>Водолечение, физиотерапия и реабилитация по ОМС в Луганске</h1>
            <p>
              ГБУЗ «Луганская республиканская физиотерапевтическая поликлиника имени профессора
              А. Е. Щербака» ЛНР оказывает медицинскую помощь бесплатно по полису ОМС. Приём ведут
              профильные специалисты, процедуры назначаются врачом при наличии показаний.
            </p>
            <div className="heroActions">
              <a href={phoneHref} className="btn btnPrimary btnLarge">
                Позвонить
              </a>
              <a href={maxLink} target="_blank" rel="noreferrer" className="btn btnGhost btnLarge">
                Канал MAX
              </a>
            </div>
          </div>
          <div className="heroStats">
            <article className="pillCard">
              <h3>Бесплатно по ОМС</h3>
            </article>
            <article className="pillCard">
              <h3>Пн–Пт 07:00–19:00</h3>
            </article>
            <article className="pillCard">
              <h3>Луганск, ул. Даля, 7</h3>
            </article>
          </div>
        </section>

        <section className="section container">
          <h2>Кому может быть полезно</h2>
          <div className="grid">
            {audience.map((item) => (
              <article key={item} className="card markerCard">
                <span className="dot" aria-hidden="true" />
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section container">
          <h2>Как попасть на процедуры по ОМС</h2>
          <ol className="timeline">
            {routeSteps.map((step, idx) => (
              <li key={step} className="timelineItem">
                <span className="stepNum">{idx + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section container">
          <h2>Процедуры</h2>
          <div className="grid proceduresGrid">
            {procedures.map((group) => (
              <article key={group.title} className="card">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul>
                  {group.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section container">
          <h2>Новости</h2>
          <div className="grid">
            {news.map((item) => (
              <article key={item.title} className="card">
                <p className="date">{item.date}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.href} target="_blank" rel="noreferrer" className="link">
                  Читать в MAX
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section container contactsSection">
          <h2>Контакты</h2>
          <article className="contactCard">
            <p className="clinicName">
              ГБУЗ «Луганская республиканская физиотерапевтическая поликлиника имени профессора А.
              Е. Щербака» ЛНР
            </p>
            <p>Адрес: 291001, Луганская Народная Республика, г. Луганск, ул. Даля, д. 7</p>
            <p>График работы: Пн–Пт: 07:00–19:00</p>
            <p>Телефон: +7 (8572) 93-16-14</p>
            <div className="heroActions">
              <a href={phoneHref} className="btn btnPrimary">
                Позвонить
              </a>
              <a href={maxLink} target="_blank" rel="noreferrer" className="btn btnGhost">
                Открыть канал MAX
              </a>
              <a href={mapsLink} target="_blank" rel="noreferrer" className="btn btnGhost">
                Открыть в Яндекс.Картах
              </a>
            </div>
          </article>
        </section>
      </main>

      <footer className="footer">
        Имеются противопоказания. Необходима консультация специалиста. Процедуры назначаются
        врачом при наличии медицинских показаний.
      </footer>
    </div>
  );
}

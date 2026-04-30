import { news } from '@/data/news';

const maxLink = 'https://max.ru/id9403014108_gos';
const phoneHref = 'tel:+78572931614';

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
  'Получите назначение на процедуры при наличии медицинских показаний.',
  'Пройдите курс процедур бесплатно по полису ОМС.',
];

const doctors = ['Травматолог', 'ЛОР', 'Дерматолог', 'Невролог', 'Физиотерапевт'];

const procedures = [
  'Лечебные ванны',
  'Лечебные души',
  'Душ Шарко',
  'Циркулярный душ',
  'Восходящий душ',
  'Подводный душ-массаж',
  'Гидромассаж',
  'Физиотерапия',
  'Электролечение',
  'Светолечение',
  'Магнитотерапия',
  'Ультразвуковая терапия',
  'Ингаляции',
  'Массаж',
  'ЛФК',
  'Медицинская реабилитация',
];

const advantages = [
  'Лечение бесплатно по ОМС',
  'Государственное медицинское учреждение',
  'Приём профильных специалистов',
  'Процедуры назначаются врачом',
  'Комплексный подход к восстановлению',
  'Водолечение, физиотерапия и медицинская реабилитация в одном месте',
  'Удобный график работы с 07:00 до 19:00',
  'Расположение в Луганске, ул. Даля, 7',
  'Понятный маршрут пациента',
  'Не нужно оставлять заявку на сайте — достаточно позвонить или обратиться в учреждение',
];

export default function HomePage() {
  return (
    <div className="page">
      <header className="header container">
        <p className="brand">ЛРФТП им. А. Е. Щербака</p>
        <div className="headerActions">
          <a href="tel:+78572931614" className="phoneText">
            +7 (8572) 93-16-14
          </a>
          <a href={phoneHref} className="btn btnPrimary">
            Позвонить
          </a>
          <a href={maxLink} target="_blank" rel="noreferrer" className="btn btnGhost">
            Канал MAX
          </a>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div>
            <h1>Водолечение, физиотерапия и реабилитация по ОМС в Луганске</h1>
            <p>
              ГБУЗ «Луганская республиканская физиотерапевтическая поликлиника имени профессора
              А. Е. Щербака» ЛНР оказывает медицинскую помощь бесплатно по полису ОМС. Приём
              ведут профильные специалисты, процедуры назначаются врачом при наличии показаний.
            </p>
            <div className="heroActions">
              <a href={phoneHref} className="btn btnPrimary">
                Позвонить
              </a>
              <a href={maxLink} target="_blank" rel="noreferrer" className="btn btnGhost">
                Открыть канал MAX
              </a>
            </div>
          </div>
          <aside className="infoCard">
            <h2>Кратко</h2>
            <p>
              <strong>ОМС:</strong> бесплатно
            </p>
            <p>
              <strong>Пн–Пт:</strong> 07:00–19:00
            </p>
            <p>
              <strong>Адрес:</strong> Луганск, ул. Даля, 7
            </p>
          </aside>
        </section>

        <section className="section container">
          <h2>Что мы делаем</h2>
          <p>
            Поликлиника занимается водолечением, физиотерапией и медицинской реабилитацией.
            Помощь оказывается по назначению врача после консультации специалиста.
          </p>
        </section>

        <section className="section container">
          <h2>Кому может быть полезно</h2>
          <div className="grid">
            {audience.map((item) => (
              <article key={item} className="card">
                <h3>{item}</h3>
              </article>
            ))}
          </div>
          <p className="note">Окончательное решение о назначении процедур принимает врач.</p>
        </section>

        <section className="section container">
          <h2>Как попасть на процедуры по ОМС</h2>
          <ol className="steps">
            {routeSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="section container">
          <h2>Врачи</h2>
          <div className="grid">
            {doctors.map((doctor) => (
              <article key={doctor} className="card">
                <h3>{doctor}</h3>
                <p>
                  Специалист оценивает состояние пациента и при наличии показаний назначает
                  процедуры.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section container">
          <h2>Процедуры</h2>
          <p>
            В поликлинике могут применяться методы водолечения, физиотерапии и медицинской
            реабилитации. Конкретный набор процедур определяет врач после осмотра.
          </p>
          <div className="grid">
            {procedures.map((item) => (
              <article key={item} className="card">
                <h3>{item}</h3>
                <p>
                  Метод может применяться врачом в составе комплексного лечения и восстановления.
                  Назначается индивидуально, с учётом состояния пациента и противопоказаний.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section container">
          <h2>Почему выбирают нас</h2>
          <div className="grid">
            {advantages.map((item) => (
              <article key={item} className="card">
                <h3>{item}</h3>
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

        <section className="section container contacts">
          <h2>Контакты</h2>
          <p>
            <strong>ГБУЗ «Луганская республиканская физиотерапевтическая поликлиника имени
            профессора А. Е. Щербака» ЛНР</strong>
          </p>
          <p>Адрес: 291001, Луганская Народная Республика, г. Луганск, ул. Даля, д. 7</p>
          <p>График работы: Пн–Пт: 07:00–19:00</p>
          <p>Телефон: +7 (8572) 93-16-14</p>
          <div className="heroActions">
            <a href={phoneHref} className="btn btnPrimary">
              Позвонить
            </a>
            <a href={maxLink} target="_blank" rel="noreferrer" className="btn btnGhost">
              Канал MAX
            </a>
          </div>
          <div className="mapPlaceholder">Место для карты</div>
        </section>
      </main>

      <footer className="footer">
        Имеются противопоказания. Необходима консультация специалиста. Процедуры назначаются
        врачом при наличии медицинских показаний.
      </footer>
    </div>
  );
}

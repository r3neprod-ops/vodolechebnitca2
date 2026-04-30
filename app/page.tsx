import { news } from '@/data/news';

const maxLink = 'https://max.ru/id9403014108_gos';
const phoneHref = 'tel:+78572931614';
const mapsLink = 'https://yandex.ru/maps/?text=Луганск%2C%20ул.%20Даля%2C%207';

const audience = [
  'Боли в спине и суставах',
  'Восстановление после травм',
  'Восстановление после операций',
  'Неврологические нарушения',
  'Заболевания ЛОР-органов',
  'Кожные заболевания',
  'Медицинская реабилитация',
];


const doctors = [
  'Травматолог',
  'Оториноларинголог',
  'Дерматолог',
  'Невролог',
  'Физиотерапевт',
];

const procedureList = [
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
            <h1>Физиотерапия, водолечение и медицинская реабилитация в Луганске</h1>
            <p>
              ГБУЗ «Луганская республиканская физиотерапевтическая поликлиника имени профессора
              А. Е. Щербака» ЛНР оказывает медицинскую помощь по направлениям физиотерапии,
              водолечения и медицинской реабилитации. Процедуры назначаются врачом после
              консультации и при наличии медицинских показаний.
            </p>
            <p className="heroNote">Медицинская помощь оказывается в рамках программы ОМС.</p>
            <div className="heroActions">
              <a href={phoneHref} className="btn btnPrimary btnLarge">
                Позвонить
              </a>
              <a href={maxLink} target="_blank" rel="noreferrer" className="btn btnGhost btnLarge">
                Канал MAX
              </a>
            </div>
          </div>

          <aside className="infoPanel">
            <h2>Контактная информация</h2>
            <p>
              <strong>График работы:</strong> Пн–Пт: 07:00–19:00
            </p>
            <p>
              <strong>Адрес:</strong> г. Луганск, ул. Даля, д. 7
            </p>
            <p>
              <strong>Телефон:</strong> +7 (8572) 93-16-14
            </p>
            <div className="heroActions">
              <a href={phoneHref} className="btn btnPrimary">
                Позвонить
              </a>
              <a href={maxLink} target="_blank" rel="noreferrer" className="btn btnGhost">
                Канал MAX
              </a>
            </div>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=39.299758%2C48.579178&z=17&pt=39.299758,48.579178,pm2rdm"
              title="Карта расположения поликлиники"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '16px', marginTop: '14px' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </aside>
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
          <h2>Как приступить к лечению</h2>
          <p className="sectionLead">
            Наглядная схема поможет разобраться в порядке обращения: оформление документов,
            консультация врача, назначение и прохождение процедур.
          </p>
          <img
            src="/image/treatment-flow.png"
            alt="Схема порядка обращения за медицинской помощью"
            className="treatmentFlowImage"
          />
        </section>

        <section className="section container">
          <h2>Врачи</h2>
          <div className="grid">
            {doctors.map((doctor) => (
              <article key={doctor} className="card">
                <h3>{doctor}</h3>
                <p>
                  Специалист проводит консультацию, оценивает состояние пациента и при наличии
                  медицинских показаний определяет дальнейший план лечения.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section container">
          <h2>Направления и процедуры</h2>
          <p className="sectionLead">
            Конкретный перечень процедур и объём лечения определяет врач по результатам
            консультации.
          </p>
          <div className="chips">
            {procedureList.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
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

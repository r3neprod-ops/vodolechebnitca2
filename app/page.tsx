const maxLink = 'https://max.ru/id9403014108_gos';
const phoneHref = 'tel:+78572931614';

const routeSteps = [
  'Обратитесь в регистратуру лично или по телефону.',
  'Запишитесь на консультацию профильного специалиста.',
  'Пройдите осмотр и уточните рекомендации по лечению.',
  'Получите назначения при наличии медицинских показаний.',
  'Пройдите курс процедур в соответствии с планом лечения.',
];

const doctors = ['Травматолог', 'Оториноларинголог', 'Дерматолог', 'Невролог', 'Физиотерапевт'];

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

const advantages = [
  'Консультативный приём профильных специалистов',
  'Лечение проводится по назначению врача',
  'Процедуры выполняются при наличии медицинских показаний',
  'Единый маршрут пациента: консультация, назначение, курс процедур',
  'Порядок обращения можно уточнить в регистратуре или по телефону',
  'Медицинская помощь оказывается в рамках программы ОМС',
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
            <p><strong>График работы:</strong> Пн–Пт: 07:00–19:00</p>
            <p><strong>Адрес:</strong> г. Луганск, ул. Даля, д. 7</p>
            <p><strong>Телефон:</strong> +7 (8572) 93-16-14</p>
            <div className="heroActions">
              <a href={phoneHref} className="btn btnPrimary">Позвонить</a>
              <a href={maxLink} target="_blank" rel="noreferrer" className="btn btnGhost">Канал MAX</a>
            </div>
            <div className="mapFrameWrap">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=39.299758%2C48.579178&z=17&pt=39.299758,48.579178,pm2rdm"
                width="100%"
                height="240"
                frameBorder="0"
                loading="lazy"
                allowFullScreen
                title="Карта расположения поликлиники"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href="https://yandex.com/maps/-/CPS0nJ1" target="_blank" rel="noopener noreferrer" className="btn btnGhost mapLink">
              Открыть в Яндекс.Картах
            </a>
          </aside>
        </section>

        <section className="section container">
          <h2>Как приступить к лечению</h2>
          <p className="sectionLead">
            Наглядная схема поможет разобраться в порядке обращения: оформление документов,
            консультация врача, назначение и прохождение процедур.
          </p>
          <ol className="timeline">
            {routeSteps.map((step, idx) => (
              <li key={step} className="timelineItem">
                <span className="stepNum">{idx + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
          <div className="flowPlaceholder">
            {/* Patient treatment flow image placeholder. Image will be added manually later. */}
            <p>Здесь будет размещена схема порядка обращения</p>
          </div>
        </section>

        <section className="section container">
          <h2>Направления и процедуры</h2>
          <p className="sectionLead">
            Конкретный перечень процедур и объём лечения определяет врач по результатам консультации.
          </p>
          <div className="chips">
            {procedureList.map((item) => (
              <span key={item} className="chip">{item}</span>
            ))}
          </div>
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
          <h2>Организация медицинской помощи</h2>
          <div className="grid">
            {advantages.map((item) => (
              <article key={item} className="card markerCard">
                <span className="dot" aria-hidden="true" />
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        Имеются противопоказания. Необходима консультация специалиста. Процедуры назначаются
        врачом при наличии медицинских показаний.
      </footer>
    </div>
  );
}

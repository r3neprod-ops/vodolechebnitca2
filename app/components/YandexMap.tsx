'use client';

import { useState } from 'react';

const SRC =
  'https://yandex.ru/map-widget/v1/?ll=39.299758%2C48.579178&z=17&pt=39.299758,48.579178,pm2rdm';

export default function YandexMap() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={SRC}
        title="Карта расположения поликлиники"
        width="100%"
        height="250"
        style={{ border: 0, borderRadius: '16px', marginTop: '14px', display: 'block' }}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <button className="mapPlaceholder" onClick={() => setLoaded(true)} aria-label="Показать карту">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
      Показать на карте
    </button>
  );
}

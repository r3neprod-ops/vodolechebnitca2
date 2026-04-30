import { news } from '@/data/news';

export default function HomePage() {
  return (
    <main>
      <h1>Водолечебница №2</h1>
      <p>Минимальная версия сайта для успешной сборки и деплоя на Vercel.</p>

      <h2>Новости</h2>
      <ul>
        {news.map((item) => (
          <li key={`${item.date}-${item.title}`}>
            <strong>{item.title}</strong> ({item.date})
            <p>{item.description}</p>
            <a href={item.href} target="_blank" rel="noreferrer">
              Источник
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

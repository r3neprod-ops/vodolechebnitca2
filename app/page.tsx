import { news } from "@/data/news";

export default function Home() {
  return (
    <main style={{ padding: 32, fontFamily: "Arial, sans-serif" }}>
      <h1>Водолечебница</h1>
      <p>Проект успешно собирается и готов к деплою на Vercel.</p>

      <section>
        <h2>Новости</h2>
        <ul>
          {news.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
              <a href={item.href}>Читать в MAX</a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

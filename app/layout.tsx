import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Водолечение и физиотерапия по ОМС в Луганске — ЛРФТП им. А. Е. Щербака',
  description:
    'Государственная физиотерапевтическая поликлиника в Луганске: водолечение, физиотерапия и медицинская реабилитация бесплатно по ОМС. Приём врачей, назначение процедур, адрес, телефон и график работы.',
  openGraph: {
    title: 'Водолечение и физиотерапия по ОМС в Луганске — ЛРФТП им. А. Е. Щербака',
    description:
      'Государственная физиотерапевтическая поликлиника в Луганске: водолечение, физиотерапия и медицинская реабилитация бесплатно по ОМС. Приём врачей, назначение процедур, адрес, телефон и график работы.',
    type: 'website',
    locale: 'ru_RU',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://yandex.ru" />
        <link rel="dns-prefetch" href="https://yandex.ru" />
      </head>
      <body>
        {children}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=109032504','ym');
              ym(109032504,'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});
            `,
          }}
        />
        <Script
          id="yandex-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var img=document.createElement('img');
                img.src='https://mc.yandex.ru/pixel/1598121936973594076?rnd='+Math.random();
                img.style.cssText='position:absolute;left:-9999px;';
                img.alt='';
                img.width=1;img.height=1;
                document.body.appendChild(img);
              })();
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/109032504"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}

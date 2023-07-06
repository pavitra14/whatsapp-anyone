import Head from 'next/head';
import Script from 'next/script';

const Layout = (props) => (
  <>
    <Head>
      <title>WhatsApp Anyone, easily</title>

      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&display=swap" rel="stylesheet" />

      {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/lux/bootstrap.min.css" /> */}

      <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-136763629-1`}
          />
      <Script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'UA-136763629-1');              
            `,
            }}
          />
    </Head>
    {props.children}
  </>
);

export default Layout;
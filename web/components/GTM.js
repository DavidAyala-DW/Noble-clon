import Script from 'next/script'

export default function GTM() {
  return (
    <>
      {/*  Google Tag Manager */}
      <Script id="gtm">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PQKF68S');
        `}
      </Script>

      {/*  Google Tag Manager (noscript) */}
      <div
        dangerouslySetInnerHTML={{
          __html: `    
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PQKF68S"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          `,
        }}
      />
    </>
  )
}

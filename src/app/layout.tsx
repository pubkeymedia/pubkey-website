export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* @ts-expect-error */}
        <meta name="impact-site-verification" value="47925eeb-9cab-4b11-97d9-e900204998a3" />
        <!-- Google tag (gtag.js) -->
  <><script async src="https://www.googletagmanager.com/gtag/js?id=G-ZN1D29K1JP"></script><script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)};}
    gtag('js', new Date());

    gtag('config', 'G-ZN1D29K1JP');
  </script></>
      </head>
      <body>{children}</body>
    </html>
  );
}
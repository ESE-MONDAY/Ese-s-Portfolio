
import '../styles/globals.css'
import Head from 'next/head'
export const metadata = {
  title: 'Ese Monday - Portfolio'  ,
  description: 'Ese Monday is a dynamic software developerbased in Lagos Nigeria',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
        <Head>
            <title>Ese Monday - Portfolio</title>
            <meta name="software developer" content="Ese Monday is a dynamic software developerbased in Lagos Nigeria" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
      <body>
      <div className=''> {children}</div>
       </body>
    </html>
  )
}

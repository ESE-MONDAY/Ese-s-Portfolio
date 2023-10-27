
import '../styles/globals.css'
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
      <body>{children}</body>
    </html>
  )
}

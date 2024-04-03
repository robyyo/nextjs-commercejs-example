import '@/assets/styles/globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const metadata = {
  title: 'Cabinet of Curiosities',
  description: 'Find the most interesting items from around the world.',
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default MainLayout

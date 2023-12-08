// import Header from '@/components/header'
import Header_login from '@/components/header_login'
import './globals.css'
import type { Metadata } from 'next'
import LoginPage from '@/pages/login'
import getAuthSession from '@/lib/session.js'

export const metadata: Metadata = {
  title: 'Get Funnel',
  description: 'Get Funnel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isLoggedIn = async () => {
    try {
      const response = await fetch("http://95.163.180.251/api/getUserInfo", {});
      if (response.status === 200) return true;
    } catch (err: any) {
      console.log(err.message);
    }
    return false;
  }

  console.log("-----------------------" + isLoggedIn())
  return (
    <>
      {
        !isLoggedIn() ?
          <LoginPage /> :
          <div>
            <Header_login />
            <main>{children}</main>
          </div>
      }
    </>
  )
}

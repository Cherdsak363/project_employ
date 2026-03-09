import './globals.css'
import AuthProvider from '../components/AuthProvider'
import Nav from '../components/Nav'
import LayoutShell from '../components/LayoutShell'
import { ToastProvider } from '../components/ToastProvider'

export const metadata = {
  title: 'จ้างงานวาดภาพและขายรูป',
  description: 'เว็บไซต์สำหรับจ้างงานศิลปินและขายงานศิลปะ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css" />
      </head>
      <body>
        <AuthProvider>
          <ToastProvider>
            <LayoutShell>
              {children}
            </LayoutShell>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

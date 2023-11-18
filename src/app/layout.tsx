import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <nav className="py-2 bg-light border-bottom">
            <div className="container d-flex flex-wrap">
              <ul className="nav me-auto">
                <li className="nav-item"><a href="#" className="nav-link link-dark px-2 active" aria-current="page">Find a Localtion</a></li>
              </ul>
              <ul className="nav">
                <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Login</a></li>
                <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Sign up</a></li>
              </ul>
            </div>
          </nav>
          <header className="py-3 mb-4 border-bottom">
          <div className="container d-flex flex-wrap justify-content-center">
              <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                <span className="fs-4">Logo</span>
              </a>
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-2 link-secondary">Overview</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">Inventory</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">Customers</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">Products</a></li>
              </ul>
              <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2">Login</button>
                <button type="button" className="btn btn-warning">Sign-up</button>
              </div>
          </div>
        </header>
        {children}
        <footer>

        </footer>
      </body>
    </html>
  )
}

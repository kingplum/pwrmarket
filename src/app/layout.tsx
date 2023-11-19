import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <nav className="py-2 bg-light border-bottom">
            <div className="container-fluid d-flex flex-wrap">
              <ul className="nav me-auto">
                <li className="nav-item"><Link href="/locations" className="nav-link link-dark px-0 active" aria-current="page">Find a Localtion</Link></li>
              </ul>
              <ul className="nav">
                <li className="nav-item"><Link href="#" className="nav-link link-dark px-2">Facebook</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link link-dark px-2">Instagram</Link></li>
              </ul>
            </div>
          </nav>
          <header className="py-3 mb-4 border-bottom">
          <div className="container-fluid d-flex flex-wrap justify-content-center">
            <Link href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                <span className="fs-4">Logo</span>
              </Link>
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><Link href="/" className="nav-link px-2 link-secondary">Home</Link></li>
                <li><Link href="#" className="nav-link px-2 link-dark">Deals</Link></li>
                <li><Link href="/rewards" className="nav-link px-2 link-dark">Rewards</Link></li>
                <li><Link href="#" className="nav-link px-2 link-dark">Careers</Link></li>
                <li><Link href="#" className="nav-link px-2 link-dark">Contact</Link></li>
                <li><Link href="/about" className="nav-link px-2 link-dark">About</Link></li>
                <li><Link href="#" className="nav-link px-2 link-dark">Carwash</Link></li>
                <li><Link href="#" className="nav-link px-2 link-dark">Papa Sal's</Link></li>
              </ul>
              <div className="text-end">
                <button type="button" className="btn">Download App</button>
              </div>
          </div>
        </header>
        <div className="container-fluid">
          {children}
        </div>
        <footer>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 py-5">
            <div className="col d-flex align-items-start">
              <div>
                  <h4 className="fw-bold mb-0">Info</h4>
                  <p></p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div>
                  <h4 className="fw-bold mb-0">Download Our App</h4>
                  <p></p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div>
                  <h4 className="fw-bold mb-0">Follow Us</h4>
                  <p></p>
              </div>
            </div>
          </div>
        </div>
        </footer>
      </body>
    </html>
  )
}

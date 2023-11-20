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
                <li className="nav-item">
                  <Link href="/locations" className="link-dark px-0 active d-flex align-items-center" aria-current="page">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 100 100">
                      <g>
                        <path fill="#2060ad" d="M58.23,69.992l14.993-24.108c0.049-0.078,0.09-0.16,0.122-0.245c2.589-4.222,3.956-9.045,3.956-13.969
                          c0-14.772-12.018-26.79-26.79-26.79S23.72,16.898,23.72,31.67c0,4.925,1.369,9.75,3.96,13.975c0.03,0.074,0.065,0.146,0.107,0.216
                          l14.455,24.191c-11.221,1.586-18.6,6.2-18.6,11.797c0,6.935,11.785,12.366,26.829,12.366S77.3,88.783,77.3,81.849
                          C77.301,76.226,69.578,71.509,58.23,69.992z M30.373,44.294c-2.39-3.804-3.653-8.169-3.653-12.624
                          c0-13.118,10.672-23.79,23.791-23.79c13.118,0,23.79,10.672,23.79,23.79c0,4.457-1.263,8.822-3.652,12.624
                          c-0.05,0.08-0.091,0.163-0.124,0.249L54.685,70.01c-0.238,0.365-0.285,0.448-0.576,0.926l-4,6.432L30.507,44.564
                          C30.472,44.471,30.427,44.38,30.373,44.294z M50.472,91.215c-14.043,0-23.829-4.937-23.829-9.366c0-4.02,7.37-7.808,17.283-8.981
                          l4.87,8.151c0.269,0.449,0.751,0.726,1.274,0.73c0.004,0,0.009,0,0.013,0c0.518,0,1-0.268,1.274-0.708l5.12-8.232
                          C66.548,73.9,74.3,77.784,74.3,81.849C74.301,86.279,64.515,91.215,50.472,91.215z"/>
                        <path fill="#2060ad" d="M60.213,31.67c0-5.371-4.37-9.741-9.741-9.741s-9.741,4.37-9.741,9.741s4.37,9.741,9.741,9.741
                          C55.843,41.411,60.213,37.041,60.213,31.67z M43.731,31.67c0-3.717,3.024-6.741,6.741-6.741s6.741,3.024,6.741,6.741
                          s-3.023,6.741-6.741,6.741S43.731,35.387,43.731,31.67z"/>
                      </g>
                    </svg>
                    <span>Find a store</span>
                  </Link>
                </li>
              </ul>
              <ul className="nav d-flex justify-content-center align-items-center">
                <li>
                  <a href="https://www.instagram.com/pwrmarket/" target="_blank" className="sie-header_5 se pr-3 d-flex" data-sid="header_5">
                    <div className="se-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                        <path fill="#2060ad" d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"></path>
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/pwrmarket/" target="_blank" className="sie-header_5 se" data-sid="header_5">
                    <div className="se-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                        <path fill="#2060ad" d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                      </svg>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <header className="py-3 mb-4 border-bottom">
          <div className="container-fluid d-flex flex-wrap justify-content-center align-items-center">
            <Link href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                <span className="fs-4 se-img logo"></span>
                <span className="fs-4 se-img full-logo"></span>
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
                <button type="button" className="nav-link btn">Download App</button>
              </div>
          </div>
        </header>
        <div className="">
          {children}
        </div>
        <footer className='footer-img'>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 py-5">
            <div className="col d-flex align-items-start">
              <div>
                  <h4 className="fw-bold mb-0 title">Info</h4>
                  <div className='pt-3 pb-3'>
                    <div>
                      <h4 className='text-white subtitle fw-bold'>Address</h4>
                      <a href="" className="sie-footer se text-decoration-none">
                        <h4 className="se-t sie-footer-text st-m-heading st-d-heading">2860 N. Santiago Blvd, Orange, CA 92867</h4>
                      </a>
                    </div>

                    <div>
                      <h4 className='text-white subtitle fw-bold'>Call Us 24/7</h4>
                      <a href="" className="sie-footer se text-decoration-none">
                        <h4 className="se-t sie-footer-text st-m-heading st-d-heading">(714) 761-5426</h4>
                      </a>
                    </div>

                    <div>
                      <h4 className='text-white subtitle fw-bold'>Email</h4>
                      <a href="" className="sie-footer_8 se text-decoration-none">
                        <h4 className="se-t sie-footer_8-text st-m-heading st-d-heading">customerservice@hnsenergy.com</h4>
                      </a>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col d-flex align-items-start flex-column">
              <div>
                  <h4 className="fw-bold mb-0 title">Download Our App</h4>
                  <div className='pt-3 pb-3'>
                    <a href=''><div className='appstore se-img'></div></a>
                    <a href=''><div className='googleplay se-img'></div></a>
                  </div>
              </div>

              <div>
                  <h4 className="fw-bold mb-0 title">Legal</h4>
                  <div className='pt-3 pb-3'>
                    <a href="" className="sie-footer se text-decoration-none">
                      <h4 className="se-t sie-footer-text st-m-heading st-d-heading">Terms & Conditions</h4>
                    </a>
                    <a href="" className="sie-footer se text-decoration-none">
                      <h4 className="se-t sie-footer-text st-m-heading st-d-heading">Privacy & Policy Statement</h4>
                    </a>
                    <a href="" className="sie-footer se text-decoration-none">
                      <h4 className="se-t sie-footer-text st-m-heading st-d-heading">Financial Incentive</h4>
                    </a>
                    <a href="" className="sie-footer se text-decoration-none">
                      <h4 className="se-t sie-footer-text st-m-heading st-d-heading">CCPA</h4>
                    </a>
                  </div>
              </div>
            </div>
            <div className="col d-flex align-items-start  flex-column">
              <div>
                  <h4 className="fw-bold mb-0 title">Follow Us</h4>
                  <div className='d-flex pt-3  pb-3'>
                    <a href="https://www.instagram.com/pwrmarket/" target="_blank" className="sie-header_5 se pr-3" data-sid="header_5">
                      <div className="se-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                          <path fill="#2060ad" d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"></path>
                        </svg>
                      </div>
                    </a>
                    <a href="https://www.instagram.com/pwrmarket/" target="_blank" className="sie-header_5 se" data-sid="header_5">
                    <div className="se-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                        <path fill="#2060ad" d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                      </svg>
                    </div>
                  </a>
                  </div>
              </div>

              <div>
                  <h4 className="fw-bold mb-0 title">Check Us Out</h4>
                  <div className='pt-3 pb-3'>
                    <a href="" className="sie-footer se text-decoration-none">
                      <h4 className="se-t sie-footer-text st-m-heading st-d-heading">Home</h4>
                    </a>
                    <a href="" className="sie-footer se text-decoration-none">
                      <h4 className="se-t sie-footer-text st-m-heading st-d-heading">Locations</h4>
                    </a>
                    <a href="" className="sie-footer se text-decoration-none">
                      <h4 className="se-t sie-footer-text st-m-heading st-d-heading">Deals</h4>
                    </a>
                    <a href="" className="sie-footer se text-decoration-none">
                      <h4 className="se-t sie-footer-text st-m-heading st-d-heading">Download Our App!</h4>
                    </a>
                    <a href="" className="sie-footer se text-decoration-none">
                      <h4 className="se-t sie-footer-text st-m-heading st-d-heading">Rewards</h4>
                    </a>
                    <a href="" className="sie-footer se text-decoration-none">
                      <h4 className="se-t sie-footer-text st-m-heading st-d-heading">Careers</h4>
                    </a>
                    <a href="" className="sie-footer se text-decoration-none">
                      <h4 className="se-t sie-footer-text st-m-heading st-d-heading">Contact</h4>
                    </a>
                    <a href="" className="sie-footer se text-decoration-none">
                      <h4 className="se-t sie-footer-text st-m-heading st-d-heading">About</h4>
                    </a>
                    <a href="" className="sie-footer se text-decoration-none">
                      <h4 className="se-t sie-footer-text st-m-heading st-d-heading">Carwash</h4>
                    </a>
                    <a href="" className="sie-footer se text-decoration-none">
                      <h4 className="se-t sie-footer-text st-m-heading st-d-heading">Papa Sal's</h4>
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
        </footer>
      </body>
      
    </html>
  )
}

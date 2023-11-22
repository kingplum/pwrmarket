
import Header from "./Components/Header"
// import Banner from "./Components/Banner"
import { Banner } from "./Components/Banner"
import Menu from "./Components/OutMenu"
import Buy from "./Components/Buy"
import Deals from "./Components/Deals"
import Reward from "./Components/Reward"
import Download from "./Components/Download"
import Career from "./Components/Career"
import Footer from "./Components/Footer"

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <Banner />
      <Menu />
      <Buy />
      <Deals />
      <Reward />
      <Download />
      <Career />
      <Footer />
    </div>
  )
}

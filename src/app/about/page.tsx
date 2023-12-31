import Header from "../Components/Header"
import { Banner } from "../Components/Banner"
import Download from "../Components/Download"
import Footer from "../Components/Footer"
import Story from "../Components/Story"
import View from "../Components/View"

export default function About() {
    return (
        <div className="w-[100vw] h-screen overflow-x-hidden overflow-y-auto ">
            <Header />
            <Banner isAbout />
            <Story />
            <View />
            <Download />
            <Footer />
        </div>
    )
}

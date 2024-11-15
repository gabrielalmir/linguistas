import CardsSection from "~/components/card/CardsSection"
import HeroSection from "~/components/HeroSection"
import Navbar from "~/components/Navbar"
import Sidebar from "~/components/Sidebar"

function HomePage() {
  return (
    <>
      <div className="bg-zinc-900 text-white flex">
        <Sidebar />
        <div className="flex-grow p-10">
          <Navbar />
          <HeroSection />
          <CardsSection />
        </div>
      </div>
    </>
  )
}

export default HomePage

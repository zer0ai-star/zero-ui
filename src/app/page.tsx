import Blogs from "./_components/Blogs"
import CATALOGUE from "./_components/CTA"
import DeliveringSection from "./_components/DeliveringSection"
import Footer from "./_components/Footer"
import HeaderSection from "./_components/HeaderSection"
import Mill from "./_components/Mill"
import Plan from "./_components/Plan"
import Section from "./_components/Section"

export default function Home() {
  return (
    <>
     <HeaderSection/>
     <Blogs/>
     <Section/>
     <DeliveringSection/>
     <Mill/>
     <Plan/>
     <CATALOGUE/>
     <Footer/>
    </>
  )
}

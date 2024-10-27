import ButtonBackgroundShine from '@/components/custom/button'
import Image from 'next/image'

const CATALOGUE = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center container mx-auto my-10 space-y-7">
        <div className="md:text-6xl text-4xl text-center text-stone-800 tracking-wide md:px-24  md:leading-[70px] ">
          A CONSCIOUS STEP TOWARDS SUSTAINABILITY.
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10 px-10 md:px-2'>
          <div className="flex flex-col items-center justify-center px-14 py-10 bg-gradient-to-r  from-[#d8e8dfd1] to-[#F2EEDE] rounded-tl-[100px]">
            <div className='text-2xl'>Brand</div>
            <Image src={'/cta1.png'} alt="image" height={100} width={100} className='mt-5'/>
            <ul style={{ listStyle: 'circle' }} className='flex flex-col space-y-3 mt-5'>
              <li>Innovative fabric catalogue.</li>
              <li>Curated sustainable product collection.</li>
              <li>Sustainable brand portfolio.</li>
              <li>Brand campaign on sustainability.</li>
              <li>Carefully vetted manufacturers.</li>
              <li>Updates on sustainability & trends.</li>
              <li>Consultancy & marketing solutions.</li>
              <li>One platform connecting brands & suppliers.</li>
            </ul>
            <div className='mt-10'>
            <ButtonBackgroundShine/> 
            </div>
          
          </div>
          <div className="flex flex-col items-center justify-center px-14 py-10 bg-gradient-to-r  from-[#d8e8dfd1] to-[#F2EEDE] rounded-tl-[100px]">
            <div className='text-2xl'>MANUFACTURERS</div>
            <Image src={'/cta2.png'} alt="image" height={100} width={100} className='mt-5'/>
            <ul style={{ listStyle: 'circle' }} className='flex flex-col space-y-3 mt-5'>
              <li>Transparent process flow with blockchain.</li>
              <li>Life cycle assessment.</li>
              <li>Building a sustainable production process.</li>
              <li>Streamlining suppy chain.</li>
              <li>Exposure to various sustainable projects from the brands.</li>
              <li>Certifications.</li>
              <li>Consultancy & marketing solutions.</li>
              <li>Measure in carbon footprint</li>
            </ul>
            <div className='mt-10'>
            <ButtonBackgroundShine/> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CATALOGUE

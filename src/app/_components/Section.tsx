import Image from 'next/image'

const Section = () => {
  return (
    <div>
      <div className="container mx-auto  grid md:grid-cols-2 grid-cols-1 p-10 ">
        <div className="flex flex-col items-start p-4">
          <div className='md:text-7xl text-5xl font-light tracking-widest'>DRIVEN BY PURPOSE.</div>
          <div className='text-2xl leading-[40px] mt-6'>
            A DESIGN2DELIVERY sustainable solution provider for various
            requirements of the fashion industry to build a climate positive
            future.
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <Image src={'/image2.png'} alt="image" height={400} width={400} />
        </div>
      </div>
    </div>
  )
}

export default Section

import Image from 'next/image'

const Mill = () => {
  return (
    <div className="flex flex-col">
      <div className=" h-[500px] bg-cover bg-no-repeat text-center bg-[url('/mill.png')] relative ">
        <div className="bg-black/40 absolute inset-0"></div>
        <div className="flex absolute top-20 text-left left-4 text-white font-bold text-4xl z-30">
          TOGETHER, WE CAN BUILD A BETTER, AND MORE SUSTAINABLE WORKING WORLD.
        </div>
      </div>
      <div>
        <div className="grid md:grid-cols-3 grid-cols-1 p-10 md:divide-x-4 md:divide-yellow-500 ">
          <div className="flex flex-col p-5 space-y-5">
            <div className="text-2xl font-bold">Experience</div>
            <div className="text-base">
              A healthier, more resilient, and innovative world by delivering
              sustainable solutions that drive progress on ESG goals while
              enhancing business performance.
            </div>
          </div>
          <div className="flex flex-col p-5 space-y-5">
            <div className="text-2xl font-bold">Learn</div>
            <div className="text-base">
              Latest design and development approaches, creating innovative and
              Design2Delivery solutions to the fashion industry with a
              sustainable ecoesystem in mind.
            </div>
          </div>
          <div className="flex flex-col p-5 space-y-5">
            <div className="text-2xl font-bold">Connect</div>
            <div className="text-base">
              Our deep technical expertise addresses the collections from
              material science, product design, life cycle assessment, and
              environmental and social impact.
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-10">
        <Image src={'/image3.png'} alt="Image" height={'800'} width={'800'} />
      </div>
      <div>
        <div className="container mx-auto  grid md:grid-cols-2 grid-cols-1 p-20 ">
          <div className="flex items-center justify-center">
            <Image src={'/image2.png'} alt="image" height={400} width={400} />
          </div>

            <div className="md:text-7xl text-4xl mt-5 md:mt-0 font-light tracking-widest  md:leading-[100px] h-full ">
            CREATING A SUSTAINABLE ECOSYSTEM FOR FASHION.
            </div>
         
        </div>
      </div>
    </div>
  )
}

export default Mill

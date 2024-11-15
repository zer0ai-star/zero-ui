'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const HeaderSection = () => {
  return (
    <div className=" h-screen bg-cover bg-no-repeat text-center bg-[url('/home.png')]">
      <div className=" relative h-full flex items-center justify-center container mx-auto">
        <div className="absolute top-0 left-0">
          <Image src={'/logo.png'} alt="logo" height={120} width={120} />
        </div>
        <div>
          <div className="md:mx-32 md:text-7xl text-3xl z-10 text-white font-semibold tracking-wider">
            BUILDING A CLIMATE POSITIVE FUTURE FOR FASHION
          </div>
          
          <div className="text-2xl  z-10 text-white font-semibold mt-3  ">
            <Button
              className="w-40 bg-white text-orange-600 rounded-full text-xl"
              onClick={() =>
                window.open('https://forms.gle/vD1exFW3g7V4pVPp7', '_blank')
              }
            >
              Talk To Us
            </Button>
          </div>
        </div>

        <div className="text-2xl absolute bottom-0 right-5 z-10 text-white font-semibold  ">
          #BetterWorkingWorld
        </div>
      </div>
    </div>
  )
}

export default HeaderSection

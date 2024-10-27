import { Mail, MapPin } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className=" md:h-screen h-[50vh] bg-cover bg-no-repeat text-center bg-[url('/footer.png')]">
      <div className=" relative h-full flex items-center justify-center container mx-auto">
        <div className="absolute top-0 left-0">
          <Image src={'/logo.png'} alt="logo" height={120} width={120} />
        </div>
        <div className="absolute right-10">
          <div className='flex gap-3 text-white text-xl '>
            <div className='text-right'>769 BROADWAY  <br />  #1106 MANHATTAN <br /> NY 10003 <br /> USA</div>
            <MapPin className='h-10 w-10 text-white ' />
          </div>
          <div className='flex gap-3 text-white text-md'>
            <div className='text-right w-full pr-10 mt-5'>
                USA | INDIA
            </div>
          </div>
          <div className='flex  text-white text-md gap-5 '>
            <div className='text-right w-full  '>
            info.zer0.ai 
            </div>
            <Mail className='h-6 w-6'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

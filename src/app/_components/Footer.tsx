import { InstagramIcon, LinkedinIcon, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className=" md:h-screen h-[50vh] bg-cover bg-no-repeat text-center bg-[url('/footer.png')]">
      <div className=" relative h-full flex items-center justify-center container mx-auto">
        <div className="absolute top-0 left-0">
          <Image src={'/logo.png'} alt="logo" height={120} width={120} />
        </div>
        <div className="absolute right-10">
          <div className="flex gap-3 text-white md:text-xl text-md ">
            <div className="text-right">
              769 BROADWAY <br /> #1106 MANHATTAN <br /> NY 10003 <br /> USA
            </div>
            <MapPin className="h-10 w-10 text-white " />
          </div>
          <div className="flex gap-3 text-white text-md">
            <div className="text-right w-full pr-10 mt-5">USA | INDIA</div>
          </div>
          <div className="flex  text-white text-md gap-5 ">
            <div className="text-right w-full  ">info.zer0.ai</div>
            <Mail className="h-6 w-6" />
          </div>
        </div>
        <div className="absolute bottom-20 text-white flex items-center gap-5 ">
          <Link
            href={'https://www.linkedin.com/company/zer0innovativesolutions/'}
            target="_blank"
          >
            <LinkedinIcon />
          </Link>
          <Link
            href={
              'https://www.instagram.com/zer0forplanet/profilecard/?igsh=Yml0Z3AwODJqd2tz'
            }
            target="_blank"
          >
            <InstagramIcon />
          </Link>
          <Link href={'https://forms.gle/EVx266HDexYv1XMn6'} target="_blank">
            <Mail />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer

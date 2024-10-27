import Image from 'next/image'

const Footer = () => {
  return (
    <div className=" h-screen bg-cover bg-no-repeat text-center bg-[url('/footer.png')]">
      <div className=" relative h-full flex items-center justify-center container mx-auto">
        <div className="absolute top-0 left-0">
          <Image src={'/logo.png'} alt="logo" height={120} width={120} />
        </div>
      

      </div>
    </div>
  )
}

export default Footer

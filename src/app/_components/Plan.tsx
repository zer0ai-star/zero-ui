import ButtonBackgroundShine from '@/components/custom/button'
import Image from 'next/image'

const Plan = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 space-y-16">
        <div className='flex flex-col items-center justify-center space-y-4'>
        <div className="text-5xl text-orange-500">Plan A</div>
        <div className="text-5xl font-semibold text-indigo-900">Climate Positive future.</div>
        </div>

      <div className='grid md:grid-cols-4 grid-cols-1 md:gap-20 gap-10 '>
        <Image src={'/3.png'} alt="image" height={200} width={200} />

        <Image src={'/4.png'} alt="image" height={200} width={200} />
        <Image src={'/1.png'} alt="image" height={200} width={200} />
        <Image src={'/2.png'} alt="image" height={200} width={200} />
      </div>
      <ButtonBackgroundShine/>
    </div>
  )
}

export default Plan

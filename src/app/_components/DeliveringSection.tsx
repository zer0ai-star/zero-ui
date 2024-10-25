import Image from 'next/image'
const data = [
  {
    id: 1,
    imageSrc: '/ICON-1.png',
    title: 'INNOVATIVE FABRIC CATALOGUE',
  },
  {
    id: 2,
    imageSrc: '/ICON-2.png',
    title: 'CURATED SUSTAINABLE PRODUCT COLLECTION',
  },
  {
    id: 3,
    imageSrc: '/ICON-3.png',
    title: 'SUSTAINABLE BRAND PORTFOLIO',
  },
  {
    id: 4,
    imageSrc: '/ICON-4.png',
    title: 'BRAND CAMPAIGN ON SUSTAINABILITY',
  },
  ,
  {
    id: 5,
    imageSrc: '/ICON-5.png',
    title: 'TRANSPARENT WORK FLOW WITH BLOCKCHAIN',
  },
  {
    id: 6,
    imageSrc: '/ICON-6.png',
    title: 'LIFE CYCLE ASSESSMENT',
  },
  {
    id: 7,
    imageSrc: '/ICON-7.png',
    title: 'BUILDING A SUSTAINABLE PRODUCTION PROCESS',
  },
  {
    id: 8,
    imageSrc: '/ICON-8.png',
    title: 'STREAMLINING SUPPLY CHAIN',
  },
]

const DeliveringSection = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto">
      <div className="text-6xl text-center mt-5">
        DELIVERING SUSTAINABLE DESIGN SOLUTIONS.
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 px-5 mt-10">
        {data.length>0 &&  data.map((item) => (
          <div
            key={item?.id}
            className="bg-gradient-to-r from-[#d8e8dfd1] to-[#F2EEDE] rounded-3xl flex flex-col p-5 items-center justify-center"
          >
            <Image
              src={item?.imageSrc || ""}
              alt={item?.title || ""}
              height={200}
              width={200}
            />
            <div className="text-xl -translate-y-7 text-center">
              {item?.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DeliveringSection

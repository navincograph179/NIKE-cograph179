import { shoe8 } from "../assets/images";
import Button from "../Components/Button";


const SuperQuality = () => {
  return (
    <section
    id='about-us'
    className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
  >
      <div className='flex flex-1 flex-col'>
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          <span className='text-coral-red'>最高 </span>
          <span className='text-coral-red'>品質 </span> の靴をお届けします
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        最高級の快適さとスタイルを保証する、細心の注意を払って作られた当社のフットウェアは、比類のない品質、革新性、そして優雅さを提供し、お客様の体験を高めるように設計されています。
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        細部へのこだわりと卓越性により、お客様の満足を保証します。
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  )
}

export default SuperQuality
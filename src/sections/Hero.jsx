import { useState } from 'react';
import Button from '../Components/Button'
import ShoeCard from '../Components/ShoeCard';
import { arrowRight } from '../assets/icons';
import { bigShoe1 } from '../assets/images';
import { shoes, statistics } from '../constants';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="w-full
       flex justify-center
        flex-col xl:flex-row
         gap-10 min-h-screen
          max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p
          className='text-xl font-montserrat text-coral-red'
        >Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span
            className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'
          >新着</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p
          className='font-montserrat text-lg text-slate-gray mt-6 mb-14 sm:max-w-sm'
        >アクティブな生活にぴったりのスタイリッシュな Nike の新商品、上質な快適さ、革新的な製品をご紹介します。</p>
        <Button label="今すぐ表示" iconURL={arrowRight} />
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {/* in this code below, statistic`s data import form constants and using map() func */}
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex flex-1 justify-center items-center
     xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoeImg}
          alt="big shoe1"
          width={610}
          height={500}
          className='relative object-contain z-10' />

<div className='flex sm:gap-6 absolute -bottom-[5%]
        sm:left-[10%] max-sm:px-6'>
        {shoes.map((shoe) => (
          <div key={shoe}>
             <ShoeCard 
             imgURL={shoe}
             changeBigShoeImage={(shoe) => {setBigShoeImg(shoe)}}
             bigShoeImg={bigShoeImg}/> 
          </div>
        ))}
      </div>

      </div>
     
    </section>
  );
};

export default Hero;

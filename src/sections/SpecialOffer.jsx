import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../Components/Button";
const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          オファー
        </h2>
        <p className='mt-4 info-text'>
          他にはないお得な価格で、ショッピング体験を一新する旅に出かけましょう。最高級の品揃えから驚きの割引まで、私たちは他とは一線を画す比類のない価値を提供します。
        </p>
        <p className='mt-6 info-text'>
          あなた独自の願望を叶え、最も高い期待を超える可能性の世界を探索してください。私たちと一緒に過ごす旅は、まさに特別なものとなるでしょう。
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;


import PopularProductCard from "../Components/PopularProductCard"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section id="products"
      className="max-container max-sm:mt-12"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">人気 </span>
          商品</h2>
        <p className="font-montserrat text-slate-gray lg:max-w-lg mt-2">弊社の人気セレクションで、一流の品質とスタイルを体験してください。快適さ、デザイン、価値の世界を発見してください。
        </p>
      </div>
      
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product)=>(
          <PopularProductCard key={product.name} {...product}/>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts
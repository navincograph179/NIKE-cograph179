import Nav from './Components/Nav';
import { Hero, CustomerReviews, Services, PopularProducts, SpecialOffer, Subscribe, SuperQuality, Footer } from './sections';
{/* These components exported from index.js components */}
const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
      <PopularProducts />
      </section>
      <section className="padding">
      <SuperQuality />
      </section>
      <section className="padding">
      <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}

export default App
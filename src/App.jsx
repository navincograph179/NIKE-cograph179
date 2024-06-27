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
      <section className="padding">
      <CustomerReviews />
      </section>
      <Services />
      <PopularProducts />
      <SpecialOffer />
      <Subscribe />
      <SuperQuality />
      <Footer />
    </main>
  )
}

export default App
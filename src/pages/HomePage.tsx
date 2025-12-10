import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { ProductsByCategory } from '../components/ProductsByCategory';
import { About } from '../components/About';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <ProductsByCategory />
      <About />
      <Contact />
    </>
  );
}

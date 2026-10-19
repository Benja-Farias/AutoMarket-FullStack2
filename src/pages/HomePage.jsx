import Banner from '../components/Banner.jsx';
import FeaturedCarousel from '../components/FeaturedCarousel.jsx';
import { PRODUCTS } from '../data/products.js';

export default function HomePage() {
  const destacados = PRODUCTS.filter((p) => p.destacado);
  return (
    <>
      <Banner />
      <div className="container my-5">
        <h2 className="text-center mb-4 fw-bold">Vehículos Destacados</h2>
        <FeaturedCarousel productos={destacados} />
      </div>
    </>
  );
}

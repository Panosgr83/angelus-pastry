import { Product } from '../lib/supabase';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
        <div className="relative overflow-hidden h-64">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {product.featured && (
            <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Προτεινόμενο
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 leading-relaxed line-clamp-3">
            {product.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

import { Product } from '../lib/supabase';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer animate-fade-in-up relative">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/0 to-emerald-600/0 group-hover:from-emerald-600/5 group-hover:to-transparent transition-all duration-500 z-10 pointer-events-none rounded-2xl"></div>

        <div className="relative overflow-hidden h-64">
          <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-all duration-500 z-10"></div>
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
          />
          {product.featured && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-1 animate-pulse-glow">
              <Sparkles size={16} />
              Προτεινόμενο
            </div>
          )}
        </div>

        <div className="p-6 relative">
          <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 group-hover:w-full transition-all duration-500"></div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-all duration-300 transform group-hover:translate-x-1">
            {product.name}
          </h3>
          <p className="text-gray-600 leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors">
            {product.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

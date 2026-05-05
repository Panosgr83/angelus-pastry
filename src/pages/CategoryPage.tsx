import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase, Product } from '../lib/supabase';
import { ProductCard } from '../components/ProductCard';
import { Loader2, ArrowLeft, Grid3x3 as Grid3X3 } from 'lucide-react';
import { useCategoryBySlug } from '../hooks/useProducts';

export function CategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { category, loading: categoryLoading } = useCategoryBySlug(categorySlug);
  const [products, setProducts] = useState<Product[]>([]);
  const [productsLoading, setProductsLoading] = useState(true);

  useEffect(() => {
    if (!category) return;

    async function fetchProducts() {
      const { data } = await supabase
        .from('products')
        .select('*')
        .eq('category_id', category!.id)
        .order('display_order');

      setProducts(data || []);
      setProductsLoading(false);
    }

    fetchProducts();
  }, [category]);

  if (categoryLoading || productsLoading) {
    return (
      <div className="flex justify-center items-center py-20 min-h-screen">
        <Loader2 className="animate-spin text-emerald-600" size={48} />
      </div>
    );
  }

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-center text-gray-600">Η κατηγορία δεν βρέθηκε</p>
        <div className="text-center mt-4">
          <Link to="/" className="text-emerald-700 hover:underline">Επιστροφή στην Αρχική</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white">
      {/* Hero banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        {category.image_url && (
          <img
            src={category.image_url}
            alt={category.name}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              <span>Αρχική</span>
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-600/90 backdrop-blur-sm text-white rounded-full text-xs font-medium mb-3">
              <Grid3X3 size={12} />
              Κατηγορία
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">{category.name}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {category.description && (
          <p className="text-xl text-gray-600 max-w-3xl mb-10 animate-fade-in-up">{category.description}</p>
        )}

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
            <p className="text-gray-500 text-lg">Δεν υπάρχουν προϊόντα σε αυτήν την κατηγορία</p>
          </div>
        )}
      </div>
    </div>
  );
}

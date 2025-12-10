import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase, Product, Category } from '../lib/supabase';
import { ProductCard } from '../components/ProductCard';
import { Loader2, ArrowLeft } from 'lucide-react';

export function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!categoryId) return;

      const { data: categoryData } = await supabase
        .from('categories')
        .select('*')
        .eq('id', categoryId)
        .maybeSingle();

      const { data: productsData } = await supabase
        .from('products')
        .select('*')
        .eq('category_id', categoryId)
        .order('display_order');

      setCategory(categoryData);
      setProducts(productsData || []);
      setLoading(false);
    }

    fetchData();
  }, [categoryId]);

  if (loading) {
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
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Επιστροφή στην Αρχική</span>
        </Link>

        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            Κατηγορία
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{category.name}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">{category.description}</p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl shadow-md">
            <p className="text-gray-500 text-lg">
              Δεν υπάρχουν προϊόντα σε αυτήν την κατηγορία
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

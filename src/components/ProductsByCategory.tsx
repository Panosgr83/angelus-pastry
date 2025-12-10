import { useState, useEffect } from 'react';
import { useCategories, useProducts } from '../hooks/useProducts';
import { ProductCard } from './ProductCard';
import { Loader2 } from 'lucide-react';
import { Product, Category } from '../lib/supabase';

export function ProductsByCategory() {
  const { categories, loading: categoriesLoading } = useCategories();
  const { products, loading: productsLoading } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0].id);
    }
  }, [categories, selectedCategory]);

  if (categoriesLoading || productsLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="animate-spin text-emerald-600" size={48} />
      </div>
    );
  }

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category_id === selectedCategory)
    : products;

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            Η Συλλογή μας
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Τα Προϊόντα μας
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Φρέσκα προϊόντα κάθε μέρα, φτιαγμένα με αγάπη και τις καλύτερες πρώτες ύλες
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-emerald-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {selectedCategory && (
          <div className="text-center mt-12">
            <a
              href={`/category/${selectedCategory}`}
              className="inline-block px-8 py-4 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Δείτε Όλα τα Προϊόντα της Κατηγορίας
            </a>
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Δεν βρέθηκαν προϊόντα σε αυτήν την κατηγορία</p>
          </div>
        )}
      </div>
    </section>
  );
}

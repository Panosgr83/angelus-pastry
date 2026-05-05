import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase, Product, Category } from '../lib/supabase';
import { ProductCard } from '../components/ProductCard';
import { Loader2, ArrowLeft, Tag, ChevronRight } from 'lucide-react';
import { useProductBySlug } from '../hooks/useProducts';

export function ProductPage() {
  const { productSlug } = useParams<{ productSlug: string }>();
  const { product, loading: productLoading } = useProductBySlug(productSlug);
  const [category, setCategory] = useState<Category | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [relatedLoading, setRelatedLoading] = useState(true);

  useEffect(() => {
    if (!product) return;

    async function fetchRelated() {
      const { data: categoryData } = await supabase
        .from('categories')
        .select('*')
        .eq('id', product!.category_id)
        .maybeSingle();

      setCategory(categoryData);

      const { data: relatedData } = await supabase
        .from('products')
        .select('*')
        .eq('category_id', product!.category_id)
        .neq('id', product!.id)
        .order('display_order')
        .limit(3);

      setRelatedProducts(relatedData || []);
      setRelatedLoading(false);
    }

    fetchRelated();
  }, [product]);

  if (productLoading) {
    return (
      <div className="flex justify-center items-center py-20 min-h-screen">
        <Loader2 className="animate-spin text-emerald-600" size={48} />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-center text-gray-600">Το προϊόν δεν βρέθηκε</p>
        <div className="text-center mt-4">
          <Link to="/" className="text-emerald-700 hover:underline">Επιστροφή στην Αρχική</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-emerald-700 transition-colors">Αρχική</Link>
          <ChevronRight size={14} />
          {category && (
            <>
              <Link to={`/category/${category.slug}`} className="hover:text-emerald-700 transition-colors">{category.name}</Link>
              <ChevronRight size={14} />
            </>
          )}
          <span className="text-gray-800 font-medium">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="relative animate-slide-in-left">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            {product.featured && (
              <div className="absolute top-6 right-6 bg-emerald-600 text-white px-4 py-2 rounded-full font-medium shadow-lg">
                Προτεινόμενο
              </div>
            )}
          </div>

          <div className="space-y-6 animate-slide-in-right">
            {category && (
              <Link
                to={`/category/${category.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium hover:bg-emerald-200 transition-colors"
              >
                <Tag size={14} />
                {category.name}
              </Link>
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>

            <p className="text-xl leading-relaxed text-gray-600 whitespace-pre-line">
              {product.description}
            </p>

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Χαρακτηριστικά</h3>
              <ul className="space-y-3 text-gray-600">
                {['Φρέσκο καθημερινά', 'Χωρίς συντηρητικά', 'Premium υλικά', 'Χειροποίητο'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 flex gap-4 flex-wrap">
              <a
                href="/#contact"
                className="inline-block px-8 py-4 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Επικοινωνήστε για Παραγγελία
              </a>
              {category && (
                <Link
                  to={`/category/${category.slug}`}
                  className="inline-block px-8 py-4 bg-white text-emerald-700 border-2 border-emerald-700 rounded-lg font-medium hover:bg-emerald-50 transition-all transform hover:scale-105"
                >
                  Δείτε Άλλα {category.name}
                </Link>
              )}
            </div>
          </div>
        </div>

        {!relatedLoading && relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Σχετικά Προϊόντα</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((p, index) => (
                <div key={p.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

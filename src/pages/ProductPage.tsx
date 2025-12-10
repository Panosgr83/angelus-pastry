import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase, Product, Category } from '../lib/supabase';
import { Loader2, ArrowLeft, Tag } from 'lucide-react';

export function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!productId) return;

      const { data: productData } = await supabase
        .from('products')
        .select('*')
        .eq('id', productId)
        .maybeSingle();

      if (productData) {
        setProduct(productData);

        const { data: categoryData } = await supabase
          .from('categories')
          .select('*')
          .eq('id', productData.category_id)
          .maybeSingle();

        setCategory(categoryData);

        const { data: relatedData } = await supabase
          .from('products')
          .select('*')
          .eq('category_id', productData.category_id)
          .neq('id', productId)
          .order('display_order')
          .limit(3);

        setRelatedProducts(relatedData || []);
      }

      setLoading(false);
    }

    fetchData();
  }, [productId]);

  if (loading) {
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

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="relative">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
            />
            {product.featured && (
              <div className="absolute top-6 right-6 bg-emerald-600 text-white px-4 py-2 rounded-full font-medium shadow-lg">
                Προτεινόμενο
              </div>
            )}
          </div>

          <div className="space-y-6">
            {category && (
              <Link
                to={`/category/${category.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium hover:bg-emerald-200 transition-colors"
              >
                <Tag size={16} />
                {category.name}
              </Link>
            )}

            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>

            <div className="prose prose-lg text-gray-600">
              <p className="text-xl leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Χαρακτηριστικά
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl">✓</span>
                  <span>Φρέσκο καθημερινά</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl">✓</span>
                  <span>Χωρίς συντηρητικά</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl">✓</span>
                  <span>Premium υλικά</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl">✓</span>
                  <span>Χειροποίητο</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/#contact';
                }}
                className="inline-block px-8 py-4 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Επικοινωνήστε για Παραγγελία
              </a>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Σχετικά Προϊόντα
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={relatedProduct.image_url}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                      {relatedProduct.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

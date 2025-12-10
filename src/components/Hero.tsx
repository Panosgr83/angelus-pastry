import { ChefHat, Heart, Award } from 'lucide-react';
import { useCounterAnimation } from '../hooks/useCounterAnimation';

export function Hero() {
  const { count: yearsCount, countRef } = useCounterAnimation(2, 1500);

  return (
    <section id="home" className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium animate-bounce-slow">
              Από το 2022
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up animation-delay-200">
              Φρεσκάδα & Γεύση
              <span className="block text-emerald-700 mt-2">Κάθε Μέρα</span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up animation-delay-400">
              Παραδοσιακές συνταγές, φρέσκα υλικά και αγάπη σε κάθε δημιουργία μας.
              Στο Angelus, κάθε μέρα ξεκινά με το άρωμα του φρέσκου ψωμιού και τη γεύση
              των χειροποίητων γλυκών μας.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up animation-delay-600">
              <a
                href="#products"
                className="px-8 py-4 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Δείτε τα Προϊόντα μας
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-emerald-700 border-2 border-emerald-700 rounded-lg font-medium hover:bg-emerald-50 transition-all transform hover:scale-105"
              >
                Επικοινωνία
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center group animate-scale-in animation-delay-400">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-200 group-hover:rotate-12">
                  <ChefHat className="text-emerald-700" size={24} />
                </div>
                <p className="text-sm font-medium text-gray-700">Χειροποίητα</p>
              </div>
              <div className="text-center group animate-scale-in animation-delay-600">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-200 group-hover:rotate-12">
                  <Heart className="text-emerald-700" size={24} />
                </div>
                <p className="text-sm font-medium text-gray-700">Με Αγάπη</p>
              </div>
              <div className="text-center group animate-scale-in animation-delay-800">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-200 group-hover:rotate-12">
                  <Award className="text-emerald-700" size={24} />
                </div>
                <p className="text-sm font-medium text-gray-700">Premium Ποιότητα</p>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-emerald-200 rounded-3xl transform rotate-6 transition-transform duration-700 hover:-rotate-6"></div>
            <img
              src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Φρέσκο ψωμί"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
            />
            <div ref={countRef} className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-pulse-glow">
              <p className="text-4xl font-bold text-emerald-700">{yearsCount}+</p>
              <p className="text-sm text-gray-600">Χρόνια Εμπειρίας</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ChefHat, Heart, Award } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
              Από το 2022
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Φρεσκάδα & Γεύση
              <span className="block text-emerald-700 mt-2">Κάθε Μέρα</span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Παραδοσιακές συνταγές, φρέσκα υλικά και αγάπη σε κάθε δημιουργία μας.
              Στο Angelus, κάθε μέρα ξεκινά με το άρωμα του φρέσκου ψωμιού και τη γεύση
              των χειροποίητων γλυκών μας.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#products"
                className="px-8 py-4 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Δείτε τα Προϊόντα μας
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-emerald-700 border-2 border-emerald-700 rounded-lg font-medium hover:bg-emerald-50 transition-all"
              >
                Επικοινωνία
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-2">
                  <ChefHat className="text-emerald-700" size={24} />
                </div>
                <p className="text-sm font-medium text-gray-700">Χειροποίητα</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-2">
                  <Heart className="text-emerald-700" size={24} />
                </div>
                <p className="text-sm font-medium text-gray-700">Με Αγάπη</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-2">
                  <Award className="text-emerald-700" size={24} />
                </div>
                <p className="text-sm font-medium text-gray-700">Premium Ποιότητα</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-emerald-200 rounded-3xl transform rotate-6"></div>
            <img
              src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Φρέσκο ψωμί"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold text-emerald-700">2+</p>
              <p className="text-sm text-gray-600">Χρόνια Εμπειρίας</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Users, Award, Clock, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-200 rounded-3xl transform -rotate-6"></div>
            <img
              src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Ο φούρνος μας"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
              Η Ιστορία μας
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Παράδοση & Ποιότητα
              <span className="block text-emerald-700 mt-2">Από το 2022</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Το Angelus Pastry & Bakery ξεκίνησε το ταξίδι του το 2022 στο
              Γαλάτσι με ένα όνειρο: να φέρνει στους πελάτες μας την αυθεντική γεύση
              της παραδοσιακής ελληνικής αρτοποιίας και ζαχαροπλαστικής με σύγχρονες
              τεχνικές και premium υλικά.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Κάθε μέρα ξυπνάμε νωρίς για να ζυμώσουμε με τα χέρια μας το ψωμί και να
              δημιουργήσουμε τα χειροποίητα γλυκά μας, χρησιμοποιώντας μόνο τις καλύτερες
              πρώτες ύλες και οικογενειακές συνταγές που κρατάμε για γενιές.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl">
                  <Users className="text-emerald-700" size={24} />
                </div>
                <p className="text-2xl font-bold text-gray-900">10,000+</p>
                <p className="text-sm text-gray-600">Ευχαριστημένοι Πελάτες</p>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl">
                  <Award className="text-emerald-700" size={24} />
                </div>
                <p className="text-2xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-600">Είδη Προϊόντων</p>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl">
                  <Clock className="text-emerald-700" size={24} />
                </div>
                <p className="text-2xl font-bold text-gray-900">365</p>
                <p className="text-sm text-gray-600">Μέρες το Χρόνο</p>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl">
                  <Heart className="text-emerald-700" size={24} />
                </div>
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-600">Χειροποίητα</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

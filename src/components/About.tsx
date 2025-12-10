import { Users, Award, Clock, Heart } from 'lucide-react';
import { useCounterAnimation } from '../hooks/useCounterAnimation';

function AnimatedStat({
  icon: Icon,
  end,
  suffix = '',
  label
}: {
  icon: any;
  end: number;
  suffix?: string;
  label: string;
}) {
  const { count, countRef } = useCounterAnimation(end, 2000);

  return (
    <div className="space-y-2 group">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-200">
        <Icon className="text-emerald-700" size={24} />
      </div>
      <div ref={countRef}>
        <p className="text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:text-emerald-700">
          {count.toLocaleString()}{suffix}
        </p>
      </div>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-slide-in-left">
            <div className="absolute inset-0 bg-emerald-200 rounded-3xl transform -rotate-6 transition-transform duration-500 hover:rotate-6"></div>
            <img
              src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Ο φούρνος μας"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium animate-bounce-slow">
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
              <AnimatedStat
                icon={Users}
                end={10000}
                suffix="+"
                label="Ευχαριστημένοι Πελάτες"
              />

              <AnimatedStat
                icon={Award}
                end={50}
                suffix="+"
                label="Είδη Προϊόντων"
              />

              <AnimatedStat
                icon={Clock}
                end={365}
                label="Μέρες το Χρόνο"
              />

              <AnimatedStat
                icon={Heart}
                end={100}
                suffix="%"
                label="Χειροποίητα"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

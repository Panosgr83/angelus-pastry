import { MapPin, Phone, Mail, Clock, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCategories } from '../hooks/useProducts';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { categories } = useCategories();

  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.png"
                alt="Angelus Pastry and Bakery"
                className="h-14 w-14 object-contain bg-white rounded-full p-1"
              />
              <div>
                <span className="text-xl font-bold tracking-wide block">ANGELUS</span>
                <span className="text-emerald-300 text-xs tracking-widest">PASTRY &amp; BAKERY</span>
              </div>
            </div>
            <p className="text-emerald-200 leading-relaxed text-sm">
              Φρεσκάδα και ποιότητα από το 2022. Κάθε μέρα φτιάχνουμε με αγάπη τα προϊόντα μας για εσάς.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-base font-bold mb-5 text-white">Κατηγορίες</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/category/${cat.slug}`}
                    className="flex items-center gap-2 text-emerald-200 hover:text-white transition-colors text-sm group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0 transition-all duration-200" />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-5 text-white">Επικοινωνία</h3>
            <div className="space-y-3 text-emerald-200 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-emerald-400" />
                <span>Καββαδία 3 &amp; Αρχιμήδους, Γαλάτσι 111 46</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-emerald-400" />
                <a href="tel:+302101234567" className="hover:text-white transition-colors">210 123 4567</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-emerald-400" />
                <a href="mailto:info@angelusbakery.gr" className="hover:text-white transition-colors">info@angelusbakery.gr</a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-base font-bold mb-5 text-white">Ωράριο</h3>
            <div className="space-y-2 text-emerald-200 text-sm">
              <div className="flex items-start gap-2">
                <Clock size={16} className="flex-shrink-0 mt-0.5 text-emerald-400" />
                <div>
                  <p className="font-medium text-white">Δευτέρα - Παρασκευή</p>
                  <p>07:00 - 21:00</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="flex-shrink-0 mt-0.5 text-emerald-400" />
                <div>
                  <p className="font-medium text-white">Σάββατο</p>
                  <p>07:00 - 21:00</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="flex-shrink-0 mt-0.5 text-emerald-400" />
                <div>
                  <p className="font-medium text-white">Κυριακή</p>
                  <p>07:00 - 15:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-emerald-300 text-sm flex items-center gap-2">
            &copy; {currentYear} Angelus Pastry &amp; Bakery. Φτιαγμένο με
            <Heart size={14} className="text-red-400 fill-current" />
            για εσάς.
          </p>
          <div className="flex items-center gap-6 text-sm text-emerald-300">
            <Link to="/" className="hover:text-white transition-colors">Αρχική</Link>
            <a href="/#products" className="hover:text-white transition-colors">Προϊόντα</a>
            <a href="/#about" className="hover:text-white transition-colors">Σχετικά</a>
            <a href="/#contact" className="hover:text-white transition-colors">Επικοινωνία</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

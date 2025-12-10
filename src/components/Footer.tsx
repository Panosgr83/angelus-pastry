import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Angelus Pastry & Bakery"
                className="h-12 w-12 object-contain bg-white rounded-full p-1"
              />
              <div>
                <h3 className="text-xl font-bold">ANGELUS</h3>
                <p className="text-emerald-200 text-sm">PASTRY & BAKERY</p>
              </div>
            </div>
            <p className="text-emerald-100 leading-relaxed">
              Φρεσκάδα και ποιότητα από το 2022. Κάθε μέρα φτιάχνουμε με αγάπη
              τα προϊόντα μας για εσάς.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Επικοινωνία</h3>
            <div className="space-y-3 text-emerald-100">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Καββαδία 3 & Αρχιμήδους, Γαλάτσι 111 46</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <span>210 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <span>info@angelusbakery.gr</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Ωράριο</h3>
            <div className="space-y-2 text-emerald-100">
              <div className="flex items-start gap-2">
                <Clock size={18} className="flex-shrink-0 mt-1" />
                <div>
                  <p>Δευτ-Σάβ: 07:00-21:00</p>
                  <p>Κυριακή: 07:00-15:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-800 pt-8 text-center">
          <p className="text-emerald-200 flex items-center justify-center gap-2">
            © {currentYear} Angelus Pastry & Bakery. Φτιαγμένο με <Heart size={16} className="text-red-400 fill-current" /> για εσάς.
          </p>
        </div>
      </div>
    </footer>
  );
}

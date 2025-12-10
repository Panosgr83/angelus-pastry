import { MapPin, Phone, Clock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-emerald-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Καββαδία 3 & Αρχιμήδους, Γαλάτσι</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>210 123 4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Δευτ-Σάβ: 07:00-21:00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <img
              src="/logo.png"
              alt="Angelus Pastry & Bakery"
              className="h-16 w-16 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-emerald-800">ANGELUS</h1>
              <p className="text-sm text-gray-600">PASTRY & BAKERY</p>
            </div>
          </Link>

          <nav className="hidden md:flex gap-8">
            {isHomePage ? (
              <>
                <a href="#home" className="text-gray-700 hover:text-emerald-700 transition-colors font-medium">
                  Αρχική
                </a>
                <a href="#products" className="text-gray-700 hover:text-emerald-700 transition-colors font-medium">
                  Προϊόντα
                </a>
                <a href="#about" className="text-gray-700 hover:text-emerald-700 transition-colors font-medium">
                  Σχετικά
                </a>
                <a href="#contact" className="text-gray-700 hover:text-emerald-700 transition-colors font-medium">
                  Επικοινωνία
                </a>
              </>
            ) : (
              <>
                <Link to="/#home" className="text-gray-700 hover:text-emerald-700 transition-colors font-medium">
                  Αρχική
                </Link>
                <Link to="/#products" className="text-gray-700 hover:text-emerald-700 transition-colors font-medium">
                  Προϊόντα
                </Link>
                <Link to="/#about" className="text-gray-700 hover:text-emerald-700 transition-colors font-medium">
                  Σχετικά
                </Link>
                <Link to="/#contact" className="text-gray-700 hover:text-emerald-700 transition-colors font-medium">
                  Επικοινωνία
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

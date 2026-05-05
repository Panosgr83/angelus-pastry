import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCategories } from '../hooks/useProducts';

export function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoryDropOpen, setCategoryDropOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { categories } = useCategories();
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setCategoryDropOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="bg-emerald-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Καββαδία 3 &amp; Αρχιμήδους, Γαλάτσι</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Phone size={14} />
              <a href="tel:+302101234567" className="hover:text-emerald-200 transition-colors">210 123 4567</a>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Clock size={14} />
              <span>Δευτ-Σάβ: 07:00-21:00 | Κυρ: 07:00-15:00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="Angelus Pastry and Bakery" className="h-14 w-14 object-contain" />
            <div>
              <span className="text-xl font-bold text-emerald-800 tracking-wide block">ANGELUS</span>
              <span className="text-xs text-gray-500 tracking-widest">PASTRY &amp; BAKERY</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <a href="#home" className="text-gray-700 hover:text-emerald-700 transition-colors font-medium relative group">
                Αρχική
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ) : (
              <Link to="/#home" className="text-gray-700 hover:text-emerald-700 transition-colors font-medium relative group">
                Αρχική
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            )}

            <div className="relative" ref={dropRef}>
              <button
                onClick={() => setCategoryDropOpen(!categoryDropOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-emerald-700 transition-colors font-medium relative group"
              >
                Προϊόντα
                <ChevronDown size={16} className={`transition-transform duration-200 ${categoryDropOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </button>

              {categoryDropOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-fade-in-down">
                  <div className="py-2">
                    <Link
                      to="/#products"
                      onClick={() => setCategoryDropOpen(false)}
                      className="flex items-center px-5 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors font-medium border-b border-gray-100"
                    >
                      Όλα τα Προϊόντα
                    </Link>
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/category/${cat.slug}`}
                        onClick={() => setCategoryDropOpen(false)}
                        className="flex items-center px-5 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {isHomePage ? (
              <a href="#about" className="text-gray-700 hover:text-emerald-700 transition-colors font-medium relative group">
                Σχετικά
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ) : (
              <Link to="/#about" className="text-gray-700 hover:text-emerald-700 transition-colors font-medium relative group">
                Σχετικά
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            )}

            {isHomePage ? (
              <a href="#contact" className="text-gray-700 hover:text-emerald-700 transition-colors font-medium relative group">
                Επικοινωνία
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ) : (
              <Link to="/#contact" className="text-gray-700 hover:text-emerald-700 transition-colors font-medium relative group">
                Επικοινωνία
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            )}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-in-down">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <a
              href={isHomePage ? '#home' : '/#home'}
              className="flex items-center px-4 py-3 rounded-xl text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors font-medium"
            >
              Αρχική
            </a>

            <div>
              <button
                onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors font-medium"
              >
                <span>Προϊόντα</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileCategoryOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileCategoryOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-emerald-100 pl-4">
                  <Link
                    to="/#products"
                    className="flex items-center py-2 text-sm text-gray-600 hover:text-emerald-700 transition-colors font-medium"
                  >
                    Όλα τα Προϊόντα
                  </Link>
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/category/${cat.slug}`}
                      className="flex items-center py-2 text-sm text-gray-600 hover:text-emerald-700 transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href={isHomePage ? '#about' : '/#about'}
              className="flex items-center px-4 py-3 rounded-xl text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors font-medium"
            >
              Σχετικά
            </a>
            <a
              href={isHomePage ? '#contact' : '/#contact'}
              className="flex items-center px-4 py-3 rounded-xl text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors font-medium"
            >
              Επικοινωνία
            </a>

            <div className="pt-3 border-t border-gray-100 flex items-center gap-2 px-4 text-sm text-gray-500">
              <Phone size={14} />
              <a href="tel:+302101234567" className="hover:text-emerald-700 transition-colors">210 123 4567</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

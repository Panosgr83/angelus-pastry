import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Φρέσκο Ψωμί',
    subtitle: 'Κάθε Μέρα',
    description: 'Παραδοσιακές συνταγές με προζύμι και αργής ωρίμανσης'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Χειροποίητα Γλυκά',
    subtitle: 'Premium Ποιότητα',
    description: 'Τούρτες και γλυκά για κάθε περίσταση'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Ζαχαροπλαστική',
    subtitle: 'Μοναδικές Γεύσεις',
    description: 'Τάρτες και εκλαίρ με φρέσκα υλικά'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/5949897/pexels-photo-5949897.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Αλμυρές Λιχουδιές',
    subtitle: 'Για Όλη την Ημέρα',
    description: 'Τυρόψωμα και ελαιόψωμα με ελληνικά υλικά'
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 translate-x-0'
              : index < currentSlide
              ? 'opacity-0 -translate-x-full'
              : 'opacity-0 translate-x-full'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />

          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <div
                  className={`transform transition-all duration-1000 delay-300 ${
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                >
                  <div className="inline-block px-4 py-2 bg-emerald-600/90 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
                    {slide.subtitle}
                  </div>

                  <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h2>

                  <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="flex gap-4">
                    <a
                      href="#products"
                      className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Δείτε τα Προϊόντα
                    </a>
                    <a
                      href="#contact"
                      className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg font-medium hover:bg-white/20 transition-all"
                    >
                      Επικοινωνία
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} className="group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all group"
        aria-label="Next slide"
      >
        <ChevronRight size={32} className="group-hover:scale-110 transition-transform" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? 'w-12 bg-emerald-600'
                : 'w-3 bg-white/50 hover:bg-white/70'
            } h-3 rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
    </div>
  );
}

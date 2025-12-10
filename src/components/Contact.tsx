import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4 animate-fade-in-down">
            Επικοινωνία
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-200">
            Ελάτε να μας Βρείτε
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            Θα χαρούμε να σας δούμε στο κατάστημά μας
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-left">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-200">
                  <MapPin className="text-emerald-700" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Διεύθυνση</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Καββαδία 3 & Αρχιμήδους γωνία<br />
                    111 46, Γαλάτσι<br />
                    Αθήνα, Ελλάδα
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-left animation-delay-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-200">
                  <Phone className="text-emerald-700" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Τηλέφωνο</h3>
                  <p className="text-gray-600">
                    <a href="tel:+302101234567" className="hover:text-emerald-700 transition-colors">
                      210 123 4567
                    </a>
                  </p>
                  <p className="text-gray-600 mt-1">
                    <a href="tel:+306971234567" className="hover:text-emerald-700 transition-colors">
                      697 123 4567
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-left animation-delay-400">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-200">
                  <Clock className="text-emerald-700" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ωράριο</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>Δευτέρα - Παρασκευή: 07:00 - 21:00</p>
                    <p>Σάββατο: 07:00 - 21:00</p>
                    <p>Κυριακή: 07:00 - 15:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-left animation-delay-600">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-200">
                  <Mail className="text-emerald-700" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@angelusbakery.gr" className="hover:text-emerald-700 transition-colors">
                      info@angelusbakery.gr
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[600px] animate-slide-in-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.8747384891634!2d23.752824315530424!3d38.01878797971847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1a2e7f7f7f7f7%3A0x0!2zMzjCsDAxJzA3LjYiTiAyM8KwNDUnMTcuNCJF!5e0!3m2!1sel!2sgr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Χάρτης Angelus Bakery"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

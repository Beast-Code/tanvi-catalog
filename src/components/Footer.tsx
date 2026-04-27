import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E8E0D4] bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3
              className="text-xl font-semibold text-[#2C2420] tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              TANVI
            </h3>
            <p className="text-xs tracking-[0.2em] text-[#8B7D6B] uppercase mt-0.5">
              Wholesale Collection
            </p>
            <p className="text-sm text-[#A69882] mt-3 leading-relaxed max-w-xs">
              Premium women&apos;s ethnic wear for retailers. Curated kurtis and suit sets in sets of 4 sizes.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-[#2C2420] mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-[#8B7D6B] hover:text-[#2C2420] transition-colors duration-200">
                  Full Catalog
                </Link>
              </li>

              {/* KEEP THESE AS <a> (external links) */}
              <li>
                <a
                  href="https://wa.me/919106642524?text=Hi%2C%20I%27d%20like%20to%20know%20about%20wholesale%20pricing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#8B7D6B] hover:text-[#2C2420] transition-colors duration-200"
                >
                  Wholesale Pricing
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919106642524?text=Hi%2C%20I%20have%20a%20query."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#8B7D6B] hover:text-[#2C2420] transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-[#2C2420] mb-3">Get in Touch</h4>
            <a
              href="https://wa.me/919106642524"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-medium hover:bg-[#20BD5A] transition-all duration-300 active:scale-95"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
            <p className="text-xs text-[#A69882] mt-3">
              Available Mon – Sat, 10 AM – 7 PM
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E8E0D4] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#A69882]">
            © {new Date().getFullYear()} Tanvi Wholesale. All rights reserved.
          </p>
          <p className="text-xs text-[#A69882]">
            Wholesale Only • Minimum Order Applies
          </p>
        </div>
      </div>
    </footer>
  );
}
"use client";

import { products } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

export default function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F0EBE3] to-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-[#E8E0D4] text-xs font-medium text-[#8B7D6B] mb-6 animate-[fadeUp_0.5s_ease_both]">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              Accepting wholesale orders
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#2C2420] leading-[1.15] tracking-tight animate-[fadeUp_0.5s_ease_0.1s_both]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Premium Ethnic Wear
              <br />
              <span className="text-[#C4956A]">Wholesale Catalog</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#8B7D6B] leading-relaxed max-w-lg animate-[fadeUp_0.5s_ease_0.2s_both]">
              Curated collection of designer kurtis and suit sets. Each design available in sets of 4 sizes — crafted for retailers who demand quality.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-[fadeUp_0.5s_ease_0.3s_both]">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2C2420] text-[#FAF7F2] text-sm font-medium hover:bg-[#3D332D] transition-all duration-300 active:scale-95"
              >
                Browse Catalog
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </a>
              <a
                href="https://wa.me/919106642524?text=Hi%2C%20I%27d%20like%20to%20discuss%20wholesale%20pricing%20for%20your%20collection."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#2C2420] text-[#2C2420] text-sm font-medium hover:bg-[#2C2420] hover:text-[#FAF7F2] transition-all duration-300 active:scale-95"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get Wholesale Pricing
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#C4956A]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C4956A]/3 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Catalog */}
      <div id="catalog">
        <ProductGrid products={products} />
      </div>

      {/* Trust section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              ),
              title: "Quality Assured",
              desc: "Every piece quality checked",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              ),
              title: "Pan India Delivery",
              desc: "Ship anywhere in India",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              ),
              title: "Set of 4 Sizes",
              desc: "S, M, L, XL in each set",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              ),
              title: "WhatsApp Support",
              desc: "Quick & easy ordering",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-white/50 border border-[#E8E0D4]/50"
            >
              <div className="w-12 h-12 rounded-full bg-[#F0EBE3] flex items-center justify-center text-[#C4956A] mb-3">
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold text-[#2C2420]">{item.title}</h3>
              <p className="text-xs text-[#A69882] mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductPageContentProps {
  product: Product;
}

export default function ProductPageContent({ product }: ProductPageContentProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem, removeItem, isInCart } = useCart();
  const inCart = isInCart(product.id);

  const whatsappNumber = "919106642524";
  const enquiryMessage = `Hi, I'm interested in this product:\n\nProduct Name: ${product.name}\nProduct Code: ${product.code}\n\nPlease share more details.`;

  const handleEnquire = () => {
    const encodedMessage = encodeURIComponent(enquiryMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleCartToggle = () => {
    if (inCart) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Back button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#8B7D6B] hover:text-[#2C2420] transition-colors duration-200 mb-6"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to catalog
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#F0EBE3]">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#F0EBE3] via-[#FAF7F2] to-[#F0EBE3] animate-shimmer" />
              )}
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={`object-cover transition-all duration-500 ${
                  imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            {/* Thumbnail strip (if multiple images) */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveImage(idx);
                      setImageLoaded(false);
                    }}
                    className={`relative w-20 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === idx
                        ? "border-[#2C2420] shadow-md"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product details */}
          <div className="flex flex-col lg:pt-4">
            {/* Code badge */}
            <span className="inline-flex self-start px-3 py-1 rounded-full bg-[#F0EBE3] text-xs font-bold text-[#2C2420] tracking-wider mb-4">
              {product.code}
            </span>

            {/* Name */}
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2C2420] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {product.name}
            </h1>

            {/* Fabric & Color */}
            <div className="flex items-center gap-3 mt-4">
              <span className="text-sm text-[#8B7D6B]">{product.fabric}</span>
              <span className="w-1 h-1 rounded-full bg-[#C4956A]" />
              <span className="text-sm text-[#8B7D6B]">{product.color}</span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#6B5E50] leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Set info card */}
            <div className="mt-8 p-5 rounded-2xl bg-white border border-[#E8E0D4] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#F0EBE3] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#C4956A]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2C2420]">Wholesale Set</p>
                  <p className="text-xs text-[#A69882]">{product.setInfo}</p>
                </div>
              </div>
              <div className="flex gap-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <span
                    key={size}
                    className="flex-1 py-2 rounded-lg bg-[#FAF7F2] border border-[#E8E0D4] text-center text-xs font-semibold text-[#2C2420]"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Category */}
            <div className="mt-6 flex items-center gap-2">
              <span className="text-xs text-[#A69882] uppercase tracking-wider">Category:</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#F0EBE3] text-xs font-medium text-[#8B7D6B] capitalize">
                {product.category === "kurti" ? "Kurti Set" : "Suit Set"}
              </span>
            </div>

            {/* Spacer for desktop */}
            <div className="hidden lg:block flex-1 min-h-8" />

            {/* Desktop action buttons */}
            <div className="hidden lg:flex gap-3 mt-8">
              <button
                onClick={handleEnquire}
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20BD5A] transition-all duration-300 active:scale-[0.98] shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enquire on WhatsApp
              </button>
              <button
                onClick={handleCartToggle}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-[0.98] border-2 ${
                  inCart
                    ? "bg-[#2C2420] text-white border-[#2C2420]"
                    : "bg-transparent text-[#2C2420] border-[#2C2420] hover:bg-[#2C2420] hover:text-white"
                }`}
              >
                {inCart ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Added to Bulk Order
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add to Bulk Order
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky bottom buttons */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-xl border-t border-[#E8E0D4] px-4 py-3 safe-bottom">
        <div className="flex gap-3 max-w-lg mx-auto">
          <button
            onClick={handleEnquire}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm active:scale-[0.97] shadow-lg shadow-[#25D366]/20"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enquire
          </button>
          <button
            onClick={handleCartToggle}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm active:scale-[0.97] border-2 transition-all duration-300 ${
              inCart
                ? "bg-[#2C2420] text-white border-[#2C2420]"
                : "bg-transparent text-[#2C2420] border-[#2C2420]"
            }`}
          >
            {inCart ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Added
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Bulk Order
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

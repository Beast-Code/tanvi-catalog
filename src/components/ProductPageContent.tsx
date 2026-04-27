"use client";

import Image from "next/image";
import Link from "next/link"; // ✅ ADDED
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

        {/* ✅ FIXED BACK BUTTON */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#8B7D6B] hover:text-[#2C2420] transition-colors duration-200 mb-6"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          {/* IMAGE SECTION */}
          <div className="space-y-4">
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
                className={`object-cover transition-all duration-500 ${imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveImage(idx);
                      setImageLoaded(false);
                    }}
                    className={`relative w-20 h-24 rounded-xl overflow-hidden border-2 ${activeImage === idx
                        ? "border-[#2C2420]"
                        : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* DETAILS */}
          <div className="flex flex-col lg:pt-4">

            <span className="px-3 py-1 bg-[#F0EBE3] text-xs font-bold mb-4">
              {product.code}
            </span>

            <h1 className="text-3xl font-semibold">{product.name}</h1>

            <p className="mt-4 text-[#6B5E50]">{product.description}</p>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-3">
              <button
                onClick={handleEnquire}
                className="flex-1 py-3 bg-[#25D366] text-white rounded-xl"
              >
                Enquire on WhatsApp
              </button>

              <button
                onClick={handleCartToggle}
                className="flex-1 py-3 border-2 border-black rounded-xl"
              >
                {inCart ? "Added" : "Add to Order"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
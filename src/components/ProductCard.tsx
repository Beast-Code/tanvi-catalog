"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { addItem, removeItem, isInCart } = useCart();
  const inCart = isInCart(product.id);

  const handleCartToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inCart) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-[#F0EBE3] aspect-[3/4] mb-3">
        {/* Skeleton shimmer */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#F0EBE3] via-[#FAF7F2] to-[#F0EBE3] animate-shimmer" />
        )}

        {/* Product image */}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={`object-cover transition-all duration-700 group-hover:scale-105 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />

        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Cart toggle button */}
        <button
          onClick={handleCartToggle}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 active:scale-90 shadow-lg ${
            inCart
              ? "bg-[#2C2420] text-white"
              : "bg-white/90 backdrop-blur-sm text-[#2C2420] opacity-0 group-hover:opacity-100"
          }`}
          aria-label={inCart ? "Remove from bulk order" : "Add to bulk order"}
        >
          {inCart ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          )}
        </button>

        {/* Product code pill */}
        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#2C2420] tracking-wider shadow-sm">
          {product.code}
        </div>
      </div>

      {/* Product info */}
      <div className="px-1">
        <h3 className="text-sm sm:text-base font-medium text-[#2C2420] leading-snug group-hover:text-[#8B7D6B] transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-xs text-[#A69882] mt-0.5">{product.setInfo}</p>
      </div>
    </Link>
  );
}

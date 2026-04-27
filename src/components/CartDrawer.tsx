"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, clearCart } = useCart();

  const whatsappNumber = "919106642524";

  const sendBulkOrder = () => {
    if (items.length === 0) return;

    let message = "Hi, I'd like to place a bulk order for the following products:\n\n";
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name}\n   Code: ${item.product.code}\n   ${item.product.setInfo}\n\n`;
    });
    message += "Please share availability and pricing.\nThank you!";

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-[#FAF7F2] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E0D4]">
            <div>
              <h2
                className="text-lg font-semibold text-[#2C2420]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Bulk Order
              </h2>
              <p className="text-xs text-[#A69882] mt-0.5">
                {items.length} {items.length === 1 ? "product" : "products"} selected
              </p>
            </div>
            <button
              onClick={closeCart}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#E8E0D4] transition-colors duration-200"
              aria-label="Close cart"
            >
              <svg className="w-5 h-5 text-[#2C2420]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-20 h-20 rounded-full bg-[#F0EBE3] flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#C4956A]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-[#2C2420]">No products selected</p>
                <p className="text-xs text-[#A69882] mt-1 max-w-[200px]">
                  Browse the catalog and tap + to add products to your bulk order.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white border border-[#E8E0D4]/50 shadow-sm animate-[fadeUp_0.3s_ease]"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-16 h-20 rounded-lg overflow-hidden bg-[#F0EBE3] flex-shrink-0">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#2C2420] truncate">
                        {item.product.name}
                      </p>
                      <p className="text-xs font-semibold text-[#8B7D6B] mt-0.5">
                        {item.product.code}
                      </p>
                      <p className="text-[10px] text-[#A69882] mt-0.5">
                        {item.product.setInfo}
                      </p>
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[#A69882] hover:text-red-500 hover:bg-red-50 transition-all duration-200 flex-shrink-0"
                      aria-label={`Remove ${item.product.name}`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer actions */}
          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-[#E8E0D4] space-y-3">
              <button
                onClick={sendBulkOrder}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20BD5A] transition-all duration-300 active:scale-[0.98] shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send Order on WhatsApp
              </button>
              <button
                onClick={clearCart}
                className="w-full py-2.5 rounded-xl text-sm text-[#A69882] hover:text-[#2C2420] hover:bg-[#F0EBE3] transition-all duration-200"
              >
                Clear All
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

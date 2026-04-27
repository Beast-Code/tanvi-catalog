import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-20 h-20 rounded-full bg-[#F0EBE3] flex items-center justify-center mb-6">
        <svg
          className="w-8 h-8 text-[#C4956A]"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
      </div>
      <h1
        className="text-2xl sm:text-3xl font-semibold text-[#2C2420] mb-2"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Product Not Found
      </h1>
      <p className="text-sm text-[#8B7D6B] mb-8 max-w-md">
        The product you&apos;re looking for doesn&apos;t exist or has been removed from the catalog.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2C2420] text-[#FAF7F2] text-sm font-medium hover:bg-[#3D332D] transition-all duration-300 active:scale-95"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Back to Catalog
      </Link>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[120px] font-black gold-text leading-none mb-4">404</p>
        <h1 className="text-white font-bold text-2xl mb-3">Page Not Found</h1>
        <p className="text-white/45 text-sm mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gold text-black font-bold text-sm hover:bg-gold-light transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

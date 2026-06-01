export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-silver/60 text-sm">
        <div className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Sobin B Mathew. All rights reserved.
        </div>
        <div className="font-medium">
          Designed and Engineered by Sobin B Mathew
        </div>
      </div>
    </footer>
  );
}

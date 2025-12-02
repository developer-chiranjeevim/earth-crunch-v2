
export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
           
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div>
              <img src="/logo.png" alt="header logo image" className="w-auto h-[8rem]" />
            </div>
           
          </button>
        </div>
      </div>
    </header>
  );
}
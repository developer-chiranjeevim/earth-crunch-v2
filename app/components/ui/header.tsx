import { Search, Menu } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';



interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
           
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="text-2xl text-[#03120e]" style={{ fontFamily: 'Georgia, serif' }}>
              Earth Curnch
            </div>
           
          </button>


          {/* Search and Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search snacks..." 
                  className="pl-10 w-64 border-gray-200 focus:border-[#26413c]"
                />
              </div>
            </div>
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="w-5 h-5 text-[#3e505b]" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
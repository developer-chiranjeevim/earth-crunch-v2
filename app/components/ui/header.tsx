import {Menu} from 'lucide-react';
import { Button } from './button';


interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <button 
           
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="">
              <img src="/logo.png" alt="Navbar Logo Image" className="h-[8rem] w-auto" />
            </div>
            
          </button>

         

          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="w-5 h-5 text-[#3e505b]" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
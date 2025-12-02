import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#03120e] to-[#1a1d1a] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-[#26413c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl" style={{ fontFamily: 'Georgia, serif' }}>
              Stay Updated with Our Latest Flavors
            </h3>
            <p className="text-[#8ab0ab] max-w-md mx-auto">
              Get exclusive offers, new product launches, and traditional recipes directly to your inbox
            </p>
            <div className="flex max-w-md mx-auto gap-2">
              <Input 
                placeholder="Enter your email address"
                className="bg-white/10 border-[#26413c] text-white placeholder:text-[#8ab0ab]"
              />
              <Button className="bg-[#26413c] hover:bg-[#3e505b] text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl text-[#8ab0ab]" style={{ fontFamily: 'Georgia, serif' }}>
              Earth Crunch
            </h3>
            <p className="text-[#8ab0ab] text-sm leading-relaxed">
              Preserving the authentic taste of South Indian traditions since 1952. 
              Every bite tells a story of heritage, quality, and passion.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-[#26413c] hover:bg-[#3e505b] p-2 rounded-full transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg text-[#8ab0ab]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                "About Us",
                "Our Products", 
                "Quality Promise",
                "Bulk Orders",
                "Franchise",
                "Blog & Recipes"
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-[#b5cfc9] hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="text-lg text-[#8ab0ab]">Customer Care</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Contact Us",
                "Track Your Order",
                "Shipping Info",
                "Return Policy", 
                "FAQ",
                "Size Guide"
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-[#b5cfc9] hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg text-[#8ab0ab]">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#3e505b] mt-0.5 flex-shrink-0" />
                <div className="text-[#b5cfc9]">
                  <div>Earth Crunch</div>
                  <div>Madurai, Tamil Nadu 625001</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#3e505b] flex-shrink-0" />
                <a href="tel:+919876543210" className="text-[#b5cfc9] hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#3e505b] flex-shrink-0" />
                <a href="mailto:hello@heritagesnacks.com" className="text-[#b5cfc9] hover:text-white transition-colors">
                  hello@earthcrunch.com
                </a>
              </div>
            </div>
            <div className="text-xs text-[#8ab0ab]">
              <div>Mon - Sat: 9:00 AM - 7:00 PM</div>
              <div>Sunday: 10:00 AM - 5:00 PM</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#26413c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#8ab0ab]">
            <div>
              © 2024 Earth Crunch Snacks. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

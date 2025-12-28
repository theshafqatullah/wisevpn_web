import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: {
    template: '%s | WiseVPN',
    default: 'WiseVPN - Secure, Private, and Fast VPN Service',
  },
  description: 'Protect your privacy with WiseVPN. WireGuard® protocol, no-logs policy, and servers in 75+ countries powered by DigitalOcean.',
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <Image 
                  src="/logo.svg" 
                  alt="WiseVPN Logo" 
                  width={120} 
                  height={32}
                  className="h-8 w-auto"
                  priority
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/features" className="text-gray-700 hover:text-[#671EE5] transition-colors font-medium">
                Features
              </a>
              <a href="/pricing" className="text-gray-700 hover:text-[#671EE5] transition-colors font-medium">
                Pricing
              </a>
              <a href="/about" className="text-gray-700 hover:text-[#671EE5] transition-colors font-medium">
                About
              </a>
              <a href="/faq" className="text-gray-700 hover:text-[#671EE5] transition-colors font-medium">
                FAQ
              </a>
              <a href="/contact" className="text-gray-700 hover:text-[#671EE5] transition-colors font-medium">
                Contact
              </a>
              <a href="/pricing" className="bg-[#671EE5] hover:bg-[#5018B8] text-white px-6 py-2 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-[#671EE5]/30">
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-700 hover:text-[#671EE5]"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#211732] to-[#671EE5] text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1">
              <div className="mb-4">
                <Image 
                  src="/logo.svg" 
                  alt="WiseVPN Logo" 
                  width={140} 
                  height={35}
                  className="h-9 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-white/80 text-sm">
                Secure, private, and fast VPN service powered by WireGuard® protocol, protecting millions worldwide.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/features" className="text-white/70 hover:text-white transition-colors">Features</a>
                </li>
                <li>
                  <a href="/pricing" className="text-white/70 hover:text-white transition-colors">Pricing</a>
                </li>
                <li>
                  <a href="/about" className="text-white/70 hover:text-white transition-colors">About Us</a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/faq" className="text-white/70 hover:text-white transition-colors">FAQ</a>
                </li>
                <li>
                  <a href="/contact" className="text-white/70 hover:text-white transition-colors">Contact Us</a>
                </li>
                <li>
                  <a href="/verify" className="text-white/70 hover:text-white transition-colors">Verify Email</a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms" className="text-white/70 hover:text-white transition-colors">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} WiseVPN. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

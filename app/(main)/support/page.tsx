import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support | WiseVPN',
  description: 'Get support for WiseVPN. Find answers to your questions, contact our support team, and access helpful resources.',
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3EBFF] to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Support Center
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help you get the most out of WiseVPN
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Email Support */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-[#671EE5] rounded-lg mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Email Support
            </h2>
            <p className="text-gray-600 mb-4">
              Send us an email and we'll respond within 24 hours
            </p>
            <a 
              href="mailto:support@wisevpn.app" 
              className="text-[#671EE5] hover:underline font-medium"
            >
              support@wisevpn.app
            </a>
          </div>

          {/* Live Chat */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-[#671EE5] rounded-lg mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Live Chat
            </h2>
            <p className="text-gray-600 mb-4">
              Chat with our support team in real-time
            </p>
            <button className="text-[#671EE5] hover:underline font-medium">
              Start Chat →
            </button>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-[#671EE5] rounded-lg mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              FAQ
            </h2>
            <p className="text-gray-600 mb-4">
              Find quick answers to common questions
            </p>
            <a 
              href="/faq" 
              className="text-[#671EE5] hover:underline font-medium"
            >
              Browse FAQ →
            </a>
          </div>
        </div>

        {/* Support Resources */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Quick Help Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Getting Started */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-[#671EE5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Getting Started
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#671EE5] mr-2">•</span>
                  <a href="/faq" className="hover:text-[#671EE5]">How to download and install WiseVPN</a>
                </li>
                <li className="flex items-start">
                  <span className="text-[#671EE5] mr-2">•</span>
                  <a href="/faq" className="hover:text-[#671EE5]">Creating your account</a>
                </li>
                <li className="flex items-start">
                  <span className="text-[#671EE5] mr-2">•</span>
                  <a href="/faq" className="hover:text-[#671EE5]">Connecting to a VPN server</a>
                </li>
                <li className="flex items-start">
                  <span className="text-[#671EE5] mr-2">•</span>
                  <a href="/faq" className="hover:text-[#671EE5]">Choosing the best server location</a>
                </li>
              </ul>
            </div>

            {/* Troubleshooting */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-[#671EE5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Troubleshooting
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#671EE5] mr-2">•</span>
                  <a href="/faq" className="hover:text-[#671EE5]">Connection issues</a>
                </li>
                <li className="flex items-start">
                  <span className="text-[#671EE5] mr-2">•</span>
                  <a href="/faq" className="hover:text-[#671EE5]">Slow connection speeds</a>
                </li>
                <li className="flex items-start">
                  <span className="text-[#671EE5] mr-2">•</span>
                  <a href="/faq" className="hover:text-[#671EE5]">App not launching</a>
                </li>
                <li className="flex items-start">
                  <span className="text-[#671EE5] mr-2">•</span>
                  <a href="/faq" className="hover:text-[#671EE5]">Login problems</a>
                </li>
              </ul>
            </div>

            {/* Account & Billing */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-[#671EE5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Account & Billing
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#671EE5] mr-2">•</span>
                  <a href="/pricing" className="hover:text-[#671EE5]">View pricing plans</a>
                </li>
                <li className="flex items-start">
                  <span className="text-[#671EE5] mr-2">•</span>
                  <a href="/reset-password" className="hover:text-[#671EE5]">Reset your password</a>
                </li>
                <li className="flex items-start">
                  <span className="text-[#671EE5] mr-2">•</span>
                  <a href="/delete-account" className="hover:text-[#671EE5]">Delete your account</a>
                </li>
                <li className="flex items-start">
                  <span className="text-[#671EE5] mr-2">•</span>
                  <a href="/faq" className="hover:text-[#671EE5]">Manage subscription</a>
                </li>
              </ul>
            </div>

            {/* Privacy & Security */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-[#671EE5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Privacy & Security
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#671EE5] mr-2">•</span>
                  <a href="/privacy" className="hover:text-[#671EE5]">Privacy Policy</a>
                </li>
                <li className="flex items-start">
                  <span className="text-[#671EE5] mr-2">•</span>
                  <a href="/data-privacy" className="hover:text-[#671EE5]">Data Privacy</a>
                </li>
                <li className="flex items-start">
                  <span className="text-[#671EE5] mr-2">•</span>
                  <a href="/about" className="hover:text-[#671EE5]">Our no-logs policy</a>
                </li>
                <li className="flex items-start">
                  <span className="text-[#671EE5] mr-2">•</span>
                  <a href="/features" className="hover:text-[#671EE5]">Security features</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-[#671EE5] to-[#8B4CFF] rounded-2xl shadow-xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Contact Details
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">Support Email</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:support@wisevpn.app" className="hover:underline">
                    support@wisevpn.app
                  </a>
                </p>
                <p className="text-sm opacity-90 ml-7">
                  For technical support and general inquiries
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Business Inquiries</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:business@wisevpn.app" className="hover:underline">
                    business@wisevpn.app
                  </a>
                </p>
                <p className="text-sm opacity-90 ml-7">
                  For partnerships and business opportunities
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Response Time</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Within 24 hours
                </p>
                <p className="text-sm opacity-90 ml-7">
                  Most emails are answered within a few hours
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Support Hours</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  24/7 Availability
                </p>
                <p className="text-sm opacity-90 ml-7">
                  Our team is available around the clock
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-lg mb-2">
              Can't find what you're looking for?
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-[#671EE5] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Directly
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

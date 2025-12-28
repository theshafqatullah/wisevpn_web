import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Plans | WiseVPN',
  description: 'Choose the perfect WiseVPN plan for you. Secure, fast, and reliable VPN service with flexible pricing options.',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3EBFF] to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Choose the plan that fits your needs. All plans include our full feature set.
          </p>
          <div className="inline-flex items-center gap-3 bg-green-50 border-2 border-green-500 rounded-xl px-6 py-3 shadow-lg mb-4">
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-bold text-green-900 text-lg">All Plans: 100% Strict No-Logs Policy</span>
          </div>
          <div className="mt-4 inline-flex items-center bg-[#F3EBFF] text-[#671EE5] px-4 py-2 rounded-full">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            30-Day Money Back Guarantee
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Monthly Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Monthly</h3>
              <p className="text-gray-600 mt-2">Perfect for trying out WiseVPN</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">$12.99</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">Billed monthly</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Unlimited bandwidth</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Access to 75+ countries</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">5 simultaneous devices</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">24/7 customer support</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 font-semibold">100% strict no-logs policy</span>
              </li>
            </ul>

            <button className="w-full bg-[#671EE5] hover:bg-[#5018B8] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Get Started
            </button>
          </div>

          {/* Annual Plan - Popular */}
          <div className="bg-gradient-to-br from-[#671EE5] to-[#8B4CFF] rounded-2xl shadow-2xl p-8 relative transform scale-105">
            <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-2xl">
              MOST POPULAR
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white">Annual</h3>
              <p className="text-purple-100 mt-2">Save 54% with annual billing</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-white">$5.99</span>
                <span className="text-purple-100 ml-2">/month</span>
              </div>
              <p className="text-sm text-purple-100 mt-2">$71.88 billed annually</p>
              <div className="inline-block mt-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">
                Save $84/year
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-300 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Unlimited bandwidth</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-300 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Access to 75+ countries</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-300 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white">10 simultaneous devices</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-300 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Priority customer support</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-300 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-bold">100% strict no-logs policy</span>
              </li>
            </ul>

            <button className="w-full bg-white hover:bg-gray-100 text-[#671EE5] font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Get Started
            </button>
          </div>

          {/* 2-Year Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">2-Year Plan</h3>
              <p className="text-gray-600 mt-2">Best value for long-term users</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">$3.99</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">$95.76 billed every 2 years</p>
              <div className="inline-block mt-2 bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
                Save 69%
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Unlimited bandwidth</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Access to 75+ countries</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">10 simultaneous devices</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Priority customer support</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 font-semibold">100% strict no-logs policy</span>
              </li>
            </ul>

            <button className="w-full bg-[#671EE5] hover:bg-[#5018B8] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            All Plans Include
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F3EBFF] text-[#671EE5] mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Military-Grade Encryption</h3>
              <p className="text-gray-600 text-sm">AES-256 encryption to keep your data secure</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F3EBFF] text-[#671EE5] mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast Speeds</h3>
              <p className="text-gray-600 text-sm">Optimized servers for maximum performance</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">100% No-Logs Policy</h3>
              <p className="text-gray-600 text-sm">Guaranteed zero tracking or storage of your online activity</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="text-center">
          <p className="text-gray-600">
            Have questions? Check out our{' '}
            <a href="/faq" className="text-[#671EE5] hover:underline font-medium">
              FAQ page
            </a>
            {' '}or{' '}
            <a href="/contact" className="text-[#671EE5] hover:underline font-medium">
              contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

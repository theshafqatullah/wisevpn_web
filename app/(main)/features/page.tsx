import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features | WiseVPN',
  description: 'Discover all the powerful features that make WiseVPN the best choice for your online privacy and security.',
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3EBFF] to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to stay safe, private, and unrestricted online.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#F3EBFF] text-[#671EE5] mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              WireGuard® Protocol
            </h3>
            <p className="text-gray-600">
              We exclusively use WireGuard, the most advanced VPN protocol with ChaCha20 encryption, ~4,000 lines of auditable code, and speeds up to 4x faster than traditional protocols.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-white mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">GUARANTEED</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              100% Strict No-Logs Policy
            </h3>
            <p className="text-gray-900 font-semibold mb-2">
              Absolutely ZERO activity tracking. Period.
            </p>
            <p className="text-gray-700">
              We don't track, collect, or store ANY logs of your online activity — no browsing history, no connection logs, no traffic data, no DNS queries. Our infrastructure is designed to make logging impossible. What you do online is your business only.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#F3EBFF] text-[#671EE5] mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Lightning-Fast Speeds
            </h3>
            <p className="text-gray-600">
              WireGuard protocol on DigitalOcean's premium infrastructure delivers blazing speeds with unlimited bandwidth. ICMP ping testing helps you find the fastest server.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 text-yellow-600 mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              75+ Countries
            </h3>
            <p className="text-gray-600">
              Access our global network of 2000+ servers across 75+ countries for true worldwide coverage.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-100 text-red-600 mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Kill Switch
            </h3>
            <p className="text-gray-600">
              Automatically blocks internet traffic if your VPN connection drops, ensuring your data never leaks.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 text-indigo-600 mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Multi-Device Support
            </h3>
            <p className="text-gray-600">
              Protect up to 10 devices simultaneously on Windows, Mac, iOS, Android, Linux, and more.
            </p>
          </div>

          {/* Feature 7 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pink-100 text-pink-600 mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Split Tunneling
            </h3>
            <p className="text-gray-600">
              Choose which apps and websites use the VPN, giving you complete control over your connection.
            </p>
          </div>

          {/* Feature 8 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal-100 text-teal-600 mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              DNS Leak Protection
            </h3>
            <p className="text-gray-600">
              Advanced DNS leak protection ensures your DNS queries remain private and secure at all times.
            </p>
          </div>

          {/* Feature 9 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 text-orange-600 mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              24/7 Customer Support
            </h3>
            <p className="text-gray-600">
              Our expert support team is available around the clock via live chat and email to help you.
            </p>
          </div>
        </div>

        {/* WireGuard Protocol Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              WireGuard® - The Future of VPN Technology
            </h2>
            <p className="text-lg text-gray-600">
              We exclusively use WireGuard, the most advanced and secure VPN protocol available
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why WireGuard?</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Modern Cryptography:</strong> ChaCha20 for encryption, Poly1305 for authentication, Curve25519 for key exchange, BLAKE2s for hashing
                  </div>
                </li>
                <li className="flex items-start text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Minimal Codebase:</strong> ~4,000 lines of code vs OpenVPN's 400,000+ lines - easier to audit, fewer vulnerabilities
                  </div>
                </li>
                <li className="flex items-start text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Blazing Speed:</strong> Up to 4x faster than traditional VPN protocols like OpenVPN and IPSec
                  </div>
                </li>
                <li className="flex items-start text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Perfect Forward Secrecy:</strong> Unique encryption keys for each session - past communications stay secure even if keys are compromised
                  </div>
                </li>
                <li className="flex items-start text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Open Source & Audited:</strong> Independently reviewed by security experts and peer-reviewed research
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Powered by DigitalOcean</h3>
              <p className="text-gray-700 mb-4">
                Our WireGuard VPN servers run on <strong>DigitalOcean's premium cloud infrastructure</strong>, providing:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[#671EE5] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>99.9% Uptime</strong> SLA guarantee</span>
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Enterprise-grade <strong>physical security</strong></span>
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Global data centers</strong> in 75+ countries</span>
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>High-performance networking</strong> with unlimited bandwidth</span>
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Secure account management via <strong>Appwrite</strong> backend</span>
                </li>
              </ul>
              <div className="mt-6 bg-[#F3EBFF] rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>🚀 Speed Testing:</strong> Our app uses ICMP ping tests (Google Play compliant) to help you find the fastest server for your location in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Ad-Free Experience */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 md:p-12 mb-16 border-2 border-green-200">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ✨ Premium: Completely Ad-Free Experience
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Upgrade to any Premium plan and enjoy WiseVPN without any advertisements
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">🆓</span>
                Free Plan
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>Shows advertisements (Google AdMob)</span>
                </li>
                <li className="flex items-start text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>WireGuard protocol included</span>
                </li>
                <li className="flex items-start text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>Limited server selection</span>
                </li>
                <li className="flex items-start text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>Standard speeds</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#671EE5] to-[#8B4CFF] rounded-xl p-6 shadow-lg text-white">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">🌟</span>
                Premium Plans
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>100% Ad-Free</strong> - No advertisements, ever</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>All 2000+ servers in 75+ countries</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Unlimited bandwidth & fastest speeds</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Priority customer support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Connect up to 10 devices simultaneously</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Streaming-optimized servers</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-blue-100">
                  💡 <strong>Privacy Note:</strong> Premium users' data is never shared with advertising partners. Your advertising ID is not collected.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Streaming & Privacy */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#671EE5] to-[#8B4CFF] rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Streaming Optimized</h2>
            <p className="mb-6 text-purple-100">
              Access your favorite content from anywhere in the world with our streaming-optimized servers.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Netflix, Hulu, Disney+</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Amazon Prime, HBO Max</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>BBC iPlayer, ITV Hub</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#5018B8] to-[#671EE5] rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">P2P & Torrenting</h2>
            <p className="mb-6 text-purple-100">
              Dedicated P2P servers for fast, secure, and private file sharing.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Unlimited P2P traffic</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>No bandwidth throttling</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>SOCKS5 proxy support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get started with WiseVPN today and enjoy all these powerful features.
          </p>
          <a
            href="/pricing"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#671EE5] hover:bg-[#5018B8] text-white font-semibold rounded-lg transition-colors duration-200"
          >
            View Pricing Plans
          </a>
        </div>
      </div>
    </div>
  );
}

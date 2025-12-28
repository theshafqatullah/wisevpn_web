import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | WiseVPN',
  description: 'Frequently asked questions about WiseVPN. Find answers to common questions about our VPN service.',
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3EBFF] to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about WiseVPN
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full px-6 py-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#671EE5] focus:border-transparent bg-white text-gray-900"
            />
            <svg
              className="absolute right-4 top-4 w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {/* Getting Started */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <svg className="w-7 h-7 mr-3 text-[#671EE5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Getting Started
            </h2>
            <div className="space-y-4">
              <details className="group bg-white rounded-lg shadow-md">
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-900">What is a VPN and why do I need one?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-600 dark:text-gray-400">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 dark:text-gray-400 px-6 pb-6 pt-2">
                  A VPN (Virtual Private Network) creates a secure, encrypted tunnel between your device and the internet. You need a VPN to protect your privacy, secure your data on public WiFi, access geo-restricted content, and prevent ISPs and advertisers from tracking your online activity.
                </p>
              </details>

              <details className="group bg-white rounded-lg shadow-md">
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-900">How do I set up WiseVPN?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-600">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="text-gray-600 px-6 pb-6 pt-2">
                  <p className="mb-3">Setting up WiseVPN is easy:</p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Create an account and choose a subscription plan</li>
                    <li>Download the WiseVPN app for your device</li>
                    <li>Install and log in with your credentials</li>
                    <li>Click "Connect" to start protecting your connection</li>
                  </ol>
                </div>
              </details>

              <details className="group bg-white rounded-lg shadow-md">
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-900">Which devices are supported?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-600">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 px-6 pb-6 pt-2">
                  WiseVPN supports Windows, macOS, iOS, Android, Linux, routers, and browser extensions for Chrome and Firefox. You can use WiseVPN on up to 10 devices simultaneously with a single subscription.
                </p>
              </details>
            </div>
          </section>

          {/* Privacy & Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <svg className="w-7 h-7 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Privacy & Security
            </h2>
            <div className="space-y-4">
              <details className="group bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-lg shadow-md">
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 hover:bg-green-100 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-bold text-gray-900">Does WiseVPN keep logs? (100% NO-LOGS GUARANTEE)</span>
                  </div>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-600">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2">
                  <div className="bg-white rounded-lg p-4 mb-3">
                    <p className="text-gray-900 font-bold text-lg mb-2">✅ Absolutely NO. We have a VERIFIED 100% strict no-logs policy.</p>
                    <p className="text-gray-700 mb-3">
                      WiseVPN operates under an absolute, auditable zero-logs policy. We do NOT track, collect, or store ANY logs of your online activity:
                    </p>
                    <ul className="list-none text-gray-800 space-y-1 mb-3">
                      <li>✗ <strong>Zero browsing history</strong> — We never see what websites you visit</li>
                      <li>✗ <strong>Zero traffic data</strong> — We never inspect packet contents</li>
                      <li>✗ <strong>Zero IP addresses</strong> — Neither your real IP nor VPN IP is logged</li>
                      <li>✗ <strong>Zero DNS queries</strong> — We don't track domain lookups</li>
                      <li>✗ <strong>Zero connection logs</strong> — We don't track session timestamps</li>
                      <li>✗ <strong>Zero bandwidth patterns</strong> — We don't monitor usage</li>
                    </ul>
                    <p className="text-green-800 font-semibold text-sm">
                      Our infrastructure is designed to make logging technically impossible. When law enforcement requests data, we have nothing to provide — because we never collected it.
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm">
                    We only collect minimal information needed for account management (email and payment info processed by third parties).
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-lg shadow-md">
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-900">What encryption and protocol does WiseVPN use?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-600">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="text-gray-600 px-6 pb-6 pt-2">
                  <p className="mb-3">
                    WiseVPN exclusively uses <strong>WireGuard®</strong>, the most modern and secure VPN protocol available. WireGuard provides:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>ChaCha20 encryption</strong> - Superior security and performance</li>
                    <li><strong>Minimal codebase</strong> - ~4,000 lines vs OpenVPN's 400,000+ (easier to audit, fewer vulnerabilities)</li>
                    <li><strong>Lightning-fast speeds</strong> - Up to 4x faster than traditional protocols</li>
                    <li><strong>Perfect Forward Secrecy</strong> - Each session uses unique encryption keys</li>
                    <li><strong>Independently audited</strong> - Open-source and peer-reviewed by security experts</li>
                  </ul>
                  <p className="mt-3">
                    Our WireGuard implementation is hosted on secure DigitalOcean infrastructure for maximum reliability and performance.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-lg shadow-md">
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-900">Can my ISP see what I'm doing with a VPN?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-600">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 px-6 pb-6 pt-2">
                  No. When you're connected to WiseVPN, your ISP can only see that you're connected to a VPN server. They cannot see which websites you visit, what you download, or any of your online activities. All your traffic is encrypted and routed through our secure servers.
                </p>
              </details>

              <details className="group bg-white rounded-lg shadow-md">
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-900">What is a kill switch?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-600">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 px-6 pb-6 pt-2">
                  A kill switch is a safety feature that automatically blocks all internet traffic if your VPN connection drops unexpectedly. This prevents your real IP address and data from being exposed during connection interruptions. WiseVPN includes an automatic kill switch on all supported platforms.
                </p>
              </details>
            </div>
          </section>

          {/* Billing & Subscriptions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <svg className="w-7 h-7 mr-3 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Billing & Subscriptions
            </h2>
            <div className="space-y-4">
              <details className="group bg-white rounded-lg shadow-md">
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-900">What payment methods do you accept?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-600">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 px-6 pb-6 pt-2">
                  We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and cryptocurrency (Bitcoin, Ethereum). All payments are processed securely through our encrypted payment gateway.
                </p>
              </details>

              <details className="group bg-white rounded-lg shadow-md">
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-900">Do you offer a money-back guarantee?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-600">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 px-6 pb-6 pt-2">
                  Yes! We offer a 30-day money-back guarantee for all first-time subscriptions. If you're not satisfied with our service, simply contact our support team within 30 days of your initial purchase for a full refund.
                </p>
              </details>

              <details className="group bg-white rounded-lg shadow-md">
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-900">How do I cancel my subscription?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-600">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 px-6 pb-6 pt-2">
                  You can cancel your subscription at any time from your account dashboard. Go to Settings {'>'} Subscription {'>'} Cancel Auto-Renewal. Your service will remain active until the end of your current billing period.
                </p>
              </details>

              <details className="group bg-white rounded-lg shadow-md">
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-900">Do subscriptions auto-renew?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-600">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 px-6 pb-6 pt-2">
                  Yes, all subscriptions automatically renew at the end of each billing period to ensure uninterrupted service. You'll be notified before each renewal and can cancel auto-renewal at any time from your account settings.
                </p>
              </details>

              <details className="group bg-white rounded-lg shadow-md">
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-900">Is there a free plan? Will I see ads?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-600 dark:text-gray-400">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="text-gray-600 dark:text-gray-400 px-6 pb-6 pt-2">
                  <p className="mb-3">
                    Yes, WiseVPN offers a free plan with limited features. Here's what you need to know:
                  </p>
                  <div className="bg-[#F3EBFF] rounded-lg p-4 mb-3">
                    <p className="font-semibold text-gray-900 mb-2">Free Plan:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Shows advertisements (Google AdMob)</li>
                      <li>Limited server selection</li>
                      <li>Standard speed</li>
                      <li>WireGuard protocol included</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">Premium Plans (Monthly/Annual/2-Year):</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li><strong>✨ Completely ad-free</strong> - No advertisements ever</li>
                      <li>Access to all 2000+ servers in 75+ countries</li>
                      <li>Fastest servers with unlimited bandwidth</li>
                      <li>Priority customer support</li>
                      <li>Connect up to 10 devices simultaneously</li>
                    </ul>
                  </div>
                  <p className="mt-3 font-medium">
                    💡 Upgrade to any Premium plan to remove all ads and unlock the full WiseVPN experience!
                  </p>
                </div>
              </details>
            </div>
          </section>

          {/* Technical Questions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <svg className="w-7 h-7 mr-3 text-[#671EE5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Technical Questions
            </h2>
            <div className="space-y-4">
              <details className="group bg-white rounded-lg shadow-md">
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-900">Will WiseVPN slow down my internet?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-600">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="text-gray-600 px-6 pb-6 pt-2">
                  <p className="mb-3">
                    No! WiseVPN is designed for speed. Thanks to our use of <strong>WireGuard protocol</strong> and <strong>DigitalOcean's premium infrastructure</strong>, most users experience minimal to no speed reduction:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>WireGuard is 4x faster</strong> than traditional VPN protocols</li>
                    <li><strong>DigitalOcean servers</strong> provide enterprise-grade performance and 99.9% uptime</li>
                    <li><strong>ICMP ping testing</strong> helps you find the fastest server for your location</li>
                    <li><strong>Unlimited bandwidth</strong> on Premium plans ensures no throttling</li>
                  </ul>
                  <p className="mt-3">
                    For optimal performance, our app automatically recommends the fastest server based on real-time speed tests.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-lg shadow-md">
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-900">What technology powers WiseVPN?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-600">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="text-gray-600 px-6 pb-6 pt-2">
                  <p className="mb-3">
                    WiseVPN is built on cutting-edge, privacy-first technology:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>VPN Protocol:</strong> WireGuard® - Modern, audited, and extremely fast</li>
                    <li><strong>Server Infrastructure:</strong> DigitalOcean cloud - Enterprise security and reliability</li>
                    <li><strong>Backend Platform:</strong> Appwrite - Open-source, secure account management</li>
                    <li><strong>Speed Testing:</strong> ICMP ping to public endpoints - Compliant with Play Store policies</li>
                    <li><strong>Encryption:</strong> ChaCha20 cipher with Poly1305 authentication</li>
                    <li><strong>Advertising (Free Plan):</strong> Google AdMob - Removable with Premium upgrade</li>
                  </ul>
                  <p className="mt-3">
                    All components are chosen for security, transparency, and performance. Our open-source choices ensure you can verify our privacy claims.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-lg shadow-md">
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-900">Can I use WiseVPN for streaming and torrenting?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-600">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 px-6 pb-6 pt-2">
                  Yes! WiseVPN works with popular streaming services like Netflix, Hulu, Disney+, and more. We also support P2P/torrenting on dedicated servers with unlimited bandwidth. Our streaming-optimized servers ensure smooth, buffer-free viewing.
                </p>
              </details>

              <details className="group bg-white rounded-lg shadow-md">
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-900">How many devices can I connect simultaneously?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-600">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 px-6 pb-6 pt-2">
                  With WiseVPN, you can connect up to 10 devices simultaneously on most plans. This means you can protect your phone, laptop, tablet, and more all at the same time with a single subscription.
                </p>
              </details>

              <details className="group bg-white rounded-lg shadow-md">
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-900">What should I do if the VPN isn't connecting?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-600">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="text-gray-600 px-6 pb-6 pt-2">
                  <p className="mb-3">Try these troubleshooting steps:</p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Check your internet connection</li>
                    <li>Try a different server or protocol</li>
                    <li>Restart the WiseVPN app</li>
                    <li>Update to the latest app version</li>
                    <li>Check firewall/antivirus settings</li>
                    <li>Contact our 24/7 support if issues persist</li>
                  </ol>
                </div>
              </details>
            </div>
          </section>
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 bg-gradient-to-r from-[#671EE5] to-[#8B4CFF] rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="mb-6 text-purple-100">
            Our support team is available 24/7 to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#671EE5] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Support
            </a>
            <a
              href="mailto:support@wisevpn.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#5018B8] hover:bg-[#211732] text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

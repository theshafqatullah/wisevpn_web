import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | WiseVPN',
  description: 'Learn about WiseVPN - our mission to provide secure, private, and fast VPN service worldwide.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3EBFF] to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About WiseVPN
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to make the internet a safer, more private place for everyone.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-700 mb-4">
                At WiseVPN, we believe that online privacy is a fundamental right, not a luxury. Founded in 2020, we've been committed to providing cutting-edge security through WireGuard® protocol and a <strong className="text-green-700">verified 100% strict no-logs policy</strong> to users worldwide.
              </p>
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 mb-4">
                <p className="text-green-900 font-bold text-lg mb-1">✓ 100% No-Logs Guarantee</p>
                <p className="text-green-800 text-sm">We don't collect, store, or log ANY of your online activity. Not your browsing history, not your traffic data, not your DNS queries — absolutely nothing. This is not marketing speak — it's our technical architecture.</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our team of security experts and privacy advocates work tirelessly to ensure that your internet activity remains private and secure, no matter where you are or what device you're using. We leverage modern technology including WireGuard VPN protocol, DigitalOcean's enterprise infrastructure, and Appwrite's secure backend platform.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                We're not just another VPN provider – we're your partners in digital freedom, offering both free and premium ad-free plans to suit every need.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#671EE5] to-[#8B4CFF] rounded-xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="w-8 h-8 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Privacy First</h3>
                    <p className="text-purple-100">100% strict no-logs policy — zero activity tracking guaranteed</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-8 h-8 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Global Coverage</h3>
                    <p className="text-purple-100">Servers in 75+ countries for worldwide access</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-8 h-8 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Always Innovating</h3>
                    <p className="text-purple-100">Cutting-edge technology and regular updates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F3EBFF] text-[#671EE5] mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Security
              </h3>
              <p className="text-gray-600">
                We exclusively use WireGuard® protocol with ChaCha20 encryption and host on DigitalOcean's secure infrastructure to protect your data.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Transparency
              </h3>
              <p className="text-gray-600">
                We're open about our practices, with regular independent security audits.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F3EBFF] text-[#671EE5] mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Support
              </h3>
              <p className="text-gray-600">
                Our dedicated support team is available 24/7 to help you with any issues.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-[#671EE5] to-[#8B4CFF] rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">
            WiseVPN by the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">75+</div>
              <div className="text-purple-100">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">2000+</div>
              <div className="text-purple-100">Servers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">5M+</div>
              <div className="text-purple-100">Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-purple-100">Uptime</div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose WiseVPN?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No Bandwidth Limits
                </h3>
                <p className="text-gray-600">
                  Enjoy unlimited bandwidth with no throttling or data caps.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Multi-Platform Support
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Works on Windows, Mac, iOS, Android, Linux, and more.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Kill Switch Protection
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Automatic protection if your VPN connection drops.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Split Tunneling
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose which apps use the VPN and which don't.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  DNS Leak Protection
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Advanced DNS leak protection keeps your queries private.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  30-Day Money Back
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Risk-free trial with our money-back guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join millions of users who trust WiseVPN to protect their privacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#671EE5] hover:bg-[#5018B8] text-white font-semibold rounded-lg transition-colors duration-200"
            >
              View Pricing
            </a>
            <a
              href="/features"
              className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border border-gray-300 transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WiseVPN - Secure, Private, and Fast VPN Service',
  description: 'Protect your privacy with WiseVPN. Military-grade encryption, strict no-logs policy, and servers in 75+ countries. Get started with our 30-day money-back guarantee.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Crystal Clear Design */}
      <section className="relative bg-gradient-to-br from-[#F3EBFF] via-white to-purple-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B4CFF]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#671EE5]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <div className="text-center md:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#671EE5]/10 to-[#8B4CFF]/10 backdrop-blur-xl border border-[#671EE5]/30 rounded-full px-5 py-2.5 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-semibold bg-gradient-to-r from-[#671EE5] to-[#8B4CFF] bg-clip-text text-transparent">
                  Trusted by 5M+ users worldwide
                </span>
              </div>
              
              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="block text-gray-900 mb-2">Your Privacy,</span>
                <span className="block bg-gradient-to-r from-[#671EE5] via-[#8B4CFF] to-[#5018B8] bg-clip-text text-transparent">
                  Our Priority
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Browse securely with <span className="font-semibold text-[#671EE5]">military-grade encryption</span>. <span className="font-bold text-gray-900">100% strict no-logs policy</span> — no tracking, no compromises.
              </p>
              
              {/* No-Logs Banner */}
              <div className="inline-flex items-center gap-3 bg-green-50 border-2 border-green-500 rounded-xl px-6 py-3 shadow-lg">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-green-900 text-lg">Verified 100% No-Logs Policy</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="/pricing"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-[#671EE5] to-[#8B4CFF] rounded-xl overflow-hidden shadow-2xl hover:shadow-[#671EE5]/50 transition-all duration-300 hover:scale-105"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#5018B8] to-[#671EE5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center gap-2 text-lg">
                    Get Started Now
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
                <a
                  href="/features"
                  className="inline-flex items-center justify-center px-8 py-4 font-semibold text-gray-900 bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:border-[#671EE5] transition-all duration-300 text-lg"
                >
                  Explore Features
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>30-Day Money Back</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <div className="flex items-center justify-center w-8 h-8 bg-[#F3EBFF] rounded-full">
                    <svg className="w-5 h-5 text-[#671EE5]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>No Credit Card Required</span>
                </div>
              </div>
            </div>

            {/* Right Column - Crystal Clear Visual Card */}
            <div className="relative">
              {/* Glow Effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#671EE5]/20 to-[#8B4CFF]/20 rounded-3xl blur-2xl"></div>
              
              {/* Main Card */}
              <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 border border-gray-200/50 shadow-2xl">
                {/* Connection Status */}
                <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 mb-6 border border-green-200/50">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/50">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">Securely Connected</div>
                      <div className="text-sm text-gray-600 font-medium">🇺🇸 New York, USA</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
                    <span className="text-xs font-semibold text-green-600 mt-1">Active</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#F3EBFF] to-purple-50 rounded-2xl p-5 border border-[#671EE5]/20 hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="text-3xl font-black bg-gradient-to-r from-[#671EE5] to-[#8B4CFF] bg-clip-text text-transparent mb-1">
                      256-bit
                    </div>
                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Encryption</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="text-3xl font-black bg-gradient-to-r from-[#8B4CFF] to-pink-600 bg-clip-text text-transparent mb-1">
                      75+
                    </div>
                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Countries</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-5 border border-orange-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="text-3xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-1">
                      2000+
                    </div>
                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Servers</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-5 border border-teal-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="text-3xl font-black bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-1">
                      10
                    </div>
                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Devices</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Crystal Clear */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F3EBFF] to-[#8B4CFF]/30 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#671EE5]/20">
                <span className="text-3xl">👥</span>
              </div>
              <div className="text-4xl font-black bg-gradient-to-r from-[#671EE5] to-[#8B4CFF] bg-clip-text text-transparent mb-2">5M+</div>
              <div className="text-sm font-semibold text-gray-600">Active Users</div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/20">
                <span className="text-3xl">🌍</span>
              </div>
              <div className="text-4xl font-black bg-gradient-to-r from-[#8B4CFF] to-pink-600 bg-clip-text text-transparent mb-2">75+</div>
              <div className="text-sm font-semibold text-gray-600">Countries</div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/20">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="text-4xl font-black bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">99.9%</div>
              <div className="text-sm font-semibold text-gray-600">Uptime</div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/20">
                <span className="text-3xl">💬</span>
              </div>
              <div className="text-4xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-sm font-semibold text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Crystal Clear */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-[#F3EBFF] to-purple-100 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-bold bg-gradient-to-r from-[#671EE5] to-[#8B4CFF] bg-clip-text text-transparent">
                POWERFUL FEATURES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-[#671EE5] to-[#8B4CFF] bg-clip-text text-transparent">WiseVPN</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the ultimate online security with our cutting-edge features designed for your peace of mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-[#671EE5] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#671EE5]/5 to-[#8B4CFF]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#671EE5] to-[#8B4CFF] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#671EE5]/50 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Military-Grade Encryption</h3>
                <p className="text-gray-600 leading-relaxed">AES-256 encryption keeps your data secure from hackers and surveillance agencies worldwide.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-green-500 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/50 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strict No-Logs Policy</h3>
                <p className="text-gray-600 leading-relaxed">We don't track, collect, or share your browsing data. Your privacy is our commitment.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-[#8B4CFF] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B4CFF]/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B4CFF] to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast Speeds</h3>
                <p className="text-gray-600 leading-relaxed">Optimized servers ensure blazing-fast speeds for streaming, gaming, and browsing.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-yellow-400 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/50 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Network</h3>
                <p className="text-gray-600 leading-relaxed">Access 2000+ servers in 75+ countries for true worldwide coverage and freedom.</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-red-400 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-500/50 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kill Switch Protection</h3>
                <p className="text-gray-600 leading-relaxed">Automatic protection blocks all traffic if your VPN connection drops unexpectedly.</p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-indigo-400 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/50 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-Device Support</h3>
                <p className="text-gray-600 leading-relaxed">Protect up to 10 devices simultaneously with one account on all platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Crystal Clear */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-green-100 to-teal-100 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                SIMPLE SETUP
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Get Started in <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">3 Simple Steps</span>
            </h2>
            <p className="text-xl text-gray-600">
              Start protecting your privacy in minutes, not hours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-1 bg-gradient-to-r from-[#671EE5]/30 via-[#8B4CFF]/30 to-pink-300"></div>

            {/* Step 1 */}
            <div className="relative text-center group">
              <div className="relative inline-flex mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-[#671EE5] to-[#8B4CFF] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-[#671EE5] to-[#8B4CFF] text-white rounded-full flex items-center justify-center text-4xl font-black shadow-2xl shadow-[#671EE5]/50 group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 group-hover:border-[#671EE5] transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Plan</h3>
                <p className="text-gray-600 leading-relaxed">Select the subscription that best fits your needs and budget</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative text-center group">
              <div className="relative inline-flex mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B4CFF] to-pink-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-[#8B4CFF] to-pink-600 text-white rounded-full flex items-center justify-center text-4xl font-black shadow-2xl shadow-purple-500/50 group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 group-hover:border-[#8B4CFF] transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Download & Install</h3>
                <p className="text-gray-600 leading-relaxed">Get the app for your device in seconds with one-click installation</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative text-center group">
              <div className="relative inline-flex mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-pink-500 to-red-600 text-white rounded-full flex items-center justify-center text-4xl font-black shadow-2xl shadow-pink-500/50 group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 group-hover:border-pink-400 transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect & Browse</h3>
                <p className="text-gray-600 leading-relaxed">Click connect and enjoy secure, private, and unrestricted browsing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview - Crystal Clear */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-orange-100 to-red-100 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                FLEXIBLE PRICING
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Simple, <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Monthly Plan */}
            <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly</h3>
              <p className="text-gray-600 mb-6">Best for flexibility</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-gray-900">$4.99</span>
                <span className="text-gray-600 text-lg">/month</span>
              </div>
              <a href="/pricing" className="block w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-900 text-center py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg">
                Get Started
              </a>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">All premium features</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Cancel anytime</span>
                </li>
              </ul>
            </div>

            {/* Quarterly Plan */}
            <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Quarterly</h3>
              <p className="text-gray-600 mb-6">Best balance</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-gray-900">$4.33</span>
                <span className="text-gray-600 text-lg">/month</span>
                <div className="text-sm text-gray-600 mt-1">$12.99 every 3 months</div>
              </div>
              <a href="/pricing" className="block w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-900 text-center py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg">
                Get Started
              </a>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">All premium features</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Fewer renewals</span>
                </li>
              </ul>
            </div>

            {/* Yearly Plan - Most Popular */}
            <div className="relative bg-gradient-to-br from-[#671EE5] via-[#8B4CFF] to-pink-600 rounded-3xl p-8 shadow-2xl transform scale-105 hover:scale-110 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 text-xs font-black px-6 py-2 rounded-full shadow-lg">
                  ⭐ MOST POPULAR
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Yearly</h3>
              <p className="text-purple-100 mb-6">Best value - Save 33%</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-white">$3.33</span>
                <span className="text-purple-100 text-lg">/month</span>
                <div className="inline-block ml-3 bg-yellow-400 text-gray-900 text-xs font-black px-3 py-1 rounded-full">
                  SAVE 33%
                </div>
              </div>
              <a href="/pricing" className="block w-full bg-white hover:bg-gray-100 text-[#671EE5] text-center py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl">
                Get Started
              </a>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center text-white">
                  <svg className="w-5 h-5 text-yellow-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">All premium features</span>
                </li>
                <li className="flex items-center text-white">
                  <svg className="w-5 h-5 text-yellow-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">One payment, full year</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-12 flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">All plans include 30-day money-back guarantee</span>
          </p>
        </div>
      </section>

      {/* CTA Section - Crystal Clear */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#671EE5] via-[#8B4CFF] to-pink-600"></div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Ready to Take Control of<br />Your Online Privacy?
          </h2>
          <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-2xl mx-auto">
            Join millions of users who trust WiseVPN to protect their digital freedom and privacy
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="/pricing"
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-[#671EE5] bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-3 text-xl">
                Get WiseVPN Now
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a
              href="/features"
              className="inline-flex items-center justify-center px-10 py-5 font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl hover:bg-white/20 transition-all duration-300 text-xl"
            >
              Explore All Features
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Privacy | WiseVPN',
  description: 'Understand how WiseVPN collects, uses, and protects your data. Our comprehensive data privacy practices and your rights.',
};

export default function DataPrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3EBFF] to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Data Privacy
            </h1>
            <p className="text-lg text-gray-600">
              Your privacy is our priority. Learn how we collect, use, and protect your data.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last Updated: December 28, 2025
            </p>
          </div>
          
          {/* 100% No-Logs Banner */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-6 mb-8 shadow-lg">
            <div className="flex items-start gap-4">
              <svg className="w-10 h-10 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h2 className="text-2xl font-bold mb-2">🛡️ VERIFIED 100% NO-LOGS POLICY</h2>
                <p className="text-green-50 text-lg mb-2">
                  WiseVPN operates under a strict, auditable zero-logs policy. We DO NOT collect, store, or log ANY of your online activity:
                </p>
                <ul className="text-green-50 space-y-1 text-sm">
                  <li>✓ Zero browsing history • Zero traffic data • Zero DNS queries</li>
                  <li>✓ Zero connection logs • Zero IP address logging • Zero activity monitoring</li>
                  <li>✓ Our infrastructure is designed to make logging technically impossible</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Overview */}
          <div className="bg-[#F3EBFF] rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">📋 Privacy at a Glance</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">Strict no-logs policy</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">Military-grade encryption</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">No tracking or profiling</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">GDPR & CCPA compliant</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose max-w-none">
            {/* 1. Data Collection */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. What Data We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1.1 Account Information
              </h3>
              <p className="text-gray-700 mb-4">
                When you create a WiseVPN account, we collect:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li><strong>Email address:</strong> Used for account creation, authentication, and important service communications</li>
                <li><strong>Password:</strong> Encrypted using Argon2 hashing algorithm (never stored in plain text)</li>
                <li><strong>Account creation date:</strong> For account management purposes</li>
                <li><strong>Subscription details:</strong> Payment status and plan type</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                1.2 Payment Information
              </h3>
              <p className="text-gray-700 mb-4">
                For subscription payments, we collect:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li><strong>Payment method:</strong> Credit card type, last 4 digits</li>
                <li><strong>Billing address:</strong> Required for payment processing</li>
                <li><strong>Transaction ID:</strong> For payment verification and support</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Full credit card details are processed and stored by our PCI-DSS compliant payment processor (Stripe). WiseVPN never sees or stores your complete card information.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                1.3 VPN Infrastructure
              </h3>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <p className="text-sm text-blue-800 mb-2">
                  <strong>Our Technology Stack:</strong>
                </p>
                <ul className="list-disc list-inside text-sm text-blue-800 space-y-1 ml-4">
                  <li><strong>VPN Protocol:</strong> WireGuard® - Modern, secure, and audited VPN protocol</li>
                  <li><strong>Backend Platform:</strong> Appwrite - Open-source backend-as-a-service for authentication and data management</li>
                  <li><strong>Server Infrastructure:</strong> DigitalOcean, AWS, and Hetzner cloud providers across 75+ global locations</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                1.4 Technical Data (Non-Identifying)
              </h3>
              <p className="text-gray-700 mb-4">
                To maintain service quality, we collect minimal technical data:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li><strong>Connection timestamps:</strong> When VPN connection starts/ends (not what you do during)</li>
                <li><strong>Server location:</strong> Which VPN server you connected to</li>
                <li><strong>Bandwidth used:</strong> Total data transferred (not content)</li>
                <li><strong>Device type:</strong> Operating system and app version for compatibility</li>
                <li><strong>WireGuard protocol data:</strong> Connection handshake metadata (no traffic content)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                1.5 What We DO NOT Collect (100% NO-LOGS GUARANTEE)
              </h3>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-600 rounded-lg p-5 mb-4">
                <p className="text-gray-900 font-bold text-lg mb-3">✓ Our 100% Strict No-Logs Policy — GUARANTEED:</p>
                <div className="bg-white border border-green-200 rounded-lg p-4 mb-3">
                  <p className="text-green-900 font-semibold mb-2">We have ZERO capability to monitor your online activity:</p>
                  <ul className="list-none text-green-800 space-y-1.5">
                    <li><strong>✗ ZERO browsing history</strong> — We don't know what websites you visit</li>
                    <li><strong>✗ ZERO connection logs</strong> — We don't track timestamps or session duration</li>
                    <li><strong>✗ ZERO bandwidth monitoring</strong> — We don't log usage patterns</li>
                    <li><strong>✗ ZERO IP address logging</strong> — Neither your real IP nor VPN IP is stored</li>
                    <li><strong>✗ ZERO DNS queries</strong> — We don't track what domains you resolve</li>
                    <li><strong>✗ ZERO traffic data</strong> — We don't inspect or log packet contents</li>
                  </ul>
                  <p className="text-green-900 font-bold mt-3 text-sm">This is not a marketing promise — our infrastructure is architected to make logging impossible.</p>
                </div>
              </div>
            </section>

            {/* 2. How We Use Data */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. How We Use Your Data
              </h2>
              <p className="text-gray-700 mb-4">
                We use your data exclusively for the following purposes:
              </p>
              
              <div className="space-y-4 mb-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✅ Service Delivery</h4>
                  <p className="text-sm text-gray-700">Providing VPN connectivity, authentication, and account management</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✅ Customer Support</h4>
                  <p className="text-sm text-gray-700">Responding to your inquiries and troubleshooting technical issues</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✅ Security & Fraud Prevention</h4>
                  <p className="text-sm text-gray-700">Protecting against abuse, unauthorized access, and payment fraud</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✅ Service Improvement</h4>
                  <p className="text-sm text-gray-700">Analyzing aggregated, anonymized data to improve performance</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✅ Legal Compliance</h4>
                  <p className="text-sm text-gray-700">Meeting legal obligations and responding to valid legal requests</p>
                </div>
              </div>
            </section>

            {/* 3. Data Sharing */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Data Sharing & Third Parties
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell, rent, or trade your personal data. We only share data with:
              </p>

              <div className="overflow-x-auto mb-4">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Service</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Purpose</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Data Shared</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Appwrite</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Backend services, authentication & database</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Email, encrypted passwords, account data</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Stripe</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Payment processing</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Billing info, transaction data</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">DigitalOcean</td>
                      <td className="px-6 py-4 text-sm text-gray-700">VPN server hosting</td>
                      <td className="px-6 py-4 text-sm text-gray-700">WireGuard connection metadata only</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">AWS</td>
                      <td className="px-6 py-4 text-sm text-gray-700">VPN server hosting (select regions)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">WireGuard connection metadata only</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Hetzner</td>
                      <td className="px-6 py-4 text-sm text-gray-700">VPN server hosting (select regions)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">WireGuard connection metadata only</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Email provider</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Service communications</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Email address only</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4">
                All third-party providers are carefully selected and contractually required to protect your data according to applicable privacy laws.
              </p>
            </section>

            {/* 4. Data Protection */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. How We Protect Your Data
              </h2>WireGuard® protocol with ChaCha20 encryption, AES-256 for data at rest, TLS 1.3 for web traffic
              
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-6 h-6 text-[#671EE5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <h4 className="font-semibold text-gray-900">Encryption</h4>
                  </div>
                  <p className="text-sm text-gray-700">AES-256 encryption for data at rest, TLS 1.3 for data in transit</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-6 h-6 text-[#671EE5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h4 className="font-semibold text-gray-900">Access Control</h4>
                  </div>
                  <p className="text-sm text-gray-700">Strict acceTier 3+ data centers (DigitalOcean, AWS, Hetzner) with 24/7 monitoring and DDoS protectionion for staff</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-6 h-6 text-[#671EE5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <h4 className="font-semibold text-gray-900">Secure Infrastructure</h4>
                  </div>
                  <p className="text-sm text-gray-700">Servers in secure data centers with 24/7 monitoring</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-6 h-6 text-[#671EE5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h4 className="font-semibold text-gray-900">Regular Audits</h4>
                  </div>
                  <p className="text-sm text-gray-700">Periodic security audits and penetration testing</p>
                </div>
              </div>
            </section>

            {/* 5. Data Retention */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Data Retention
              </h2>
              <p className="text-gray-700 mb-4">
                We retain your data only as long as necessary:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li><strong>Active accounts:</strong> Data retained while your account is active</li>
                <li><strong>Cancelled accounts:</strong> Account data deleted within 30 days of cancellation</li>
                <li><strong>Payment records:</strong> Retained for 7 years for tax and legal compliance</li>
                <li><strong>Support tickets:</strong> Deleted after 2 years of inactivity</li>
                <li><strong>VPN connection logs:</strong> Deleted immediately after session ends (as per no-logs policy)</li>
              </ul>
            </section>

            {/* 6. Your Rights */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Your Privacy Rights
              </h2>
              <p className="text-gray-700 mb-4">
                You have the following rights regarding your personal data:
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#671EE5] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Right to Access</h4>
                    <p className="text-sm text-gray-700">Request a copy of your personal data we hold</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#671EE5] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Right to Rectification</h4>
                    <p className="text-sm text-gray-700">Correct inaccurate or incomplete data</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#671EE5] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Right to Erasure</h4>
                    <p className="text-sm text-gray-700">Request deletion of your data (subject to legal obligations)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#671EE5] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Right to Data Portability</h4>
                    <p className="text-sm text-gray-700">Receive your data in a machine-readable format</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#671EE5] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-xs font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Right to Object</h4>
                    <p className="text-sm text-gray-700">Object to processing of your data for certain purposes</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#671EE5] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-xs font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Right to Withdraw Consent</h4>
                    <p className="text-sm text-gray-700">Withdraw consent for data processing at any time</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F3EBFF] rounded-lg p-4 mt-4">
                <p className="text-sm text-gray-700">
                  To exercise any of these rights, please contact us at{' '}
                  <a href="mailto:privacy@wisevpn.com" className="text-[#671EE5] hover:underline font-medium">
                    privacy@wisevpn.com
                  </a>
                  {' '}or visit your account settings.
                </p>
              </div>
            </section>

            {/* 7. Cookies */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Cookies & Tracking
              </h2>
              <p className="text-gray-700 mb-4">
                We use minimal cookies for essential functionality:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li><strong>Essential cookies:</strong> Required for login and session management</li>
                <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
                <li><strong>No tracking cookies:</strong> We do not use advertising or analytics cookies</li>
              </ul>
              <p className="text-gray-700">
                You can control cookies through your browser settings. Note that disabling essential cookies may affect service functionality.
              </p>
            </section>

            {/* 8. International Transfers */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. International Data Transfers
              </h2>
              <p className="text-gray-700 mb-4">
                Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>Standard Contractual Clauses (SCCs) with service providers</li>
                <li>Adequacy decisions by the European Commission</li>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular compliance audits</li>
              </ul>
            </section>

            {/* 9. Children's Privacy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Children's Privacy
              </h2>
              <p className="text-gray-700 mb-4">
                WiseVPN is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected data from a child, please contact us immediately.
              </p>
            </section>

            {/* 10. Changes to Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-gray-700 mb-4">
                We may update this Data Privacy policy periodically. We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>Email notification to your registered address</li>
                <li>Prominent notice on our website</li>
                <li>In-app notification</li>
              </ul>
              <p className="text-gray-700">
                Continued use of WiseVPN after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                For any questions about this Data Privacy policy or our practices:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <a href="mailto:privacy@wisevpn.com" className="text-[#671EE5] hover:underline">
                      privacy@wisevpn.com
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
                    <a href="/contact" className="text-[#671EE5] hover:underline">
                      Contact Form
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data Protection Officer</h4>
                    <a href="mailto:dpo@wisevpn.com" className="text-[#671EE5] hover:underline">
                      dpo@wisevpn.com
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                    <p className="text-gray-700">Within 30 days</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Actions */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/privacy"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#671EE5] text-[#671EE5] font-semibold rounded-lg hover:bg-[#671EE5] hover:text-white transition-colors duration-200"
              >
                View Privacy Policy
              </a>
              <a
                href="/terms"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                View Terms of Service
              </a>
              <a
                href="/delete-account"
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Delete My Data
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

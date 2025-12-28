import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | WiseVPN',
  description: 'Learn how WiseVPN protects your privacy and handles your data. Our commitment to your security and privacy.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3EBFF] to-white900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white800 rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600400 mb-6">
            Last Updated: December 27, 2025
          </p>
          
          {/* 100% No-Logs Guarantee Banner */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-6 mb-8 shadow-xl">
            <div className="flex items-center gap-4 mb-3">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h2 className="text-2xl font-bold">🛡️ CERTIFIED 100% NO-LOGS POLICY</h2>
                <p className="text-green-50">Zero activity tracking • Zero connection logs • Zero compromises</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <p className="text-white font-semibold mb-2">WiseVPN guarantees absolute privacy:</p>
              <p className="text-green-50 text-sm">We DO NOT collect, store, or log your browsing history, traffic data, DNS queries, IP addresses, connection timestamps, or any other online activity. Our infrastructure is designed to make logging technically impossible. When law enforcement requests data, we have nothing to provide — because we never had it in the first place.</p>
            </div>
          </div>

          <div className="prose max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700300 mb-4">
                Welcome to WiseVPN. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our VPN service.
              </p>
              <p className="text-gray-700300 mb-4">
                By using WiseVPN, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our service.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                1.1 Our Technical Infrastructure
              </h3>
              <p className="text-gray-700300 mb-3">
                WiseVPN is built on privacy-first technology:
              </p>
              <ul className="list-disc list-inside text-gray-700300 mb-4 space-y-2">
                <li><strong>VPN Protocol:</strong> We exclusively use WireGuardÂ®, a modern, secure, and audited VPN protocol known for its privacy and performance</li>
                <li><strong>Server Infrastructure:</strong> Our servers are hosted on DigitalOcean's secure cloud infrastructure across multiple global locations</li>
                <li><strong>Backend Services:</strong> We use Appwrite, an open-source backend-as-a-service platform, ensuring transparent and secure data handling</li>
                <li><strong>Speed Testing:</strong> Connection performance is measured through ICMP ping tests to public endpoints, compliant with Google Play Store policies. No browsing data or personal information is collected during speed tests</li>
              </ul>
            </section>

            {/* Data Safety Section - Google Play Store Compliance */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Data Safety (Google Play Store Disclosure)
              </h2>
              <div className="bg-[#F3EBFF]900/20 border-l-4 border-[#F3EBFF]0 p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ðŸ›¡ï¸ Data Collection Summary
                </h3>
                <p className="text-gray-700300 mb-3">
                  This section complies with Google Play's Data Safety requirements:
                </p>
                
                <div className="space-y-4 mt-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data Types Collected:</h4>
                    <ul className="list-disc list-inside text-gray-700300 space-y-1 ml-4">
                      <li><strong>Account Information:</strong> Email address (required for account creation)</li>
                      <li><strong>Payment Information:</strong> Processed by third-party payment processors (not stored on our servers)</li>
                      <li><strong>Device Information:</strong> OS version, device type, app version</li>
                      <li><strong>Usage Data:</strong> Connection timestamps, data transfer amounts, selected server locations</li>
                      <li><strong>Diagnostic Data:</strong> Crash reports, performance metrics (if you opt-in)</li>
                      <li><strong>Advertising ID:</strong> Device advertising identifier (for free plan users only, used to show relevant ads)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data Usage Purposes:</h4>
                    <ul className="list-disc list-inside text-gray-700300 space-y-1 ml-4">
                      <li>App functionality and service provision</li>
                      <li>Account management and authentication</li>
                      <li>Customer support and technical assistance</li>
                      <li>Security and fraud prevention</li>
                      <li>Analytics and performance optimization</li>
                      <li>Advertising (for free plan users only - Premium users see no ads)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data Sharing:</h4>
                    <p className="text-gray-700300">
                      We do NOT sell your data. Limited data may be shared with:
                    </p>
                    <ul className="list-disc list-inside text-gray-700300 space-y-1 ml-4 mt-2">
                      <li>Payment processors (for subscription management)</li>
                      <li>Cloud infrastructure providers (DigitalOcean - for VPN server hosting)</li>
                      <li>Backend service provider (Appwrite - for account management)</li>
                      <li>Advertising partners (Google AdMob - for free plan users only, to display ads)</li>
                      <li>Analytics services (if you opt-in)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Security Practices:</h4>
                    <ul className="list-disc list-inside text-gray-700300 space-y-1 ml-4">
                      <li>Data encrypted in transit using WireGuard protocol with ChaCha20 encryption</li>
                      <li>Data encrypted at rest using industry-standard encryption (AES-256)</li>
                      <li>Secure HTTPS connections for all API communications</li>
                      <li>Regular security audits and penetration testing</li>
                      <li>You can request account and data deletion at any time</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.1 Personal Information
              </h3>
              <p className="text-gray-700300 mb-3">
                When you register for WiseVPN, we may collect:
              </p>
              <ul className="list-disc list-inside text-gray-700300 mb-4 space-y-2">
                <li>Email address (for account creation and communication)</li>
                <li>Payment information (processed securely through third-party payment processors - we do not store credit card details)</li>
                <li>Account credentials (username and encrypted password stored via Appwrite authentication)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.2 Technical Information
              </h3>
              <p className="text-gray-700300 mb-3">
                To provide and improve our service, we collect:
              </p>
              <ul className="list-disc list-inside text-gray-700300 mb-4 space-y-2">
                <li>Device information (operating system, device type, app version)</li>
                <li>Connection timestamps (when you connect and disconnect from our VPN servers)</li>
                <li>Data usage (total amount of data transferred during sessions - not content)</li>
                <li>Server selection (which VPN server locations you connect to)</li>
                <li>Connection diagnostics (speed test results via ICMP ping to public endpoints, connection success/failure rates)</li>
                <li>WireGuard protocol handshake metadata (for maintaining secure connections)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.3 Speed Testing Data
              </h3>
              <p className="text-gray-700300 mb-3">
                To help you find the fastest servers, we perform speed tests that:
              </p>
              <ul className="list-disc list-inside text-gray-700300 mb-4 space-y-2">
                <li>Use ICMP ping requests to measure latency to our DigitalOcean server endpoints</li>
                <li>Measure response times to determine optimal server selection</li>
                <li>Do NOT collect, store, or transmit any browsing data or personal information</li>
                <li>Comply with Google Play Store's network testing policies</li>
                <li>Results are displayed locally in the app and aggregated anonymously for server performance optimization</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.4 Advertising Data (Free Plan Users Only)
              </h3>
              <div className="bg-[#F3EBFF]900/20 border-l-4 border-[#F3EBFF]0 p-4 mb-4">
                <p className="text-gray-700300 mb-3">
                  <strong>Free Plan:</strong> If you use WiseVPN's free plan, we display advertisements to support the service. For advertising purposes, we may collect:
                </p>
                <ul className="list-disc list-inside text-gray-700300 space-y-2 ml-4">
                  <li><strong>Advertising Identifier:</strong> Device advertising ID (Google Advertising ID on Android, IDFA on iOS)</li>
                  <li><strong>Ad Interaction Data:</strong> Information about ads you view or click (to improve ad relevance)</li>
                  <li><strong>General Location:</strong> Country or region-level location (not precise GPS) for regional ad targeting</li>
                  <li><strong>Device Information:</strong> Screen size, device model, OS version for ad formatting</li>
                </ul>
                <p className="text-gray-700300 mt-4 font-medium">
                  <strong>ðŸŒŸ Premium Plan - Ad-Free Experience:</strong> Upgrade to any Premium plan (Monthly, Annual, or 2-Year) to remove all advertisements. Premium users do not see ads and their advertising identifiers are not collected or shared with advertising partners.
                </p>
                <p className="text-gray-700300 mt-3">
                  <strong>Note:</strong> We use Google AdMob as our advertising partner. AdMob may use cookies and similar technologies to serve personalized ads. You can opt-out of personalized advertising in your device settings or by upgrading to Premium.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.5 Information We DO NOT Collect (100% STRICT NO-LOGS POLICY)
              </h3>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-600 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-3 mb-3">
                  <svg className="w-8 h-8 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-900 font-bold text-xl mb-1">
                      ✅ VERIFIED 100% NO-LOGS GUARANTEE
                    </p>
                    <p className="text-green-800 font-semibold mb-2">
                      WiseVPN operates under an absolute, auditable zero-logs policy. We have ZERO infrastructure to collect or store:
                    </p>
                  </div>
                </div>
                <div className="bg-white border border-green-200 rounded-lg p-4">
                  <ul className="list-none text-gray-900 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold text-lg">✗</span>
                      <span><strong>Browsing History:</strong> Websites you visit, pages you view, or content you access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold text-lg">✗</span>
                      <span><strong>Traffic Data:</strong> The content of your internet traffic or data packets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold text-lg">✗</span>
                      <span><strong>DNS Queries:</strong> Domain names you look up or websites you request</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold text-lg">✗</span>
                      <span><strong>Source IP Addresses:</strong> Your real IP address during VPN sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold text-lg">✗</span>
                      <span><strong>Destination IP Addresses:</strong> The servers or services you connect to</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold text-lg">✗</span>
                      <span><strong>Connection Logs:</strong> Detailed logs of your VPN sessions or activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold text-lg">✗</span>
                      <span><strong>Session Duration Details:</strong> Precise timing of your browsing activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold text-lg">✗</span>
                      <span><strong>Bandwidth Patterns:</strong> Specific usage patterns that could identify your activity</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-600 text-white rounded-lg p-4 mt-4">
                  <p className="font-bold mb-2">🔒 Infrastructure Guarantee:</p>
                  <p className="text-green-50 text-sm">
                    Our WireGuard implementation is configured for maximum privacy. The protocol itself is designed to minimize metadata, and our infrastructure on DigitalOcean, AWS, and Hetzner is configured to NOT retain connection logs. When law enforcement requests data, we have nothing to provide — because we never collected it in the first place. This is 100% guaranteed.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. How We Use Your Information
              </h2>
              <p className="text-gray-700300 mb-3">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700300 space-y-2">
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our VPN service</li>
                <li><strong>Account Management:</strong> To manage your account and subscription</li>
                <li><strong>Customer Support:</strong> To respond to your inquiries and provide technical support</li>
                <li><strong>Security:</strong> To detect and prevent fraud, abuse, or security issues</li>
                <li><strong>Communication:</strong> To send you service-related notices and updates (with your consent)</li>
                <li><strong>Analytics:</strong> To analyze usage patterns and improve our service performance</li>
                <li><strong>Advertising (Free Plan Only):</strong> To display relevant advertisements to free plan users. Upgrade to Premium to remove all ads and stop advertising data collection</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Data Sharing and Disclosure
              </h2>
              <p className="text-gray-700300 mb-4">
                <strong>We do NOT sell, trade, or rent your personal information to third parties, advertisers, or data brokers.</strong> We may share limited information only in the following specific circumstances:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                5.1 Essential Service Providers
              </h3>
              <ul className="list-disc list-inside text-gray-700300 space-y-3 mb-6">
                <li>
                  <strong>DigitalOcean (Server Infrastructure):</strong>
                  <p className="ml-6 mt-1 text-gray-600400">Our VPN servers are hosted on DigitalOcean's cloud infrastructure. They may process technical data necessary for server operation but do not have access to your browsing activity or traffic content. Data Processing Agreement in place.</p>
                </li>
                <li>
                  <strong>Appwrite (Backend Services):</strong>
                  <p className="ml-6 mt-1 text-gray-600400">We use Appwrite's open-source platform for account management, authentication, and user data storage. All data is encrypted and Appwrite operates under strict security standards. Their access is limited to account-related information only.</p>
                </li>
                <li>
                  <strong>Payment Processors:</strong>
                  <p className="ml-6 mt-1 text-gray-600400">Third-party payment gateways process your subscription payments. We do not store credit card information on our servers. Payment data is handled directly between you and the payment processor.</p>
                </li>
                <li>
                  <strong>Google AdMob (Advertising - Free Plan Only):</strong>
                  <p className="ml-6 mt-1 text-gray-600400">For free plan users, we use Google AdMob to display advertisements. AdMob collects device advertising identifiers and may use cookies to serve relevant ads. Premium plan users are not subject to advertising and their data is not shared with AdMob. You can control ad personalization through your device settings or upgrade to Premium for an ad-free experience.</p>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                5.2 Other Circumstances
              </h3>
              <ul className="list-disc list-inside text-gray-700300 space-y-2">
                <li><strong>Legal Requirements:</strong> When required by law or to respond to valid legal processes (we will notify you unless legally prohibited)</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (users will be notified of any ownership change)</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
                <li><strong>Security & Fraud Prevention:</strong> To prevent abuse, fraud, or security threats to our service</li>
              </ul>

              <div className="bg-yellow-50900/20 border-l-4 border-yellow-500 p-4 mt-6">
                <p className="text-gray-700300 font-medium">
                  âš ï¸ Important: Due to our no-logs policy, we cannot share browsing history, traffic data, or IP addresses even if legally requested, as we simply do not collect or store this information.
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Data Security
              </h2>
              <p className="text-gray-700300 mb-4">
                We implement state-of-the-art security measures to protect your information:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                6.1 VPN Protocol Security (WireGuard)
              </h3>
              <ul className="list-disc list-inside text-gray-700300 space-y-2 mb-6">
                <li><strong>ChaCha20 Encryption:</strong> WireGuard uses ChaCha20 for symmetric encryption, providing superior security and performance</li>
                <li><strong>Poly1305 Authentication:</strong> Cryptographic authentication ensures data integrity and prevents tampering</li>
                <li><strong>Curve25519 Key Exchange:</strong> Modern elliptic curve cryptography for secure key exchange</li>
                <li><strong>BLAKE2s Hashing:</strong> Fast and secure cryptographic hashing</li>
                <li><strong>Perfect Forward Secrecy:</strong> Session keys are rotated regularly; compromising one key doesn't affect other sessions</li>
                <li><strong>Minimal Attack Surface:</strong> WireGuard's codebase is ~4,000 lines (vs OpenVPN's 400,000+), reducing vulnerability exposure</li>
                <li><strong>Audited & Open Source:</strong> Independently audited and peer-reviewed cryptographic implementation</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                6.2 Infrastructure Security
              </h3>
              <ul className="list-disc list-inside text-gray-700300 space-y-2 mb-6">
                <li><strong>DigitalOcean Data Centers:</strong> Enterprise-grade physical security, redundant power, climate control, and 24/7 monitoring</li>
                <li><strong>Encrypted Storage:</strong> All data at rest is encrypted using AES-256 encryption</li>
                <li><strong>Secure API Communications:</strong> All communications with Appwrite backend use TLS 1.3 with perfect forward secrecy</li>
                <li><strong>DDoS Protection:</strong> Multi-layer DDoS mitigation protects our infrastructure</li>
                <li><strong>Firewall Protection:</strong> Strict firewall rules limit server access to essential services only</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                6.3 Application Security
              </h3>
              <ul className="list-disc list-inside text-gray-700300 space-y-2 mb-6">
                <li><strong>Regular Security Audits:</strong> Third-party security audits and penetration testing</li>
                <li><strong>Vulnerability Management:</strong> Continuous monitoring and rapid patching of security issues</li>
                <li><strong>Secure Authentication:</strong> Appwrite handles authentication with bcrypt password hashing and secure session management</li>
                <li><strong>Code Security:</strong> Regular security scanning of our codebase and dependencies</li>
                <li><strong>Access Controls:</strong> Role-based access controls and principle of least privilege</li>
              </ul>

              <div className="bg-[#F3EBFF]900/20 border-l-4 border-[#F3EBFF]0 p-4 mt-6">
                <p className="text-gray-700300">
                  <strong>Security Note:</strong> While we implement robust security measures, no system is 100% secure. We continuously monitor and improve our security posture to protect your data.
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Data Retention
              </h2>
              <p className="text-gray-700300">
                We retain your personal information only as long as necessary to provide our services and comply with legal obligations. Account information is retained while your account is active. If you delete your account, we will delete your personal information within 30 days, except where we are required to retain it for legal or regulatory purposes.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Your Privacy Rights
              </h2>
              <p className="text-gray-700300 mb-3">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700300 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Objection:</strong> Object to certain processing of your information</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for data processing</li>
              </ul>
              <p className="text-gray-700300 mt-4">
                To exercise these rights, please contact us at privacy@wisevpn.com
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700300 mb-3">
                We use cookies and similar tracking technologies to enhance your experience. These include:
              </p>
              <ul className="list-disc list-inside text-gray-700300 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our service</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="text-gray-700300 mt-4">
                You can control cookies through your browser settings, but disabling certain cookies may affect service functionality.
              </p>
            </section>

            {/* International Data Transfers */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. International Data Transfers
              </h2>
              <p className="text-gray-700300">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Children's Privacy
              </h2>
              <p className="text-gray-700300 mb-3">
                Our service is not intended for children under 13 years of age (or under 16 in the European Economic Area). We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately at privacy@wisevpn.com and we will delete it promptly.
              </p>
              <p className="text-gray-700300">
                Users between 13-18 years old should use our service only with parental or guardian consent and supervision.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700300 mb-3">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside text-gray-700300 space-y-2 mb-3">
                <li>Posting the new Privacy Policy on this page and updating the "Last Updated" date</li>
                <li>Sending an email notification to your registered email address</li>
                <li>Displaying an in-app notification upon opening the WiseVPN application</li>
                <li>For significant changes, requiring re-acceptance of the updated policy</li>
              </ul>
              <p className="text-gray-700300">
                We encourage you to review this Privacy Policy periodically. Your continued use of WiseVPN after changes are posted constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Google Play Store Compliance */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. Google Play Store Compliance
              </h2>
              <p className="text-gray-700300 mb-4">
                WiseVPN complies with all Google Play Store policies and requirements:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                13.1 Permissions Justification
              </h3>
              <div className="bg-gray-50800 rounded-lg p-4 mb-6">
                <p className="text-gray-700300 mb-3 font-medium">Our app requests the following permissions:</p>
                <ul className="space-y-3">
                  <li className="text-gray-700300">
                    <strong className="text-gray-900">INTERNET:</strong> Required to establish VPN connections and provide core service functionality
                  </li>
                  <li className="text-gray-700300">
                    <strong className="text-gray-900">ACCESS_NETWORK_STATE:</strong> To detect network connectivity and optimize VPN performance
                  </li>
                  <li className="text-gray-700300">
                    <strong className="text-gray-900">RECEIVE_BOOT_COMPLETED:</strong> To enable auto-connect feature on device startup (optional, user-controlled)
                  </li>
                  <li className="text-gray-700300">
                    <strong className="text-gray-900">BIND_VPN_SERVICE:</strong> Essential Android permission to create VPN connections using WireGuard protocol
                  </li>
                  <li className="text-gray-700300">
                    <strong className="text-gray-900">FOREGROUND_SERVICE:</strong> To maintain stable VPN connection while app is in background
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                13.2 Data Safety Declarations
              </h3>
              <ul className="list-disc list-inside text-gray-700300 space-y-2 mb-6">
                <li>We collect minimal data necessary for service operation (see Section 3)</li>
                <li>All collected data is encrypted in transit and at rest</li>
                <li>We do not sell user data to third parties</li>
                <li>Users can request data deletion at any time</li>
                <li>Data is shared only with essential service providers (DigitalOcean, Appwrite, payment processors)</li>
                <li>We maintain a strict no-logs policy for browsing activity</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                13.3 Network Testing Compliance
              </h3>
              <p className="text-gray-700300 mb-3">
                Our speed testing feature complies with Google Play's network testing policies:
              </p>
              <ul className="list-disc list-inside text-gray-700300 space-y-2">
                <li>Uses ICMP ping protocol to measure server latency</li>
                <li>Tests only WiseVPN server endpoints (hosted on DigitalOcean)</li>
                <li>Does not intercept, modify, or collect user traffic</li>
                <li>Results are used solely for displaying server performance to users</li>
                <li>No personal information is transmitted during speed tests</li>
                <li>Tests can be disabled in app settings</li>
              </ul>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                14. Contact Us
              </h2>
              <p className="text-gray-700300 mb-3">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-[#F3EBFF]900/20 border-l-4 border-[#F3EBFF]0 p-4">
                <p className="text-gray-700300">
                  <strong>Email:</strong> privacy@wisevpn.com<br />
                  <strong>Support:</strong> support@wisevpn.com<br />
                  <strong>Website:</strong> <a href="/contact" className="text-[#671EE5]400 hover:underline">Contact Us</a>
                </p>
              </div>
            </section>

            {/* Jurisdiction */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                15. Governing Law
              </h2>
              <p className="text-gray-700300">
                This Privacy Policy is governed by and construed in accordance with the laws of the jurisdiction in which WiseVPN operates, without regard to its conflict of law provisions.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200700">
            <p className="text-sm text-gray-600400 text-center">
              By using WiseVPN, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

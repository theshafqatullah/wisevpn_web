import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | WiseVPN',
  description: 'Read the terms and conditions for using WiseVPN service. Your rights and responsibilities as a user.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3EBFF] to-white900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white800 rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600400 mb-8">
            Last Updated: December 27, 2025
          </p>

          <div className="prose max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-gray-700300 mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and WiseVPN ("we," "us," or "our") governing your access to and use of our VPN service, website, and applications (collectively, the "Service").
              </p>
              <p className="text-gray-700300 mb-4">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use the Service.
              </p>
              <p className="text-gray-700300">
                WiseVPN provides VPN services using WireGuard® protocol, hosted on DigitalOcean infrastructure, with account management through Appwrite backend platform. We offer both free (ad-supported) and Premium (ad-free) subscription plans.
              </p>
            </section>

            {/* Account Registration */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Account Registration
              </h2>
              <p className="text-gray-700300 mb-3">
                To use WiseVPN, you must:
              </p>
              <ul className="list-disc list-inside text-gray-700300 space-y-2">
                <li>Be at least 13 years of age (or 16 in the EEA), with parental/guardian consent if under 18</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
              <p className="text-gray-700300 mt-4">
                You are responsible for maintaining the confidentiality of your account and password. Your account information is securely stored and managed through our Appwrite backend platform with industry-standard encryption. WiseVPN will not be liable for any loss or damage arising from your failure to protect your account information.
              </p>
            </section>

            {/* Acceptable Use Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Acceptable Use Policy
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.1 Permitted Uses
              </h3>
              <p className="text-gray-700300 mb-3">
                You may use WiseVPN to:
              </p>
              <ul className="list-disc list-inside text-gray-700300 space-y-2">
                <li>Protect your privacy and secure your internet connection</li>
                <li>Access content that is not available in your region</li>
                <li>Secure your data on public WiFi networks</li>
                <li>Browse the internet anonymously</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.2 Prohibited Activities
              </h3>
              <div className="bg-red-50900/20 border-l-4 border-red-500 p-4 mb-4">
                <p className="text-gray-700300 font-medium mb-2">
                  You agree NOT to use WiseVPN for:
                </p>
                <ul className="list-disc list-inside text-gray-700300 space-y-1">
                  <li>Illegal activities or criminal conduct</li>
                  <li>Hacking, spreading malware, or launching cyber attacks</li>
                  <li>Copyright infringement or piracy</li>
                  <li>Spamming or sending unsolicited communications</li>
                  <li>Distributing harmful or illegal content</li>
                  <li>Activities that violate others' privacy or rights</li>
                  <li>Reselling or redistributing our Service without authorization</li>
                  <li>Attempting to circumvent security measures</li>
                </ul>
              </div>
            </section>

            {/* Service Technology */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Service Technology and Infrastructure
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.1 VPN Protocol
              </h3>
              <p className="text-gray-700300 mb-3">
                WiseVPN exclusively uses the <strong>WireGuard® VPN protocol</strong>, which provides:
              </p>
              <ul className="list-disc list-inside text-gray-700300 space-y-2 mb-4">
                <li>ChaCha20 encryption for data security</li>
                <li>Poly1305 for authentication</li>
                <li>Curve25519 for key exchange</li>
                <li>Modern, audited, and open-source technology</li>
                <li>Superior performance compared to traditional VPN protocols</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.2 Server Infrastructure
              </h3>
              <p className="text-gray-700300 mb-3">
                Our VPN servers are hosted on <strong>DigitalOcean's cloud infrastructure</strong>:
              </p>
              <ul className="list-disc list-inside text-gray-700300 space-y-2 mb-4">
                <li>Enterprise-grade security and reliability</li>
                <li>99.9% uptime SLA</li>
                <li>Servers located in 75+ countries worldwide</li>
                <li>We maintain physical and digital security controls</li>
                <li>Regular security audits and updates</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.3 Backend Services
              </h3>
              <p className="text-gray-700300 mb-4">
                Account management, authentication, and user data are handled through <strong>Appwrite</strong>, an open-source backend platform that provides secure and transparent data handling.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.4 Speed Testing
              </h3>
              <p className="text-gray-700300">
                Our application uses ICMP ping tests to measure server latency and help you select the fastest server. These tests:
              </p>
              <ul className="list-disc list-inside text-gray-700300 space-y-2 mt-3">
                <li>Only ping WiseVPN server endpoints</li>
                <li>Do not collect or transmit personal information or browsing data</li>
                <li>Comply with Google Play Store network testing policies</li>
                <li>Can be disabled in application settings</li>
              </ul>
            </section>

            {/* Subscription and Payment */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Subscription Plans and Payment
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                5.1 Subscription Plans
              </h3>
              <p className="text-gray-700300 mb-4">
                WiseVPN offers multiple subscription options to suit different needs:
              </p>
              
              <div className="bg-gray-50900 rounded-lg p-6 mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Free Plan</h4>
                <ul className="list-disc list-inside text-gray-700300 space-y-2">
                  <li>Access to basic VPN features with WireGuard protocol</li>
                  <li>Limited server selection</li>
                  <li>Standard connection speeds</li>
                  <li><strong>Advertising:</strong> Displays advertisements through Google AdMob to support the free service</li>
                  <li>By using the free plan, you consent to viewing advertisements</li>
                  <li>Ad personalization can be controlled through your device settings</li>
                </ul>
              </div>

              <div className="bg-[#F3EBFF]900/20 rounded-lg p-6 mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Premium Plans (Monthly, Annual, 2-Year)</h4>
                <ul className="list-disc list-inside text-gray-700300 space-y-2">
                  <li><strong>Completely ad-free</strong> - No advertisements whatsoever</li>
                  <li>Access to all 2000+ servers in 75+ countries</li>
                  <li>Unlimited bandwidth and fastest speeds</li>
                  <li>Connect up to 10 devices simultaneously</li>
                  <li>Priority customer support</li>
                  <li>Streaming-optimized servers</li>
                  <li>No collection or sharing of advertising identifiers</li>
                </ul>
              </div>

              <p className="text-gray-700300 mt-4">
                All prices are displayed on our pricing page and are subject to change with 30 days' prior notice to existing subscribers.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                5.2 Advertising (Free Plan Only)
              </h3>
              <p className="text-gray-700300 mb-3">
                If you use the free plan:
              </p>
              <ul className="list-disc list-inside text-gray-700300 space-y-2 mb-4">
                <li>Advertisements are served through Google AdMob</li>
                <li>We may collect your device advertising identifier for ad purposes</li>
                <li>AdMob may use cookies and tracking technologies (see Privacy Policy)</li>
                <li>You can opt out of personalized ads through your device settings</li>
                <li>Upgrading to any Premium plan removes all advertisements immediately</li>
                <li>Premium subscribers' advertising identifiers are not collected or shared</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                5.3 Billing and Renewal
              </h3>
              <ul className="list-disc list-inside text-gray-700300 space-y-2">
                <li>Subscriptions automatically renew at the end of each billing period</li>
                <li>You will be charged the then-current rate for your plan</li>
                <li>You can cancel auto-renewal at any time from your account settings</li>
                <li>Cancellation takes effect at the end of the current billing period</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                5.4 Refund Policy
              </h3>
              <p className="text-gray-700300">
                We offer a 30-day money-back guarantee for first-time Premium subscribers. Refund requests must be submitted within 30 days of the initial purchase. Renewals and subsequent subscriptions are non-refundable except as required by law. The free plan is not eligible for refunds as it is provided at no charge.
              </p>
            </section>

            {/* Service Availability */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Service Availability and Performance
              </h2>
              <p className="text-gray-700300 mb-3">
                We strive to provide reliable service with maximum uptime through our DigitalOcean infrastructure. However:
              </p>
              <ul className="list-disc list-inside text-gray-700300 space-y-2">
                <li>We do not guarantee uninterrupted or error-free service</li>
                <li>Scheduled maintenance may cause temporary service interruptions (notified in advance)</li>
                <li>Service performance may vary based on your location, network conditions, and selected server</li>
                <li>WireGuard protocol performance depends on your device capabilities and network</li>
                <li>Free plan users may experience slower speeds compared to Premium subscribers</li>
                <li>We reserve the right to modify, suspend, or discontinue any aspect of the Service with reasonable notice</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Intellectual Property Rights
              </h2>
              <p className="text-gray-700300 mb-3">
                All content, features, and functionality of WiseVPN, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700300 space-y-2">
                <li>Software, applications, and code</li>
                <li>Text, graphics, logos, and images</li>
                <li>Trademarks and service marks</li>
                <li>Design and user interface</li>
              </ul>
              <p className="text-gray-700300 mt-4">
                are owned by WiseVPN or our licensors and are protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            {/* Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Privacy and Data Protection
              </h2>
              <p className="text-gray-700300 mb-3">
                Your use of the Service is also governed by our <a href="/privacy" className="text-[#671EE5]400 hover:underline">Privacy Policy</a>. We are committed to protecting your privacy and maintaining a strict no-logs policy for browsing activity.
              </p>
              <p className="text-gray-700300 mb-3">
                Key privacy practices:
              </p>
              <ul className="list-disc list-inside text-gray-700300 space-y-2">
                <li><strong>No-Logs Policy:</strong> We do not collect or store browsing history, traffic data, DNS queries, or IP addresses during VPN sessions</li>
                <li><strong>WireGuard Privacy:</strong> Our WireGuard implementation is configured for maximum privacy</li>
                <li><strong>Account Data:</strong> Stored securely via Appwrite with industry-standard encryption</li>
                <li><strong>Advertising Data (Free Plan):</strong> Device advertising ID collected for ad serving - removed when upgrading to Premium</li>
                <li><strong>Speed Testing:</strong> ICMP ping tests do not collect personal information</li>
              </ul>
              <p className="text-gray-700300 mt-4">
                Please review our Privacy Policy to understand how we collect, use, and protect your information.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-gray-700300 mb-3">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside text-gray-700300 space-y-2">
                <li>WiseVPN shall not be liable for any indirect, incidental, special, or consequential damages</li>
                <li>Our total liability shall not exceed the amount you paid for the Service in the 12 months preceding the claim</li>
                <li>We are not responsible for losses arising from unauthorized access to your account</li>
                <li>We are not liable for third-party content or services accessed through our Service</li>
              </ul>
            </section>

            {/* Disclaimers */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Disclaimers
              </h2>
              <p className="text-gray-700300 mb-3">
                The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700300 space-y-2">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties of security, accuracy, or reliability</li>
                <li>Warranties that the Service will be uninterrupted or error-free</li>
                <li>Warranties regarding third-party services or content</li>
              </ul>
            </section>

            {/* Termination */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Termination
              </h2>
              <p className="text-gray-700300 mb-3">
                We may terminate or suspend your account and access to the Service:
              </p>
              <ul className="list-disc list-inside text-gray-700300 space-y-2">
                <li>Immediately, without prior notice, for violation of these Terms</li>
                <li>For illegal activities or abuse of the Service</li>
                <li>For non-payment or fraudulent payment activities</li>
                <li>At our discretion, with or without cause</li>
              </ul>
              <p className="text-gray-700300 mt-4">
                Upon termination, your right to use the Service will immediately cease. You may cancel your subscription at any time from your account settings.
              </p>
            </section>

            {/* Indemnification */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Indemnification
              </h2>
              <p className="text-gray-700300">
                You agree to indemnify, defend, and hold harmless WiseVPN and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your violation of these Terms or your use of the Service.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. Governing Law and Dispute Resolution
              </h2>
              <p className="text-gray-700300 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which WiseVPN operates, without regard to conflict of law provisions.
              </p>
              <p className="text-gray-700300">
                Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration, except where prohibited by law. You agree to waive your right to participate in class action lawsuits.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                14. Changes to These Terms
              </h2>
              <p className="text-gray-700300">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by email or through the Service. Your continued use of the Service after such modifications constitutes your acceptance of the updated Terms.
              </p>
            </section>

            {/* Severability */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                15. Severability
              </h2>
              <p className="text-gray-700300">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            {/* Entire Agreement */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                16. Entire Agreement
              </h2>
              <p className="text-gray-700300">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and WiseVPN regarding the use of our Service and supersede all prior agreements and understandings.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                17. Contact Information
              </h2>
              <p className="text-gray-700300 mb-3">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-[#F3EBFF]900/20 border-l-4 border-[#F3EBFF]0 p-4">
                <p className="text-gray-700300">
                  <strong>Email:</strong> legal@wisevpn.app<br />
                  <strong>Support:</strong> support@wisevpn.app<br />
                  <strong>Website:</strong> <a href="/contact" className="text-[#671EE5]400 hover:underline">Contact Us</a>
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200700">
            <p className="text-sm text-gray-600400 text-center">
              By using WiseVPN, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

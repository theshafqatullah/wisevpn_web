import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | WiseVPN',
  description: 'Get in touch with WiseVPN support team. We are here to help with any questions or issues.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3EBFF] to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Have a question? We're here to help
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#671EE5] mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">support@wisevpn.com</p>
                  <p className="text-sm text-gray-600 mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#671EE5] mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Live Chat</h3>
                  <p className="text-gray-600">Available 24/7</p>
                  <button className="mt-2 text-[#671EE5] hover:underline text-sm font-medium">
                    Start Chat →
                  </button>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#671EE5] mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Help Center</h3>
                  <p className="text-gray-600">Browse our FAQ and guides</p>
                  <a href="/faq" className="mt-2 text-[#671EE5] hover:underline text-sm font-medium block">
                    Visit Help Center →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send us a Message
            </h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#671EE5] focus:border-transparent bg-white text-gray-900"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#671EE5] focus:border-transparent bg-white text-gray-900"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#671EE5] focus:border-transparent bg-white text-gray-900"
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#671EE5] focus:border-transparent bg-white text-gray-900 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#671EE5] hover:bg-[#5018B8] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                <span className="font-medium text-gray-900">How quickly will I receive a response?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-3 ml-4">
                Our support team typically responds within 24 hours during business days. For urgent technical issues, our live chat is available 24/7.
              </p>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                <span className="font-medium text-gray-900">Can I request a refund?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-3 ml-4">
                Yes, we offer a 30-day money-back guarantee for all subscription plans. Contact our support team to process your refund request.
              </p>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                <span className="font-medium text-gray-900 dark:text-white">Do you offer enterprise solutions?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-3 ml-4">
                Yes, we have dedicated enterprise solutions with custom pricing and features. Please contact us at enterprise@wisevpn.com for more information.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

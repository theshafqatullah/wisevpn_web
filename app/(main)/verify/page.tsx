'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { account } from '@/services/appwrite';

type VerificationState = 'verifying' | 'success' | 'error' | 'pending';

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const [state, setState] = useState<VerificationState>('pending');
  const [errorMessage, setErrorMessage] = useState('');
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    const userId = searchParams.get('userId');
    const secret = searchParams.get('secret');

    if (userId && secret) {
      // We have verification credentials, verify the email
      verifyEmail(userId, secret);
    }
  }, [searchParams]);

  const verifyEmail = async (userId: string, secret: string) => {
    setState('verifying');
    try {
      await account.updateVerification({ userId, secret });
      setState('success');
    } catch (error: any) {
      console.error('Verification error:', error);
      setState('error');
      setErrorMessage(error.message || 'Failed to verify email. The link may have expired.');
    }
  };

  const handleResendVerification = async () => {
    setIsResending(true);
    try {
      await account.createVerification({
        url: `${window.location.origin}/verify`
      });
      alert('Verification email sent! Please check your inbox.');
    } catch (error: any) {
      console.error('Resend error:', error);
      alert(error.message || 'Failed to send verification email. Please try again.');
    } finally {
      setIsResending(false);
    }
  };

  if (state === 'verifying') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F3EBFF] to-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
              <svg className="animate-spin h-10 w-10 text-[#671EE5]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Verifying Email...</h1>
            <p className="text-gray-600">Please wait while we verify your email address.</p>
          </div>
        </div>
      </div>
    );
  }

  if (state === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F3EBFF] to-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Email Verified!</h1>
            <p className="text-gray-600 mb-8">
              Your email has been successfully verified. You can now access all features of your WiseVPN account.
            </p>
            <a
              href="/"
              className="inline-block w-full bg-[#671EE5] hover:bg-[#5018B8] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Go to Dashboard
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (state === 'error') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F3EBFF] to-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6">
              <svg className="h-10 w-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Verification Failed</h1>
            <p className="text-gray-600 mb-8">{errorMessage}</p>
            <div className="space-y-4">
              <button
                onClick={handleResendVerification}
                disabled={isResending}
                className="w-full bg-[#671EE5] hover:bg-[#5018B8] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50"
              >
                {isResending ? 'Sending...' : 'Resend Verification Email'}
              </button>
              <p className="text-sm text-gray-600">
                <a href="/contact" className="text-[#671EE5] hover:underline font-medium">
                  Contact Support
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3EBFF] to-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 mb-6">
            <svg
              className="h-10 w-10 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Email Verification
          </h1>
          
          <p className="text-gray-600 mb-8">
            We've sent a verification link to your email address. Please check your inbox and click the link to verify your account.
          </p>

          {/* Steps */}
          <div className="bg-[#F3EBFF] rounded-lg p-6 mb-8 text-left">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Next Steps:
            </h2>
            <ol className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#671EE5] text-white text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                  1
                </span>
                <span>Check your email inbox (and spam folder)</span>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#671EE5] text-white text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                  2
                </span>
                <span>Click the verification link in the email</span>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#671EE5] text-white text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                  3
                </span>
                <span>Your account will be activated automatically</span>
              </li>
            </ol>
          </div>

          {/* Resend Email */}
          <div className="space-y-4">
            <button
              onClick={handleResendVerification}
              disabled={isResending}
              className="w-full bg-[#671EE5] hover:bg-[#5018B8] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50"
            >
              {isResending ? 'Sending...' : 'Resend Verification Email'}
            </button>

            <p className="text-sm text-gray-600">
              Didn't receive the email?{' '}
              <a href="/contact" className="text-[#671EE5] hover:underline font-medium">
                Contact Support
              </a>
            </p>
          </div>

          {/* Help Text */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              The verification link will expire in 24 hours. If you don't verify within this time, you'll need to request a new verification email.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already verified?{' '}
            <a href="/" className="text-[#671EE5] hover:underline font-medium">
              Go to Dashboard
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

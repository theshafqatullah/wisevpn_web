'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { account } from '@/services/appwrite';

type PageState = 'request' | 'sent' | 'reset' | 'success' | 'error';

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const [state, setState] = useState<PageState>('request');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Check if we have recovery parameters in URL
  useEffect(() => {
    const userId = searchParams.get('userId');
    const secret = searchParams.get('secret');
    
    if (userId && secret) {
      // User clicked the reset link, show password reset form
      setState('reset');
    }
  }, [searchParams]);

  const handleRequestReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      await account.createRecovery({
        email,
        url: `${window.location.origin}/reset-password`
      });
      setState('sent');
    } catch (error: any) {
      console.error('Password reset request error:', error);
      setErrorMessage(error.message || 'Failed to send reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    
    const userId = searchParams.get('userId');
    const secret = searchParams.get('secret');
    
    if (!userId || !secret) {
      setErrorMessage('Invalid reset link');
      setIsLoading(false);
      return;
    }
    
    try {
      await account.updateRecovery({
        userId,
        secret,
        password
      });
      setState('success');
    } catch (error: any) {
      console.error('Password reset error:', error);
      setState('error');
      setErrorMessage(error.message || 'Failed to reset password. The link may have expired.');
    } finally {
      setIsLoading(false);
    }
  };

  // Email sent confirmation state
  if (state === 'sent') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F3EBFF] to-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
              <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Check Your Email</h1>
            <p className="text-gray-600 mb-8">
              We've sent a password reset link to <span className="font-semibold text-[#671EE5]">{email}</span>. Please check your inbox and follow the instructions.
            </p>
            <div className="bg-[#F3EBFF] rounded-lg p-6 mb-8 text-left">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Next Steps:</h2>
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#671EE5] text-white text-xs font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span>Check your email inbox (and spam folder)</span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#671EE5] text-white text-xs font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                  <span>Click the password reset link in the email</span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#671EE5] text-white text-xs font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                  <span>Create a new strong password</span>
                </li>
              </ol>
            </div>
            <div className="space-y-4">
              <button onClick={() => setState('request')} className="w-full bg-[#671EE5] hover:bg-[#5018B8] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Try Different Email
              </button>
              <p className="text-sm text-gray-600">
                Didn't receive the email?{' '}
                <button onClick={(e) => { e.preventDefault(); handleRequestReset(e); }} className="text-[#671EE5] hover:underline font-medium">
                  Resend Link
                </button>
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-600">The password reset link will expire in 1 hour.</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Remember your password?{' '}
              <a href="/" className="text-[#671EE5] hover:underline font-medium">Back to Sign In</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Password reset success state
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Password Reset Successful!</h1>
            <p className="text-gray-600 mb-8">Your password has been successfully reset. You can now sign in with your new password.</p>
            <a href="/" className="inline-block w-full bg-[#671EE5] hover:bg-[#5018B8] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Go to Sign In
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Error state
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Reset Failed</h1>
            <p className="text-gray-600 mb-8">{errorMessage}</p>
            <div className="space-y-4">
              <button onClick={() => setState('request')} className="w-full bg-[#671EE5] hover:bg-[#5018B8] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Request New Reset Link
              </button>
              <p className="text-sm text-gray-600">
                <a href="/contact" className="text-[#671EE5] hover:underline font-medium">Contact Support</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Reset password form (when user clicks link from email)
  if (state === 'reset') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F3EBFF] to-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#F3EBFF] mb-4">
                <svg className="h-10 w-10 text-[#671EE5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Password</h1>
              <p className="text-gray-600">Enter your new password below.</p>
            </div>

            {errorMessage && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleResetPassword} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                <input
                  type="password"
                  id="password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#671EE5] focus:border-transparent outline-none transition-all"
                  placeholder="Enter new password"
                />
                <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters long</p>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  required
                  minLength={8}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#671EE5] focus:border-transparent outline-none transition-all"
                  placeholder="Confirm new password"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#671EE5] hover:bg-[#5018B8] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                {isLoading ? 'Resetting...' : 'Reset Password'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Request reset form (default state)
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3EBFF] to-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#F3EBFF] mb-4">
              <svg className="h-10 w-10 text-[#671EE5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset Password</h1>
            <p className="text-gray-600">Enter your email address and we'll send you a link to reset your password.</p>
          </div>

          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleRequestReset} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#671EE5] focus:border-transparent outline-none transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#671EE5] hover:bg-[#5018B8] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Remember your password?{' '}
                <a href="/" className="text-[#671EE5] hover:underline font-medium">Back to Sign In</a>
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="/pricing" className="text-[#671EE5] hover:underline font-medium">Sign Up</a>
              </p>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-600 text-center">
              Need help?{' '}
              <a href="/contact" className="text-[#671EE5] hover:underline font-medium">Contact our support team</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

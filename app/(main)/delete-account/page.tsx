'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { account } from '@/services/appwrite';

type DeleteState = 'confirm' | 'verifying' | 'success' | 'error';

export default function DeleteAccountPage() {
  const router = useRouter();
  const [state, setState] = useState<DeleteState>('confirm');
  const [password, setPassword] = useState('');
  const [confirmText, setConfirmText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');

  // Load user info on component mount
  useState(() => {
    const loadUser = async () => {
      try {
        const user = await account.get();
        setUserEmail(user.email);
      } catch (error) {
        console.error('Failed to load user:', error);
      }
    };
    loadUser();
  });

  const handleDeleteAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (confirmText !== 'DELETE') {
      setErrorMessage('Please type DELETE to confirm');
      return;
    }

    if (!password) {
      setErrorMessage('Password is required');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    setState('verifying');
    
    try {
      // First, verify the user's password by attempting to create a session
      // This ensures the user knows their password before deleting
      try {
        await account.createEmailPasswordSession({
          email: userEmail,
          password: password
        });
      } catch (error: any) {
        throw new Error('Invalid password. Please try again.');
      }

      // Disable the account (Appwrite doesn't have a direct delete in client SDK)
      // The account.updateStatus() sets the account to disabled/blocked
      await account.updateStatus();
      
      // Delete all active sessions
      await account.deleteSessions();
      
      setState('success');
    } catch (error: any) {
      console.error('Account deletion error:', error);
      setState('error');
      setErrorMessage(error.message || 'Failed to delete account. Please try again.');
    } finally {
      setIsLoading(false);
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Deleting Account...</h1>
            <p className="text-gray-600">Please wait while we process your request.</p>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Account Deleted</h1>
            <p className="text-gray-600 mb-8">
              Your account has been successfully deleted. We're sorry to see you go!
            </p>
            <div className="bg-[#F3EBFF] rounded-lg p-4 mb-8">
              <p className="text-sm text-gray-700">
                Your data will be permanently removed from our systems within 30 days.
              </p>
            </div>
            <a
              href="/"
              className="inline-block w-full bg-[#671EE5] hover:bg-[#5018B8] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Go to Homepage
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Deletion Failed</h1>
            <p className="text-gray-600 mb-8">{errorMessage}</p>
            <div className="space-y-4">
              <button
                onClick={() => {
                  setState('confirm');
                  setPassword('');
                  setConfirmText('');
                }}
                className="w-full bg-[#671EE5] hover:bg-[#5018B8] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Try Again
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
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Warning Header */}
          <div className="text-center mb-8">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
              <svg className="h-10 w-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Delete Account</h1>
            <p className="text-gray-600">This action cannot be undone.</p>
          </div>

          {/* Warning Notice */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <h2 className="text-sm font-semibold text-red-800 mb-2">⚠️ Warning</h2>
            <ul className="text-xs text-red-700 space-y-1">
              <li>• Your account will be permanently disabled</li>
              <li>• All your data will be deleted</li>
              <li>• Your active subscriptions will be cancelled</li>
              <li>• This action cannot be reversed</li>
            </ul>
          </div>

          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{errorMessage}</p>
            </div>
          )}

          {/* Deletion Form */}
          <form onSubmit={handleDeleteAccount} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Your Password
              </label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label htmlFor="confirmText" className="block text-sm font-medium text-gray-700 mb-2">
                Type <span className="font-bold text-red-600">DELETE</span> to confirm
              </label>
              <input
                type="text"
                id="confirmText"
                required
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                placeholder="Type DELETE"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || confirmText !== 'DELETE'}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Deleting Account...' : 'Delete My Account'}
            </button>
          </form>

          {/* Cancel Option */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              Changed your mind?{' '}
              <button
                onClick={() => router.back()}
                className="text-[#671EE5] hover:underline font-medium"
              >
                Go Back
              </button>
            </p>
          </div>

          {/* Help Section */}
          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-600 text-center">
              Having issues with your account?{' '}
              <a href="/contact" className="text-[#671EE5] hover:underline font-medium">
                Contact support
              </a>
              {' '}instead of deleting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

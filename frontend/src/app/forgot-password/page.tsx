'use client';
import { BookOpen, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>

        <div className="flex justify-center mb-10">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-gray-900">Citadel</span>
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password?</h1>
            <p className="text-gray-600">Enter your email and we&#39;ll send you a reset link</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="you@nitj.ac.in"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 text-black"
                  required
                />
              </div>
            </div>

            <button className="w-full py-4 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition">
              Send Reset Link
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Remembered your password?{' '}
            <Link href="/login" className="font-medium text-blue-600 hover:text-blue-700">
              Log in
            </Link>
          </p>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          © 2025 Citadel LMS • NIT Jalandhar
        </p>
      </div>
    </div>
  );
}
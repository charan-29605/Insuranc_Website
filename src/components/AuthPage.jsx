import React, { useState, useEffect } from 'react';
import { AlertCircle, Check } from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const validatePassword = (password) => {
    setPasswordStrength({
      length: password.length >= 10,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'password') {
      validatePassword(value);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const auth2 = window.gapi.auth2.getAuthInstance();
      const googleUser = await auth2.signIn();
      const id_token = googleUser.getAuthResponse().id_token;
      
      // Send the token to your backend
      const response = await fetch('/api/auth/google-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: id_token }),
      });
      
      if (!response.ok) throw new Error('Google login failed');
      
      setStatus({
        type: 'success',
        message: 'Successfully logged in with Google!'
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to login with Google. Please try again.'
      });
    }
  };

  const startResendTimer = () => {
    setResendTimer(30);
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      });

      if (!response.ok) throw new Error('Failed to send reset link');

      setStatus({
        type: 'success',
        message: 'Password reset link has been sent to your email!'
      });
      startResendTimer();
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send reset link. Please try again.'
      });
    }
  };

  const isPasswordValid = () => {
    return Object.values(passwordStrength).every(value => value === true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && !isPasswordValid()) {
      setStatus({
        type: 'error',
        message: 'Please ensure password meets all requirements'
      });
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setStatus({
        type: 'error',
        message: 'Passwords do not match'
      });
      return;
    }

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(isLogin
          ? { email: formData.email, password: formData.password }
          : formData
        ),
      });

      if (!response.ok) throw new Error('Authentication failed');

      setStatus({
        type: 'success',
        message: isLogin ? 'Successfully logged in!' : 'Account created successfully!'
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Authentication failed. Please try again.'
      });
    }
  };

  useEffect(() => {
    const loadGoogleAPI = () => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        window.gapi.load('auth2', () => {
          window.gapi.auth2.init({
            client_id: process.env.GOOGLE_CLIENT_ID || 'YOUR_GOOGLE_CLIENT_ID'
          });
        });
      };
      document.body.appendChild(script);
    };

    loadGoogleAPI();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-700 to-red-600 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md relative">
        <div className="hidden lg:block absolute -left-64 top-1/2 transform -translate-y-1/2 w-48 text-right">
          <h1 className="text-white text-2xl font-bold leading-tight">
            Security for every step of life's journey
          </h1>
        </div>

        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          {status.message && (
            <div className={`p-4 flex items-center gap-2 ${
              status.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}>
              {status.type === 'error' ? (
                <AlertCircle className="w-5 h-5" />
              ) : (
                <Check className="w-5 h-5" />
              )}
              {status.message}
            </div>
          )}

          <div className="bg-gradient-to-r from-red-700 to-red-600 p-6 text-center">
            <h2 className="text-3xl font-bold text-white">
              {isForgotPassword ? 'Reset Password' : (isLogin ? 'Welcome Back' : 'Create Your Account')}
            </h2>
            <p className="text-white opacity-80 mt-2">
              {isForgotPassword 
                ? 'Enter your email to reset password'
                : (isLogin 
                  ? 'Secure access to your account' 
                  : 'Join our community today')}
            </p>
          </div>

          {isForgotPassword ? (
            <form onSubmit={handleForgotPassword} className="p-8 space-y-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-300"
                  placeholder="Enter your email"
                />
              </div>
              <button 
                type="submit"
                disabled={resendTimer > 0}
                className={`w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg ${
                  resendTimer > 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {resendTimer > 0 
                  ? `Resend available in ${resendTimer}s` 
                  : 'Send Reset Link'}
              </button>
              <button 
                type="button"
                onClick={() => setIsForgotPassword(false)}
                className="w-full text-red-600 font-bold hover:underline"
              >
                Back to Login
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {!isLogin && (
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-300"
                    placeholder="Enter your full name"
                  />
                </div>
              )}

              <div>
                <label className="block text-gray-700 font-bold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-300"
                  placeholder="Enter your password"
                />
                {isLogin && (
                  <button 
                    type="button"
                    onClick={() => setIsForgotPassword(true)}
                    className="mt-2 text-sm text-red-600 hover:underline float-right"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>

              {!isLogin && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-bold text-gray-700 mb-2">Password Requirements:</h3>
                  <ul className="space-y-1">
                    {Object.entries({
                      length: 'At least 10 characters long',
                      uppercase: 'Contains uppercase letter',
                      lowercase: 'Contains lowercase letter',
                      number: 'Contains number',
                      special: 'Contains special character'
                    }).map(([key, text]) => (
                      <li 
                        key={key}
                        className={`text-sm flex items-center gap-2 ${
                          passwordStrength[key] ? 'text-green-600' : 'text-gray-600'
                        }`}
                      >
                        <Check className={`w-4 h-4 ${
                          passwordStrength[key] ? 'opacity-100' : 'opacity-50'
                        }`} />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {!isLogin && (
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-300"
                    placeholder="Confirm your password"
                  />
                </div>
              )}

              <button 
                type="submit" 
                className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
              >
                {isLogin ? 'Log In' : 'Sign Up'}
              </button>
            </form>
          )}

          {!isForgotPassword && (
            <div className="p-6 border-t">
              <button 
                onClick={handleGoogleLogin} 
                className="w-full flex items-center justify-center bg-white border-2 border-red-600 text-red-600 py-3 rounded-lg font-bold hover:bg-red-600 hover:text-white transition-all transform hover:scale-105 shadow-lg"
              >
                <img 
                  src="/api/placeholder/24/24"
                  alt="Google logo" 
                  className="w-6 h-6 mr-2"
                />
                Continue with Google
              </button>
            </div>
          )}

          <div className="p-6 border-t text-center">
            <p className="text-sm text-gray-600">
              {isLogin 
                ? "Don't have an account? " 
                : "Already have an account? "}
              <button 
                onClick={() => {
                  setIsLogin(!isLogin);
                  setIsForgotPassword(false);
                }} 
                className="text-red-600 font-bold hover:underline"
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
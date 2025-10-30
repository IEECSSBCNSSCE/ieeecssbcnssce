import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext'; 

const AuthForm = () => {
  const { login, signup, authError, setAuthError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isLoginRoute = location.hash === '#login' || location.hash === '';
  const isSignupRoute = location.hash === '#signup';
  const isLoginMode = isLoginRoute || !isSignupRoute;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formLoading, setFormLoading] = useState(false);
  const [localError, setLocalError] = useState(null);

  useEffect(() => {
    setAuthError(null);
    setLocalError(null);
  }, [isLoginMode, setAuthError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    setLocalError(null);

    try {
      if (isLoginMode) {
        await login(email, password);
      } else {
        await signup(email, password);
      }
      navigate('/'); 
    } catch (err) {
      let message = 'An unknown error occurred.';
      if (err.code) {
        switch (err.code) {
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            message = 'Invalid email or password.';
            break;
          case 'auth/email-already-in-use':
            message = 'This email is already registered. Try logging in.';
            break;
          case 'auth/weak-password':
            message = 'Password must be at least 6 characters long.';
            break;
          default:
            message = err.message || `Authentication failed: ${err.code}`; 
        }
      }
      setLocalError(message);
    } finally {
      setFormLoading(false);
    }
  };

  const displayError = authError || localError;

  return (
    <div className="form-container max-w-md mx-auto p-6 bg-white rounded-xl shadow-2xl border-t-4 border-blue-500">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-blue-700 flex items-center justify-center">
          {isLoginMode ? 'Login' : 'Create Account'}
        </h2>
      </div>

      {displayError && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded text-sm font-medium" role="alert">
          {displayError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="ieee-auth-field">
          <label className="ieee-auth-label" htmlFor="email">Email</label>
          <div className="ieee-auth-inputwrap">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="ieee-auth-field">
          <label className="ieee-auth-label" htmlFor="password">Password</label>
          <div className="ieee-auth-inputwrap">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              placeholder="Enter your password (min 8 chars)"
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={formLoading}
          className={`ieee-auth-submit flex justify-center items-center py-3 px-4 rounded-lg text-white font-semibold shadow-lg transition duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
            formLoading
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
          }`}
        >
          {formLoading ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            isLoginMode ? 'Login' : 'Sign Up'
          )}
        </button>
      </form>

      <div>
        <p>
          {isLoginMode ? "Don't have an account?" : "Already a member?"}
          {' '}
          <span
            onClick={() => navigate(isLoginMode ? '/auth#signup' : '/auth#login')}
            className="link"
          >
            {isLoginMode ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
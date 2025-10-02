import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-indigo-600">eDoc AI</div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
              <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden hero-background min-h-[600px] flex items-center">
        {/* Floating Images */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=100"
            alt="AI Technology"
            className="absolute top-[15%] left-[10%] w-48 h-48 object-cover rounded-xl floating-image opacity-95 transform -rotate-6"
            style={{ animationDelay: '0s' }}
          />
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=100"
            alt="Document Analysis"
            className="absolute top-[25%] right-[15%] w-56 h-56 object-cover rounded-xl floating-image opacity-95 transform rotate-3"
            style={{ animationDelay: '1s' }}
          />
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=100"
            alt="Data Processing"
            className="absolute bottom-[20%] left-[15%] w-52 h-52 object-cover rounded-xl floating-image opacity-95 transform rotate-6"
            style={{ animationDelay: '2s' }}
          />
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=100"
            alt="Digital Technology"
            className="absolute bottom-[25%] right-[10%] w-44 h-44 object-cover rounded-xl floating-image opacity-95 transform -rotate-3"
            style={{ animationDelay: '1.5s' }}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center hero-content">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Advanced Document Processing</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500">
                Powered by AI
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Transform your document management with our state-of-the-art AI technology. Process, analyze, and extract insights from your documents with unprecedented accuracy.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link to="/signup" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-violet-500 hover:from-indigo-700 hover:to-violet-600 md:py-4 md:text-lg md:px-10 transition-all duration-300">
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Smart Document Processing</h3>
              <p className="mt-2 text-gray-600">Automatically extract and classify information from your documents using advanced AI algorithms.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Real-time Analysis</h3>
              <p className="mt-2 text-gray-600">Get instant insights and analytics from your processed documents with our real-time analysis engine.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Secure Storage</h3>
              <p className="mt-2 text-gray-600">Keep your documents safe with our enterprise-grade security and encryption protocols.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-indigo-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-white">99%</div>
              <div className="mt-2 text-lg font-medium text-indigo-100">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-white">1M+</div>
              <div className="mt-2 text-lg font-medium text-indigo-100">Documents Processed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-white">500+</div>
              <div className="mt-2 text-lg font-medium text-indigo-100">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Ready to get started?</h2>
            <p className="mt-4 text-lg text-gray-600">Join thousands of satisfied customers who trust our AI-powered document processing.</p>
            <div className="mt-8">
              <Link to="/signup" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold text-indigo-600">eDoc AI</div>
              <p className="mt-2 text-sm text-gray-500">Transforming document processing with AI technology.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Features</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">&copy; 2024 eDoc AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
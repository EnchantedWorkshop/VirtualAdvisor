import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-8">
      <img
        src="/assets/EClogo.png"     
        alt="Virtual Advisor Logo"
        className="w-32 h-32 mb-6"
      />
      <h1 className="text-5xl font-bold text-blue-700 mb-4">
        Welcome to Virtual Advisor
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Plan your degree like a game — unlock courses in skill-tree style.
      </p>
      <Link
        to="/skill-tree"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Get Started
      </Link>
    </div>
  );
}

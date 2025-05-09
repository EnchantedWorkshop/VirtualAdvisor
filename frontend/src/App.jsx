// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SkillTreeCanvas from './components/SkillTreeCanvas';
import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <Routes>
      {/* Landing page at “/” */}
      <Route path="/" element={<LandingPage />} />

      {/* Skill-Tree page */}
      <Route
        path="/skill-tree"
        element={
          <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Center the whole page content */}
            <div className="container mx-auto px-4 flex flex-col">
              <header className="text-center py-8">
                <h1 className="text-4xl font-bold text-blue-600">
                  Virtual Advisor
                </h1>
                <p className="text-xl text-gray-700 mt-2">
                  Reimagining Degree Planning
                </p>
              </header>

              {/* Sub-navigation bar */}
              <NavBar />

              <main className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
                {/* Skill-Tree Canvas */}
                <section
                  id="skill-tree-canvas"
                  className="md:col-span-2 bg-white p-6 rounded-xl shadow-md"
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Skill-Tree Canvas
                  </h2>
                  <SkillTreeCanvas />
                </section>

                {/* Sidebar: Semester Layout & Graduation Gauge */}
                <aside
                  id="controls-and-info"
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  {/* Semester Layout */}
                  <section id="semester-layout" className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                      Semester Layout
                    </h2>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <p className="text-gray-500">
                        Semester columns and course cards will go here.
                      </p>
                    </div>
                  </section>

                  {/* Graduation Gauge */}
                  <section id="graduation-gauge">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                      Graduation Gauge
                    </h2>
                    <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full w-1/4 transition-all" />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      36 Credits Complete
                    </p>
                  </section>
                </aside>
              </main>

              <footer className="text-center py-4 text-gray-600">
                &copy; 2025 Virtual Advisor Project. Inspired by the University
                of Michigan Atlas.
              </footer>
            </div>
          </div>
        }
      />

      {/* Redirect unknown routes back to “/” */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

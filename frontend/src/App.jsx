import React from 'react';
import SkillTreeCanvas from './components/SkillTreeCanvas';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="text-center p-8">
        <h1 className="text-4xl font-bold text-blue-600">Virtual Advisor</h1>
        <p className="text-xl text-gray-700 mt-2">Reimagining Degree Planning</p>
      </header>
      
      {/* Placeholder for main content sections */}
      <main className="w-full max-w-6xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <section id="skill-tree-canvas" className="md:col-span-2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skill-Tree Canvas</h2>
          <SkillTreeCanvas />
        </section>
        
        <aside id="controls-and-info" className="bg-white p-6 rounded-lg shadow-lg">
          <section id="semester-layout" className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Semester Layout</h2>
            <div className="border border-gray-200 p-4 rounded">
              <p className="text-gray-500">Semester columns and course cards will go here.</p>
            </div>
          </section>
          
          <section id="graduation-gauge">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Graduation Gauge</h2>
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div className="bg-green-500 h-6 rounded-full w-1/4"></div> {/* Example progress */}
            </div>
            <p className="text-sm text-gray-600 mt-1 text-center">25% Complete</p>
          </section>
        </aside>
      </main>

      <footer className="text-center p-4 mt-8 text-gray-600">
        <p>&copy; 2025 Virtual Advisor Project. Inspired by the University of Michigan Atlas.</p>
      </footer>
    </div>
  );
}

export default App; 
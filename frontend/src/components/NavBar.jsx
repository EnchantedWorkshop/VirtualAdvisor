// src/components/NavBar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  // shared link styles
  const base =
    'px-5 py-2 rounded-xl font-medium transition-colors';

  return (
    <nav className="w-full bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-4 py-3">
     {/* external link */}
     <a
         href="        https://cse.engin.umich.edu/"     // ← external URL
        target="_blank"                       // open in new tab
        rel="noopener noreferrer"             // security best practice
         className={`${base} text-blue-600 hover:bg-blue-100`}
       >
        Course Homepage
      </a>

        
       {/* external link */}
       <a
         href="https://myadvising.lsa.umich.edu/appointments"     // ← external URL
        target="_blank"                       // open in new tab
        rel="noopener noreferrer"             // security best practice
         className={`${base} text-blue-600 hover:bg-blue-100`}
       >
        Advising Appointment
      </a>

         {/* external link */}
       <a
         href="https://admissions.umich.edu/academics-majors/majors-degrees"     // ← external URL
        target="_blank"                       // open in new tab
        rel="noopener noreferrer"             // security best practice
         className={`${base} text-blue-600 hover:bg-blue-100`}
       >
        Explore Majors
      </a>

        {/* add more NavLink items here as needed */}
      </div>
    </nav>
  );
}

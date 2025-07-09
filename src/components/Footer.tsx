import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 flex items-center gap-2">
              Made with <Heart className="text-red-500" size={16} /> and <Code className="text-blue-400" size={16} /> by Arindam Tripathi
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DevCrewX. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Built with React, TypeScript, and Tailwind CSS. Deployed on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
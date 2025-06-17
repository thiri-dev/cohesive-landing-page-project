import React from 'react';
import robot from '../assets/robot.png';
import world from '../assets/world.png';
import discord from '../assets/discord.png';
import telegram from '../assets/telegram.png';
import linkedin from '../assets/linkedin.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#6e8efb] to-[#a777e3] text-white py-12 px-6 sm:px-10 mt-15 md:mt-20 rounded-t-[100px] ">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          
          {/* Brand Section */}
          <div className="flex flex-col space-y-4 max-w-xs">
            <div className="flex items-center gap-2">
              <img src={robot} alt="Cohesive AI" className="w-10 h-10" />
              <h1 className="text-2xl font-bold text-white">Cohesive</h1>
            </div>
            <p className="text-gray-100 text-sm">
              The AI editor that transforms your content creation workflow with powerful templates and collaboration tools.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="font-semibold text-white">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">AI Editor</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Content Inspiration</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Templates</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-white">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-white">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-200 text-sm">
            © {new Date().getFullYear()} Cohesive AI. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <img src={world} alt="Language" className="w-4 h-4" />
              <span className="text-gray-200 text-sm">English</span>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <img src={discord} alt="Discord" className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <img src={telegram} alt="Telegram" className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
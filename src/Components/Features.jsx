import React from 'react';
import robot_hand from '../assets/robotic-hand.png';
import template from '../assets/template.png';
import team from '../assets/team.png';

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" id='Features'>
      {/* Main Heading */}
      <div className="text-center mb-12 md:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          Meet The Future Of <span className="text-indigo-600">Generative AI</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your content creation with our cutting-edge AI technology
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-8 lg:mx-15">
        {/* Feature 1 */}
        <div className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 p-6 flex flex-col">
          <div className="mb-6 flex justify-center h-20">
            <img src={robot_hand} alt="Best Quality AI Content" className="h-full w-auto object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Quality AI Content</h3>
          <p className="text-gray-600 mb-6 text-base flex-grow">
            Goodbye, Boring Copies. Make Your Content Engaging, Relevant, And Optimized For Conversion With Cohesive.
          </p>
          <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 text-base group/link relative">
            START CREATING
            <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1">→</span>
          </a>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 p-6 flex flex-col">
          <div className="mb-6 flex justify-center h-20">
            <img src={template} alt="2K+ Templates" className="h-full w-auto object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">2K+ Templates To Start With</h3>
          <p className="text-gray-600 mb-6 text-base flex-grow">
            Bring Your Vision To Life At Lightning Speed. Choose From Handpicked Curated Templates And Produce High-Quality.
          </p>
          <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 text-base group/link relative">
            VIEW ALL TEMPLATES
            <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1">→</span>
          </a>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 p-6 flex flex-col">
          <div className="mb-6 flex justify-center h-20">
            <img src={team} alt="Team Collaboration" className="h-full w-auto object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaborate With Your Team</h3>
          <p className="text-gray-600 mb-6 text-base flex-grow">
            Bid Farewell To Endless Email And Slack Threads. Collaborate In Real-Time, Keep Everyone On The Same Page.
          </p>
          <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 text-base group/link relative">
            SIGN UP NOW
            <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
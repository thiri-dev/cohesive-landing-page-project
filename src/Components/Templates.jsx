import React from 'react';
import youtube from '../assets/youtube.jpeg';
import facebook from '../assets/facebook.jpeg';
import tik_tok from '../assets/tik-tok.jpeg';
import instagram from '../assets/instagram.jpeg';
import star from '../assets/star.png';
import heart from '../assets/heart.png';
import facebook_round from '../assets/facebook_round.png';
import youtube_round from '../assets/youtube_round.png';
import tiktok_round from '../assets/tiktok_round.png';
import insta_round from '../assets/insta_round.png';

const Templates = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="Templates">
      {/* Main Heading */}
      <div className="text-center mb-12 md:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          Our Most Popular <span className="text-indigo-600">Templates</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Ready-to-use templates for all your content needs
        </p>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 md:mx-8 lg:mx-15">
        {/* YouTube Template */}
        <div className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
          <div className="relative">
            <img
              src={youtube}
              alt="YouTube Template"
              className="w-full h-48 object-cover"
            />
            <img 
              src={youtube_round} 
              alt="YouTube Icon" 
              className="w-10 h-10 absolute -bottom-4 left-4 border-2 border-white rounded-full shadow-md"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow pt-8"> {/* Added pt-8 to account for icon overlap */}
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Script for YouTube Video</h3>
            <p className="text-gray-600 mb-6 text-base flex-grow">
              Generate scripts that engage your audience
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-2">
                <img src={star} alt="Rating" className="w-5 h-5" />
                <span className="text-gray-700 text-sm">292.8K</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={heart} alt="Likes" className="w-5 h-5" />
                <span className="text-gray-700 text-sm">17</span>
              </div>
            </div>
          </div>
        </div>

        {/* Facebook Template */}
        <div className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
          <div className="relative">
            <img
              src={facebook}
              alt="Facebook Template"
              className="w-full h-48 object-cover"
            />
            <img 
              src={facebook_round} 
              alt="Facebook Icon" 
              className="w-10 h-10 absolute -bottom-4 left-4 border-2 border-white rounded-full shadow-md"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow pt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Create Facebook Post</h3>
            <p className="text-gray-600 mb-6 text-base flex-grow">
              Generate scripts that engage your audience
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-2">
                <img src={star} alt="Rating" className="w-5 h-5" />
                <span className="text-gray-700 text-sm">292.8K</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={heart} alt="Likes" className="w-5 h-5" />
                <span className="text-gray-700 text-sm">17</span>
              </div>
            </div>
          </div>
        </div>

        {/* TikTok Template */}
        <div className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
          <div className="relative">
            <img
              src={tik_tok}
              alt="TikTok Template"
              className="w-full h-48 object-cover"
            />
            <img 
              src={tiktok_round} 
              alt="TikTok Icon" 
              className="w-10 h-10 absolute -bottom-4 left-4 border-2 border-white rounded-full shadow-md"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow pt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Make TikTok Video Content</h3>
            <p className="text-gray-600 mb-6 text-base flex-grow">
              Generate scripts that engage your audience
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-2">
                <img src={star} alt="Rating" className="w-5 h-5" />
                <span className="text-gray-700 text-sm">292.8K</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={heart} alt="Likes" className="w-5 h-5" />
                <span className="text-gray-700 text-sm">17</span>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Template */}
        <div className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
          <div className="relative">
            <img
              src={instagram}
              alt="Instagram Template"
              className="w-full h-48 object-cover"
            />
            <img 
              src={insta_round} 
              alt="Instagram Icon" 
              className="w-10 h-10 absolute -bottom-4 left-4 border-2 border-white rounded-full shadow-md"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow pt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Create Instagram Post</h3>
            <p className="text-gray-600 mb-6 text-base flex-grow">
              Generate scripts that engage your audience
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-2">
                <img src={star} alt="Rating" className="w-5 h-5" />
                <span className="text-gray-700 text-sm">292.8K</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={heart} alt="Likes" className="w-5 h-5" />
                <span className="text-gray-700 text-sm">17</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
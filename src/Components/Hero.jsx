import React from 'react';
import hero_robot from '../assets/bot.png';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#6e8efb] to-[#a777e3] text-white py-16 md:py-24 px-5 sm:px-10 lg:px-20 rounded-[40px] md:rounded-[70px] mx-4 md:mx-8 lg:mx-15 overflow-hidden" id='Home'>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto gap-8 lg:gap-12 xl:gap-20">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#00FFB2] mb-3 md:mb-4">
            03 MONTHS EXTRA ON YEARLY PLANS
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold leading-[1.15] md:leading-[1.2] mb-4 md:mb-6">
            Create Magical Content <br className="hidden sm:block" /> With The Most AI
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-100 mb-5 md:mb-7">
            Future Of Generative AI
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            End ChatGPT Prompt Strategies. Create, Refine, Edit. And Publish Seamlessly With Cohesive.
          </p>
          <button className="bg-white text-[#6e8efb] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
            TRY IT'S FREE
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 w-full max-w-md lg:max-w-none z-10">
          <img
            src={hero_robot}
            alt="AI Illustration"
            className="w-full h-auto max-h-[400px] object-contain lg:object-cover lg:max-h-[500px] xl:max-h-[600px] animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
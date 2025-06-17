import React from 'react';

const Pricing = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#6e8efb] to-[#a777e3] text-white py-12 md:py-16 px-6 sm:px-12 lg:px-24 rounded-[40px] overflow-hidden mx-4 sm:mx-8 md:mx-12 lg:mx-20 mt-10 md:mt-15" id='Pricing'>
      {/* Gradient background elements */}
      <div className="absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#6e8efb33] rounded-full filter blur-[80px]"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#a777e333] rounded-full filter blur-[80px]"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-5 md:mb-6 leading-tight'>
          Start using <span className="text-[#00FFB2]">Cohesive</span> today!
        </h1>
        
        <p className='text-gray-100 text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto md:w-125'>
          Experience The World's Most Powerful AI Editor, Where Human Creativity Meets AI Brilliance.
        </p>
        
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6'>
          <button className="bg-white text-[#6e8efb] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
            TRY IT FREE
          </button>
          
          <button className="text-white bg-transparent border-2 border-[#00FFB2] px-6 py-3 rounded-full font-medium hover:bg-[#00FFB2] hover:text-[#6e8efb] transition-colors duration-300">
            No credit card required
          </button>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00FFB2] rounded-full filter blur-[60px] opacity-20"></div>
    </div>
  );
};

export default Pricing;
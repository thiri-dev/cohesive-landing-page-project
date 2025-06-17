import React, { useState } from 'react';

const ModernQAAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const qaItems = [
    {
      question: "How do we calculate AI Voices pricing?",
      answer: "Our pricing is based on usage metrics including voice minutes generated and number of unique voices used."
    },
    {
      question: "What is the Image Generation limit?",
      answer: "Duration of the request to generate Speech from a selected block of text. Create time: 50 mins. Create audio (3 hrs videos or 9 hours are video that are 10 mins long). Agency plan: > 360 mins."
    },
    {
      question: "What's the difference between Creator and Agency Plan?",
      answer: "The Creator plan is designed for individual content creators with basic needs, while the Agency plan offers advanced features and higher limits for teams and businesses."
    },
    {
      question: "Can I upgrade from monthly to annual billing?",
      answer: "Yes, you can upgrade from monthly to annual billing at any time from your account settings."
    },
    {
      question: "Can I invite more users to my Creator plan?",
      answer: "The Creator plan allows up to 2 additional team members. For more users, consider upgrading to the Agency plan."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6" id='q&as'>
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {qaItems.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
              className={`w-full px-6 py-5 text-left flex justify-between items-center transition-all ${activeIndex === index ? 'bg-indigo-50' : 'bg-white'}`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg font-medium text-gray-800">{item.question}</span>
              <div className={`w-5 h-5 relative transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-indigo-600 rounded-full transform -translate-y-1/2"></div>
                <div className={`absolute top-1/2 left-1/2 w-0.5 h-full bg-indigo-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${activeIndex === index ? 'opacity-0' : 'opacity-100'}`}></div>
              </div>
            </button>
            
            <div
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 pb-5' : 'max-h-0'}`}
            >
              <p className="text-gray-600 pb-4">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModernQAAccordion;
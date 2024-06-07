"use client";
import { useState } from 'react';
import { IoMdAdd } from "react-icons/io";


interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What is Toingg\'s pricing?',
      answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores provident, tempora quos in ipsum, placeat est, unde nesciunt dignissimos architecto fugit eos. Iste provident expedita explicabo facilis nisi culpa maxime',
    },
    {
      question: 'What is Toingg?',
      answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores provident, tempora quos in ipsum, placeat est, unde nesciunt dignissimos architecto fugit eos. Iste provident expedita explicabo facilis nisi culpa maxime',
    },
    {
      question: 'How secure is Toingg?',
      answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores provident, tempora quos in ipsum, placeat est, unde nesciunt dignissimos architecto fugit eos. Iste provident expedita explicabo facilis nisi culpa maxime',
    },
    {
        question: 'How does billing work?',
        answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores provident, tempora quos in ipsum, placeat est, unde nesciunt dignissimos architecto fugit eos. Iste provident expedita explicabo facilis nisi culpa maxime',
      },
      {
        question: 'What phone numbers can i use with Toingg?',
        answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores provident, tempora quos in ipsum, placeat est, unde nesciunt dignissimos architecto fugit eos. Iste provident expedita explicabo facilis nisi culpa maxime',
      },
      {
        question: 'Does Toingg support multiple language?',
        answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores provident, tempora quos in ipsum, placeat est, unde nesciunt dignissimos architecto fugit eos. Iste provident expedita explicabo facilis nisi culpa maxime',
      },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" mt-40 mb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className=" p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => handleToggle(index)}>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-black">
                  {faq.question}
                </h3>
                <IoMdAdd/>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-sm sm:text-base md:text-lg text-black">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

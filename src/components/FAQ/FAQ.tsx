import { useState } from "react";

const FAQ = () => {
  const [openIndexLeft, setOpenIndexLeft] = useState<number | null>(null);
  const [openIndexRight, setOpenIndexRight] = useState<number | null>(null);

  const toggleFAQLeft = (index: number) => {
    setOpenIndexLeft(openIndexLeft === index ? null : index);
  };

  const toggleFAQRight = (index: number) => {
    setOpenIndexRight(openIndexRight === index ? null : index);
  };

  const faqs1 = [
    {
      question:
        "Who is covered under Workmen's Compensation Insurance in the UAE?",
      answer:
        "All employees working in the UAE are covered under the Workmen's Compensation Insurance policy, including full-time, part-time, temporary, and contract employees.",
    },
    {
      question:
        "What types of injuries or illnesses are covered under the policy?",
      answer:
        "The policy covers occupational diseases and work-related injuries caused due to workplace accidents.",
    },
    {
      question:
        "What is the benefit for the employees in case of injury or illness?",
      answer:
        "Employees are entitled to medical treatment, compensation for lost wages, and disability benefits.",
    },
    {
      question:
        "Is Workmen's Compensation Insurance mandatory for businesses in the UAE?",
      answer:
        "Yes, it is mandatory for businesses to have Workmen's Compensation Insurance to cover their employees.",
    },
  ];
  const faqs2 = [
    {
      question:
        "Who is covered under Workmen's Compensation Insurance in the UAE?",
      answer:
        "All employees working in the UAE are covered under the Workmen's Compensation Insurance policy, including full-time, part-time, temporary, and contract employees.",
    },
    {
      question:
        "What types of injuries or illnesses are covered under the policy?",
      answer:
        "The policy covers occupational diseases and work-related injuries caused due to workplace accidents.",
    },
    {
      question:
        "What is the benefit for the employees in case of injury or illness?",
      answer:
        "Employees are entitled to medical treatment, compensation for lost wages, and disability benefits.",
    },
    {
      question:
        "Is Workmen's Compensation Insurance mandatory for businesses in the UAE?",
      answer:
        "Yes, it is mandatory for businesses to have Workmen's Compensation Insurance to cover their employees.",
    },
  ];
  return (
    <div className="w-full mx-auto py-16 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
      <h2 className="text-3xl font-bold text-gray-900 ">
        Frequently Asked Questions
      </h2>
      <p className=" text-gray-600 mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="flex gap-6 w-full">
        <div className="mt-6 space-y-4 w-[50%]">
          {faqs1.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full text-left p-4 font-bold text-indigo-900 bg-[#fff9f6] hover:bg-[#fff9f6] text-xl"
                onClick={() => toggleFAQLeft(index)}
              >
                {faq.question}
              </button>
              {openIndexLeft === index && (
                <div className="p-4 text-gray-600 bg-gray-50">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-4 w-[50%]">
          {faqs2.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full text-left p-4 font-bold text-indigo-900 bg-[#fff9f6] hover:bg-[#fff9f6] text-xl"
                onClick={() => toggleFAQRight(index)}
              >
                {faq.question}
              </button>
              {openIndexRight === index && (
                <div className="p-4 text-gray-600 bg-gray-50">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

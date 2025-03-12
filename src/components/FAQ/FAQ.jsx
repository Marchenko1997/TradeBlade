import { useState } from "react";
import { faqData } from "../data/faqData";
import {
  FAQContainer,
  FAQSection,
  FAQTitle,
  FAQItem,
  FAQItemContent,
  EmbeddedContent,
} from "./FAQ.styled";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <FAQSection id="faq">
      <FAQContainer>
        <FAQTitle>Часто задаваемые вопросы</FAQTitle>
        <div>
          {faqData.map((item, index) => (
            <FAQItem key={index}>
              <FAQItemContent
                className={openIndex === index ? "open" : ""}
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </FAQItemContent>
              {openIndex === index && (
                <EmbeddedContent>{item.answer}</EmbeddedContent>
              )}
            </FAQItem>
          ))}
        </div>
      </FAQContainer>
    </FAQSection>
  );
};

export default FAQ;

import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export const MCQ = ({ question, mcqOptions, handleMCQ }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedAnswer(value);
    handleMCQ(value);
  };

  return (
    <>
      <Form.Label>{question}</Form.Label>
      {mcqOptions.map((option, index) => (
        <Form.Check
          key={index}
          type="radio"
          label={option}
          value={option}
          checked={selectedAnswer === option}
          onChange={handleCheckboxChange}
        />
      ))}
    </>
  );
};

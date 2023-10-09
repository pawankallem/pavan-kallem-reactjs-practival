// src/components/QuestionForm.js
import React, { useState } from "react";
import { Descriptive } from "../Descriptive";
import { OptionsDropdown } from "../OptionsDropdown";
import { TextInput } from "../TextInput";
import { MCQ } from "../MCQ";
import { DatePickerInput } from "../DatePickerInput";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";

const numOfOptions1 = [
  "Select no.of Years",
  "fresher",
  "1 year",
  "2 year",
  "3 year",
];
const numOfOptions2 = [
  "Email",
  "Phone Calls",
  "Video Conferencing (e.g., Zoom, Microsoft Teams)",
  "In-Person Meetings",
  "Chat/Messaging Apps (e.g., Slack, Microsoft Teams)",
];

const mcqOptions1 = ["CodeIgniter", "Laravel", "Yii", "CakePHP"];
const mcqOptions2 = [
  "Health Insurance",
  "Flexible Work Hours",
  "Gym Memberships",
  "Mental Health Support",
];
export const QuestionForm = () => {
  const descriptiveAnswer = (event) => {
    console.log("descript : ", event);
  };

  const handleSelect = (event) => {
    console.log("dropdown : ", event);
  };

  const handleInput = (event) => {
    console.log("handleInput : ", event);
  };

  const handleMCQ = (event) => {
    console.log("handleMCQ : ", event);
  };

  const handleDateChange = (event) => {
    console.log("handleDateChange : ", event);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Please Fill The Survey Form</h2>
        </Col>
      </Row>
      <Row>
        <Form>
        <Stack gap={3}>
          <Form.Group className="mb-3">
            <Descriptive
              quation="Please describe any suggestions or improvements you would like to see in our company's workplace environment."
              descriptiveAnswer={descriptiveAnswer}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Descriptive
              quation="Share your thoughts on how we can enhance our team collaboration and communication within the organization."
              descriptiveAnswer={descriptiveAnswer}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <MCQ
              question="Which PHP frameworks do you learn from here ?"
              mcqOptions={mcqOptions1}
              handleMCQ={handleMCQ}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <MCQ
              question="Which of the following benefits do you find most valuable in our company's employee wellness program?"
              mcqOptions={mcqOptions2}
              handleMCQ={handleMCQ}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <OptionsDropdown
              quation="How many years of experience do you have in PHP ?"
              options={numOfOptions1}
              handleSelect={handleSelect}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <OptionsDropdown
              quation="What is your preferred method of communication for work-related discussions?"
              options={numOfOptions2}
              handleSelect={handleSelect}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <TextInput quation="Enter your name :" handleInput={handleInput} />
          </Form.Group>
          <Form.Group className="mb-3">
            <TextInput
              quation="What is your favorite book?"
              handleInput={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <DatePickerInput
              quation="Enter your birth date:"
              handleDateChange={handleDateChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <DatePickerInput
              quation="Enter the date of your most recent professional training or certification:"
              handleDateChange={handleDateChange}
            />
          </Form.Group>
          <Button>
            Submit
          </Button>
          </Stack>
        </Form>
      </Row>
    </Container>
  );
};

// src/components/QuestionForm.js
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { OptionsDropdown } from "../OptionsDropdown";
import axios from "axios";
import { Stack } from "react-bootstrap";

export const AddQuations = () => {
  const [numberOfOptions, setNumberOfOptions] = useState([1]);
  const [question, setQuestion] = useState({
    title: "",
    description: "",
    questionType: "",
    status: "",
    options: {},
    correctOption: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestion({ ...question, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      // const response = await axios.post(
      //   "http://localhost:4001/question",
      //   question
      // );
      console.log("question : ", question);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Add a New Question</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Stack gap={3}>
              <Form.Group as={Row} controlId="title">
                <Col>
                  <Form.Label>Title</Form.Label>
                </Col>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    name="title"
                    value={question.title}
                    onChange={handleInputChange}
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="description">
                <Col>
                  <Form.Label>Description</Form.Label>
                </Col>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    name="description"
                    value={question.description}
                    onChange={handleInputChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="questionType">
                <Col>
                  <Form.Label>Question Type :</Form.Label>
                </Col>
                <Col sm="10">
                  <OptionsDropdown
                    options={[
                      "Descriptive",
                      "MCQ",
                      "DropDown",
                      "ShortAnswer",
                      "Date",
                    ]}
                    handleSelect={(event) => {
                      event.target.name = "questionType";
                      handleInputChange(event);
                    }}
                  />
                </Col>
              </Form.Group>
              {(question.questionType === "MCQ" ||
                question.questionType === "DropDown") && (
                <>
                  <Form.Group as={Row} controlId="questionType">
                    <Col>
                      <Form.Label>Question Type :</Form.Label>
                    </Col>
                    <Col sm="10">
                      <Stack gap={2}>
                        {numberOfOptions.map((elem, index) => (
                          <Row key={index}>
                            <Col>
                              <Form.Control
                                type="text"
                                name="options"
                                onChange={(event) => {
                                  question.options[elem] = event.target.value;
                                }}
                                required
                              />
                            </Col>
                            <Col sm="4">
                              {index === 0 && (
                                <Button
                                  variant="primary"
                                  onClick={() => {
                                    console.log("qy : ", question);
                                    setNumberOfOptions([
                                      ...numberOfOptions,
                                      numberOfOptions.length + 1,
                                    ]);
                                  }}
                                >
                                  More Options
                                </Button>
                              )}
                            </Col>
                          </Row>
                        ))}
                      </Stack>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="correctOption">
                    <Col>
                      <Form.Label>Correct Option</Form.Label>
                    </Col>
                    <Col sm="10">
                      <Form.Control
                        type="text"
                        name="correctOption"
                        value={question.correctOption}
                        onChange={handleInputChange}
                        required
                      />
                    </Col>
                  </Form.Group>
                </>
              )}
              <Form.Group as={Row} controlId="status">
                <Col>
                  <Form.Label>Status :</Form.Label>
                </Col>
                <Col sm="10">
                  <OptionsDropdown
                    options={["Published", "Unpublished"]}
                    handleSelect={(event) => {
                      event.target.name = "status";
                      handleInputChange(event);
                    }}
                  />
                </Col>
              </Form.Group>
              <Button variant="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </Stack>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

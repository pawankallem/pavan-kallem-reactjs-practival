import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePickerInput = ({ quation, handleDateChange }) => {
  const [birthDate, setBirthDate] = useState(null);

  return (
    <div>
      <Form.Group as={Row} controlId="birthdate">
        <Col sm={5}>
          <Form.Label>{quation}</Form.Label>
        </Col>
        <Col sm="5">
          <DatePicker
            selected={birthDate}
            onChange={(date) => {
              setBirthDate(date);
              handleDateChange(date);
            }}
            className="form-control"
          />
        </Col>
      </Form.Group>
    </div>
  );
};

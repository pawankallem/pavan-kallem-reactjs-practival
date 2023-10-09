import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export const OptionsDropdown = ({ quation,options, handleSelect }) => {
  const [text,setText] = useState("");
  const handleChange = (event) => {
    console.log("kyc",event.target.value)
  }
  return (
    <>
      <FloatingLabel controlId="floatingSelect" label={quation}>
        <Form.Select aria-label="Floating label select example" onChange={handleSelect}>
          {
            options.map((string,index) => (
              <option value={string} key={index}>{string}</option>
            ))
          }
        </Form.Select>
      </FloatingLabel>
    </>
  );
};

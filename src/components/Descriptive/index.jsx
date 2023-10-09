import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export const Descriptive = ({ quation, descriptiveAnswer }) => {
  return (
    <>
      <FloatingLabel controlId="floatingTextarea2" label={quation}>
        <Form.Control
          as="textarea"
          placeholder={quation}
          style={{ height: "100px" }}
          onChange={descriptiveAnswer}
        />
      </FloatingLabel>
    </>
  );
};

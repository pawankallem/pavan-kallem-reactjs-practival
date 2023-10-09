import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export const TextInput = ({ quation, handleInput }) => {
  return (
    <>
      <FloatingLabel controlId="floatingInputGrid" label={quation}>
          <Form.Control type="email" placeholder="name@example.com" onChange={handleInput} />
        </FloatingLabel>
    </>
  );
};

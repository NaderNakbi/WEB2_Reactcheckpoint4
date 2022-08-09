import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Form.css';
function Form1() {
  return (
    <div className="Nader">
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="mb-2">Email address</Form.Label>
        <Form.Control className="mb-1" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="mb-2">Password</Form.Label>
        <Form.Control className="mb-1"type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check className="mb-2" type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form></div>
  );
}

export default Form1;
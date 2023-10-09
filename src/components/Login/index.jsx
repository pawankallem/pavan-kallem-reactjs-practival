import React from "react";
import { Button, Container, Form } from "react-bootstrap";

export const Login = () => {
  return (
    <Container>
      <Form className="form-signin">
        <img
          className="mb-4"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt=""
          width="72"
          height="72"
        />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <Form.Label htmlFor="inputEmail" className="sr-only">
          Email address
        </Form.Label>
        <Form.Control
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autoFocus
        />
        <Form.Label htmlFor="inputPassword" className="sr-only">
          Password
        </Form.Label>
        <Form.Control
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <div className="checkbox mb-3">
          <Form.Label>
            <Form.Control type="checkbox" value="remember-me" /> Remember me
          </Form.Label>
        </div>
        <Button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </Button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
      </Form>
    </Container>
  );
};

import React from 'react';
import { Card, Form, Container, Row, Col, Button } from 'react-bootstrap';
import { ErrorMessage } from '@hookform/error-message';

function FormInput({
  className,
  md,
  placeholder,
  type,
  register,
  error,
  label,
  name,
}) {
  return (
    <Col className={className} md={md}>
      <Form.Group>
        <label>{label}</label>
        <Form.Control
          placeholder={placeholder}
          type={type}
          {...register(name)}
        ></Form.Control>
      </Form.Group>
      <ErrorMessage
        errors={error}
        name={name}
        render={({ message }) => <p>{message}</p>}
      />
    </Col>
  );
}

export default FormInput;

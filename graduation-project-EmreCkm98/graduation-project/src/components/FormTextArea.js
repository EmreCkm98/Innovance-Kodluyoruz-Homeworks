import React from 'react';
import { Card, Form, Container, Row, Col, Button } from 'react-bootstrap';
import { ErrorMessage } from '@hookform/error-message';

function FormTextArea({
  className,
  md,
  placeholder,

  register,
  error,
  label,
  name,
  rows,
  cols,
  as,
}) {
  return (
    <Col className={className} md={md}>
      <Form.Group>
        <label>{label}</label>
        <Form.Control
          placeholder={placeholder}
          rows={rows}
          cols={cols}
          as={as}
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

export default FormTextArea;

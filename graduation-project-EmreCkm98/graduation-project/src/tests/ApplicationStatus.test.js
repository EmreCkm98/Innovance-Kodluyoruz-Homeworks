import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ApplicationStatus from '../pages/ApplicationStatus';

describe('its should render correctly', () => {
  beforeEach(() => {
    render(
      <Router>
        <ApplicationStatus />
      </Router>
    );
  });

  test('render  name input', () => {
    const name = screen.getByTestId('name');
    expect(name).toBeInTheDocument();
  });
  test('render  lastname input', () => {
    const lastname = screen.getByTestId('lastname');
    expect(lastname).toBeInTheDocument();
  });
  test('render  age input', () => {
    const age = screen.getByTestId('age');
    expect(age).toBeInTheDocument();
  });
  test('render  address input', () => {
    const address = screen.getByTestId('address');
    expect(address).toBeInTheDocument();
  });
  test('render  reason input', () => {
    const reason = screen.getByTestId('reasonOfInput');
    expect(reason).toBeInTheDocument();
  });
  test('render  send button', () => {
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
  });
  test('render  appCode', () => {
    const appCode = screen.getByTestId('appCode');
    expect(appCode).toBeInTheDocument();
  });
  test('render  apply status', () => {
    const status = screen.getByTestId('status');
    expect(status).toBeInTheDocument();
  });
});

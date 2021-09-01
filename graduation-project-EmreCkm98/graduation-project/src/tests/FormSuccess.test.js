import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import FormSuccess from '../pages/FormSuccess';

describe('has to be render correctly', () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <Router history={history}>
        <FormSuccess />
      </Router>
    );
  });

  test('render crud  name area', () => {
    const name = screen.getByTestId('name');
    expect(name).toBeInTheDocument();
  });
  test('render crud  lastname area', () => {
    const lastname = screen.getByTestId('lastName');
    expect(lastname).toBeInTheDocument();
  });
  test('render crud  age area', () => {
    const category = screen.getByTestId('age');
    expect(category).toBeInTheDocument();
  });
  test('render crud  adress area', () => {
    const status = screen.getByTestId('adress');
    expect(status).toBeInTheDocument();
  });
  test('render crud  tc area', () => {
    const status = screen.getByTestId('tc');
    expect(status).toBeInTheDocument();
  });
  test('render crud  resonOfApply area', () => {
    const status = screen.getByTestId('resonOfApply');
    expect(status).toBeInTheDocument();
  });
});

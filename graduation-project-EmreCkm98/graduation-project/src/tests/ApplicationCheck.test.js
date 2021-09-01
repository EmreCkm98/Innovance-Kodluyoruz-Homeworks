import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ApplicationCheck from '../pages/ApplicationCheck';

describe('has to be render correctly', () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <Router history={history}>
        <ApplicationCheck />
      </Router>
    );
  });

  test('render crud  appCode area', () => {
    const appCode = screen.getByTestId('appCode');
    expect(appCode).toBeInTheDocument();
  });
  test('render crud  search area', () => {
    const search = screen.getByTestId('search');
    expect(search).toBeInTheDocument();
  });
});

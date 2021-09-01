import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Admin from '../pages/Admin';
import { AuthContext } from '../context/AuthContext';

const mockLogin = jest.fn();

const mockValue = {
  login: mockLogin,
};

describe('its should render correctly', () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <AuthContext.Provider value={mockValue}>
        <Router history={history}>
          <Admin />
        </Router>
      </AuthContext.Provider>
    );
  });

  test('render  userName', () => {
    const userName = screen.getByTestId('userName');
    expect(userName).toBeInTheDocument();
  });
  test('render password', () => {
    const password = screen.getByTestId('password');
    expect(password).toBeInTheDocument();
  });
  test('render login', () => {
    const login = screen.getByTestId('login');
    expect(login).toBeInTheDocument();
  });

  test('not redirect to admin page', async () => {
    const loginButton = screen.getByTestId('login');
    fireEvent.click(loginButton);
    expect(history.location.pathname).not.toBe('/admin');
  });

  test('should not display error when value is valid', async () => {
    fireEvent.input(screen.getByTestId('userName'), {
      target: {
        value: 'kodluyoruz',
      },
    });
    fireEvent.input(screen.getByTestId('password'), {
      target: {
        value: 'bootcamp109',
      },
    });

    await act(async () => {
      fireEvent.submit(screen.getByTestId('login'));
    });

    expect(mockLogin).toBeCalledWith({
      username: 'kodluyoruz',
      password: 'bootcamp109',
    });
    expect(history.location.pathname).toBe('/');
  });
});

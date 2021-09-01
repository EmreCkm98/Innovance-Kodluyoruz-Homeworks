import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from './navigation/RouterConfig';
import AuthProvider from './context/AuthContext';
import Header from '..//src/components/NavBar';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />

          <RouterConfig />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

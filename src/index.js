import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const BASENAME = "/goit-react-hw-05-movies"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode basename={BASENAME}>
    <BrowserRouter >
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

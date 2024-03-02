import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';

const d = new Date();
let ano = d.getUTCFullYear();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <footer className='footer'>
      <p>
        Developed by{' '}
        <a
          href="https://portfolio-lourenco.vercel.app/"
          target="_blank"
          
        >
          LourençoDev&copy;
        </a>{' '}
        {ano}
      </p>
    </footer>
  </React.StrictMode>,
);

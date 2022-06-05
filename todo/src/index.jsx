import './index.css';
import React from 'react';
import {
  createRoot
} from 'react-dom/client';
import ToDO from './ToDO';


const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

root.render(
  <React.StrictMode>
    <ToDO />
  </React.StrictMode>,
)

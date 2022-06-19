import './index.css';
import React from 'react';
import {
  createRoot
} from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import ToDO from './components/ToDO';


const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

root.render(
  <React.StrictMode>
    <Provider store={store}>

      <ToDO />

    </Provider>
  </React.StrictMode>,
)

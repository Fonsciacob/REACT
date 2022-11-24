import React from 'react';
import ReactDOM from 'react-dom/client';
import { CallbackHooks } from './memos/CallbackHooks';
import { Padre } from './work-memo/Padre';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <Padre />
  //</React.StrictMode>
);

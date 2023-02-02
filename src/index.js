import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { App } from 'components/App';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter basename="/practic-with-mentor-6">
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);

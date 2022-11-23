import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './flag-icon-css/css/flag-icon.min.css'
import './i18next';
import { Provider } from 'react-redux';
import store from './redux/store';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <Provider store={store}>
        {/* <Routes>
          <Route path="/*" element={<App />} />         
        </Routes> */}
        <App />
      </Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

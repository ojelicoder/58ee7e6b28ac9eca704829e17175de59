import React from 'react';
import ReactDOM from 'react-dom';
import route from './core/routes';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <main className='main'>
      <BrowserRouter>
        <Routes>
          {route.map((page, index) => <Route path={page.path} element={<page.component/> } key={index}/>)}
        </Routes>
      </BrowserRouter>
    </main>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
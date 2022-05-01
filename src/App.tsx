import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Pages from './Pages/Pages';
import Header from './Component/Header';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (<>
  
  <BrowserRouter>
  
    <nav id="colorlib-main-nav" className="border" role="navigation">
    <Link to="/" className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i></i></Link>
      <div className="js-fullheight colorlib-table">
        
      </div>
    </nav>
    <div id="colorlib-page">
    <Header/>
        <section className="ftco-counter tab-content" id="section-counter">
          <Pages/>
        </section>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;

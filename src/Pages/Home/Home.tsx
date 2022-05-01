import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return(
            <div id="home" className="header-hero bg_cover d-lg-flex align-items-center">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
            <div className="shape shape-6"></div>
            <div className="container">
              <div className="row align-items-center justify-content-center justify-content-lg-between">
                <div className="col-lg-6 col-md-10">
                  <div className="header-hero-content">
                    <h3 className="header-title wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.2s"
                      style={{"visibility": "visible", "animationDuration": "1.3s", "animationDelay": "0.2s", animationName: "fadeInLeftBig"}}>
                      <span>Turn your cellphone</span>  into SMS gateway 4 free.</h3>
                      Turn your cellphone
                    <p className="text wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.6s"
                      style={{"visibility": "visible", "animationDuration": "1.3s", "animationDelay": "0.6s", "animationName": "fadeInLeftBig"}}>
                      Turn your cellphone into SMS gateway 4 free</p>
                    <ul className="d-flex">
                      <li><Link to="/" className="main-btn wow fadeInLeftBig"
                          data-wow-duration="1.3s" data-wow-delay="0.8s"
                          style={{"visibility": "visible", "animationDuration": "1.3s", "animationDelay": "0.8s", "animationName": "fadeInLeftBig"}}>Download
                          Now</Link></li>
                      <li><Link to="/"
                          className="header-video video-popup wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="1.2s"
                          style={{"visibility": "visible", "animationDuration": "1.3s", "animationDelay": "1.2s", "animationName": "fadeInLeftBig"}}><i
                            className="lni lni-play"></i></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-10">
                  <div className="header-image">
                    <img src="/img/header-app.png" alt="app"
                      className="image wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.5s"
                      style={{"visibility": "visible", "animationDuration": "1.3s", "animationDelay": "0.5s", "animationName": "fadeInRightBig"}}/>
                    <div className="image-shape wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.8s"
                      style={{"visibility": "visible", "animationDuration": "1.3s", "animationDelay": "0.8s", "animationName": "fadeInRightBig"}}>
                      <img src="/img/image-shape.svg" alt="shape"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-shape-1 d-none d-md-block"></div>
            <div className="header-shape-2">
              <img src="/img/header-shape-2.svg" alt="shape"/>
            </div>
          </div>
          );
}
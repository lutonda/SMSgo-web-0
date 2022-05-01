import React from "react";
import { Link } from "react-router-dom";

export default function Api() {
  return (
    <>
      <section id="api" className="about-area pt-70 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-image mt-50 wow fadeInLeftBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.5s"
                style={{
                  visibility: "visible",
                  animationDuration: "1.3s",
                  animationDelay: "0.5s",
                  animationName: "fadeInLeftBig",
                }}
              >
                <div className="about-shape"></div>
                <img
                  className="app"
                  src="/img/about-app.png"
                  alt="app"
                />
              </div>
            </div>
            <div className="col-lg-6 ">
              <div
                className="about-content mt-50 wow fadeInRightBig download-content"
                data-wow-duration="1.3s"
                data-wow-delay="0.5s"
                style={{
                  visibility: "visible",
                  animationDuration: "1.3s",
                  animationDelay: "0.5s",
                  animationName: "fadeInLeftBig",
                }}
              >
                <div className="section-title">
                  <h3 className="title">The Api</h3>
                  <p className="text">
                    https://<span id="server"></span>
                    /api/v2/sendsms?apikey=q423$frg3o12iaefkn-23&message=Heythere&phonId=4R&to=00244917663792
                  </p>
                </div>
                <ul>
                    <li>
                        <Link className="app-store" to="/">
                            <img src="/img/app-store.png" alt="store"/>
                        </Link>
                    </li>
                    <li>
                        <Link className="play-store" to="/">
                            <img src="/img/play-store.png" alt="store"/>
                        </Link>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

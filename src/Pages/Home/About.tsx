import React from "react";

export default function About() {
  return (
    <>
      <section id="features" className="features-area pt-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center pb-25">
                <h3 className="title">This is How it is.</h3>
                <p className="text">
                It's time to use our SMS gateway because it will give you
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="features-items">
                <div
                  className="single-features features-color-1 d-sm-flex mt-30 wow fadeInUpBig"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1.3s",
                    animationDelay: "0.2s",
                    animationName: "fadeInUpBig",
                  }}
                >
                  <div className="features-icon d-flex justify-content-center align-items-center">
                    <i className="lni lni-laptop-phone"></i>
                  </div>
                  <div className="features-content media-body">
                    <h4 className="features-title">821 SMS</h4>
                    <p className="text">
                        sent today
                    </p>
                  </div>
                </div>
                <div
                  className="single-features features-color-2 d-sm-flex mt-30 wow fadeInUpBig"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1.3s",
                    animationDelay: "0.4s",
                    animationName: "fadeInUpBig",
                  }}
                >
                  <div className="features-icon d-flex justify-content-center align-items-center">
                    <i className="lni lni-leaf"></i>
                  </div>
                  <div className="features-content media-body">
                    <h4 className="features-title">71</h4>
                    <p className="text">
                        happy world wide users
                    </p>
                  </div>
                </div>
                <div
                  className="single-features features-color-3 d-sm-flex mt-30 wow fadeInUpBig"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.6s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1.3s",
                    animationDelay: "0.6s",
                    animationName: "fadeInUpBig",
                  }}
                >
                  <div className="features-icon d-flex justify-content-center align-items-center">
                    <i className="lni lni-bootstrap"></i>
                  </div>
                  <div className="features-content media-body">
                    <h4 className="features-title">56</h4>
                    <p className="text">
                    Cups of coffee
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="features-image wow fadeInRightBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.5s"
                style={{
                  visibility: "visible",
                  animationDuration: "1.3s",
                  animationDelay: "0.5s",
                  animationName: "fadeInUpBig",
                }}
              >
                <img className="image" src="/img/features-app.png" alt="App" />
                <div className="features-shape-1"></div>
                <div className="features-shape-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="599.709"
                    height="549.102"
                    viewBox="0 0 599.709 549.102"
                    className="svg replaced-svg"
                  >
                    <path
                      id="Polygon_7"
                      data-name="Polygon 7"
                      d="M199.061,66.775a61,61,0,0,1,98.266,0L424.9,240.16c29.639,40.281.877,97.152-49.133,97.152H120.617c-50.01,0-78.772-56.871-49.133-97.152Z"
                      transform="matrix(-0.848, -0.53, 0.53, -0.848, 420.961, 549.102)"
                      fill="#0898e7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

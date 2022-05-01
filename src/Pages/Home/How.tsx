import React from "react";

export default function How() {
  return (
    <>
      <section id="how" className="services-area pt-110 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center pb-25">
                <h3 className="title">How does it works</h3>
                <p className="text">
                  Alii nusquam cu duo, vim eu consulatu percipitur, meis dolor
                  comprehensam at vis. Vel ut percipitur dignissim
                  signiferumque.
                  
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-services services-color-1 text-center mt-30 wow fadeInUpBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
                style={{"visibility": "visible", "animationDuration": "1.3s","animationDelay": "0.2s", "animationName": "fadeInUpBig"}}>
                <div className="services-icon d-flex align-items-center justify-content-center">
                  <i className="lni lni-layers"></i>
                </div>
                <div className="services-content">
                  <h4 className="services-title">
                    <a href="#">Provide private SMS communication</a>
                  </h4>
                  <p className="text">
                  With private SMS communication, your users can seamlessly and safely book appointments, confirm deliveries, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-services services-color-2 text-center mt-30 wow fadeInUpBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
                style={{"visibility": "visible", "animationDuration": "1.3s", "animationDelay": "0.4s", "animationName": "fadeInUpBig"}}>
                <div className="services-icon d-flex align-items-center justify-content-center">
                  <i className="lni lni-layout"></i>
                </div>
                <div className="services-content">
                  <h4 className="services-title">
                    <a href="#">Authenticate with ease.</a>
                  </h4>
                  <p className="text">
                  With convenient two-factor authentication, users can log in without having to memorize passwords or use an extra app.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-services services-color-3 text-center mt-30 wow fadeInUpBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.6s"
                style={{"visibility": "visible", "animationDuration": "1.3s", "animationDelay": "0.6s", "animationName": "fadeInUpBig"}}>
                <div className="services-icon d-flex align-items-center justify-content-center">
                  <i className="lni lni-bolt"></i>
                </div>
                <div className="services-content">
                  <h4 className="services-title">
                    <a href="#">Send it at the right time.</a>
                  </h4>
                  <p className="text">
                  Use notifications to send timely, well-targeted SMS messages that surprise and delight your users. (Think booking confirmations and reminders.)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-services services-color-4 text-center mt-30 wow fadeInUpBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.8s"
                style={{"visibility": "visible", "animationDuration": "1.3s", "animationDelay": "0.8s", "animationName": "fadeInUpBig"}}>
                <div className="services-icon d-flex align-items-center justify-content-center">
                  <i className="lni lni-protection"></i>
                </div>
                <div className="services-content">
                  <h4 className="services-title">
                    <a href="#">Get always noticed.</a>
                  </h4>
                  <p className="text">
                  With text message marketing, you can inspire your customers with reactivation campaigns and event-based, region-specific offers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

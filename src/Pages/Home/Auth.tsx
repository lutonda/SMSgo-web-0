import React from 'react';
import { Link } from 'react-router-dom';

export default function Auth() {
  return (
    <nav id="colorlib-main-nav" className="border" role="navigation">
    <Link to="#" className="js-colorlib-nav-toggle colorlib-nav-toggle active show"><i></i></Link>
    <div className="js-fullheight colorlib-table" style={{"height": 754}}>
      <div className="img" style={{"backgroundImage": "url(/images/bg_2.jpg)"}}></div>
            <div className="colorlib-table-cell js-fullheight" style={{"height": 754}}>
            <div className="row no-gutters">
                <div className="col-md-12 text-center">
                    <h1 className="mb-4"><Link to="/" className="logo">SMSgo</Link></h1>


                    <div className="row">
                        <div className="col-md-5">

                        </div>
                        <div className="col-md-4">
                            <form method="POST" id="_signInForm" action="/authentication/signin">
                                <div className="form-group">
                                    <label className="text-black">Email</label>
                                    <input type="text" name="username" className="form-control" id="appointment_email" required/>
                                </div>
                                <div className="form-group">
                                    <label className="text-black">Password</label>
                                    <input type="password" name="password" className="form-control" id="appointment_email" required/>
                                </div>
                                <div className="form-group">
                                        By clicking the register button or use our services, yuo aknowledge having read, understood and accepted our Contract conditions and Privacy Policy.
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">
                                        Sign In
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
      
    </div>
  </nav>
  );
}
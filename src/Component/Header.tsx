import { Link } from "react-router-dom";

export default function Header(){
    return (
    
    <div className="navbar-area">
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/">
                <img src="/img/logo.png" alt="Logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                <ul id="nav" className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="page-scroll" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="page-scroll" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="page-scroll" to="/api">Api</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="page-scroll" to="/how">How does it work?</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="page-scroll" to="/auth">Auth</Link>
                    </li>
                </ul>
                </div>
            </nav>
            </div>
        </div>
        </div>
    </div>

    )
}
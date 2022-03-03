//create navbar component in react
import Image from "next/image"
import mitraisLogo from "../public/img/mitrais-logo.png"


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
            <a className="navbar-brand" href="#">
                <Image src={mitraisLogo} alt="logo"></Image>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-bell notif-icon"></i>
                            <div className="notif-active"></div>
                        </a>
                        <div className="dropdown-menu right-0" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#"><strong>Komang Teguh Budiyana sent you a Birthday Carrot!</strong></a>
                            <a className="dropdown-item" href="#">April Mop Bazaar is ending soon!</a>
                            <a className="dropdown-item" href="#">New Bazaar : Easter Bazaar</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

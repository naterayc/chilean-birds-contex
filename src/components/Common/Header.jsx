import React from "react";
import Logo from "../../assets/img/harry-logo.png"

const Header = () => (
    <div className="main-header">
        <div className="header-content">
            <h1>Harry Potter Wiki</h1>
            <img src={Logo} alt="logo" />
        </div>
        <div className="header-sub">
            <p> Sigue descubriendo la magia </p>
        </div>
    </div>
);

export default Header;
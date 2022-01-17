import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PrimaryButton = ({ to, text, className }) => {

    return (
        <Link to={to} className={className}>
            <div> {text} </div>
        </Link>
    );
}

export default PrimaryButton;
import React from 'react';
import { Link } from 'react-router-dom';

const ButtonHome = ({ to, img }) => {
    return (
        <Link to={to}>
            <div className='button-home'>
                <img src={img} alt={to.slice(1)} />
                <p>{to === "/spells" ? "Hechizos" : "Personajes"}</p>
            </div>
        </Link>

    )
}

export default ButtonHome;

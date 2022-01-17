import React from 'react';
import ButtonHome from '../Common/ButtonHome';
import libroHechizos from "../../assets/img/libro-de-hechizos.png";
import sombrero from "../../assets/img/sombrero-de-mago.png";

const HomeButtons = () => (
    <div className='container-buttons'>
        <ButtonHome to="/spells" img={libroHechizos} />
        <ButtonHome to="/characters" img={sombrero} />
    </div>
)

export default HomeButtons

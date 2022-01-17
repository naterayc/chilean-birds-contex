import React from "react";
import PrimaryButton from "../Common/PrimaryButton";


const Wizard = ({ id, imagen, personaje }) => {

    return (
        <div className="character" id={id}>
            <img src={imagen} alt="foto" />
            <h4> {personaje} </h4>
            <PrimaryButton to={`character/${id}`} text="Ver Personaje" className={"btn-primary-hidden"} />
        </div>
    )

}


export default Wizard;
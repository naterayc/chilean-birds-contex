import React from "react";
import PrimaryButton from "../Common/PrimaryButton";
import Wizard from "./Wizard";

const Wizards = ({ characters }) => (
    <>
        <h2 className="section-title">Personajes</h2>
        <div className="container-characters">
            {characters.map(character => {
                const { id, imagen, personaje } = character;
                return (
                    <Wizard key={id} id={id} imagen={imagen} personaje={personaje} />
                )
            })}
        </div>
        <PrimaryButton to="/" text="Volver" className="btn-primary-pd" />
    </>
)

export default Wizards;
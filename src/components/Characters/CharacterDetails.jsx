import React, { useContext } from "react";
import { CharacterContext } from "../../contexts/CharacterContext";
import Loader from "../Common/Loader";
import PrimaryButton from "../Common/PrimaryButton";

const CharacterDetails = () => {

    const { character, doneFetch } = useContext(CharacterContext);

    const { id, imagen, personaje, apodo, casaDeHogwarts, estudianteDeHogwarts } = character;

    return (
        <>
            {doneFetch ? (
                <div className="character-details">
                    <div id={id}>
                        <img src={imagen} alt="foto" />
                        <div className="character-info">
                            <span>Nombre:</span>{" "}<span>{personaje}</span>
                        </div>
                        <div className="character-info">
                            <span>Apodo:</span>{" "}<span> Apodo: {apodo}</span>
                        </div>
                        <div className="character-info">
                            <span>Casa:</span>{" "}<span>Casa: {casaDeHogwarts}</span>
                        </div>
                        <div className="character-info">
                            <span>Estudiante:</span>{" "}<span>{estudianteDeHogwarts ? "Si" : "No"}</span>
                        </div>
                    </div>
                    <PrimaryButton to="/" text="Volver" className="btn-primary" />
                </div>
            ) : <Loader />}
        </>
    )
}

export default CharacterDetails;
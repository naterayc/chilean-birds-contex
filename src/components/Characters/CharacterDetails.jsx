import React, { useState, useEffect } from "react";
import { characterGet } from "../../constants";
import Loader from "../Common/Loader";
import PrimaryButton from "../Common/PrimaryButton";

const CharacterDetails = () => {
    const character_id = window.location.pathname.split("/")[2];
    const [character, setCharacter] = useState([]);
    const [doneFetch, setDoneFetch] = useState();

    useEffect(() => {

        const getCharacter = () => {
            fetch(characterGet(character_id))
                .then((res) => res.json())
                .then((data) => {
                    setDoneFetch(true);
                    console.log(data);
                    setCharacter(data);

                })
                .catch((err) => console.log(err));
        }

        getCharacter(character_id);
    }, [character_id]);

    const { imagen, personaje, apodo, casaDeHogwarts, estudianteDeHogwarts } = character;

    return (
        <>
            {doneFetch ? (
                <div className="character-details">
                    <div id={character_id}>
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
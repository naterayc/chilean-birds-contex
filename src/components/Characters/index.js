import React, { useContext } from "react";
import { CharactersContext } from "../../contexts/CharactersContext";
import Loader from "../Common/Loader";
import Wizards from "./Wizards";

const Characters = () => {
    const { characters, doneFetch } = useContext( CharactersContext );

    return(
        <>
            {
                doneFetch ? (
                    characters.length ?
                    <Wizards characters={ characters } /> :
                    "No pudimos encontrar a los magos" ) :
                    <Loader />
            }
        </>
    )
}

export default Characters;

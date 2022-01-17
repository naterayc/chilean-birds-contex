import React, { createContext, useEffect, useState } from "react";
import { characterGet } from "../constants";

export const CharacterContext = createContext();

const CharacterContextProvider = ({ children }) => {
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

    return (
        <CharacterContext.Provider value={{ doneFetch, character }}>
            {children}
        </CharacterContext.Provider>
    )

}

export default CharacterContextProvider;
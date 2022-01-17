import React, { createContext, useEffect, useState } from "react";
import { allCharactersGet } from "../constants";

export const CharactersContext = createContext();

const CharactersContextProvider = ({ children }) => {
    const [doneFetch, setDoneFetch] = useState();
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getAllCharacters();
    }, []);


    const getAllCharacters = () => {
        fetch(allCharactersGet())
            .then((res) => res.json())
            .then((data) => {
                setDoneFetch(true);
                console.log(data);
                setCharacters(data);

            })
            .catch((err) => console.log(err));
    }

    return (
        <CharactersContext.Provider value={{ doneFetch, characters }}>
            {children}
        </CharactersContext.Provider>
    );
}

export default CharactersContextProvider

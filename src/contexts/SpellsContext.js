import React, { createContext, useEffect, useState } from "react";
import { allSpellsGet } from "../constants";

export const SpellsContext = createContext();

const SpellsContextProvider = ({ children }) => {
    const [doneFetch, setDoneFetch] = useState();
    const [spells, setSpells] = useState([]);

    useEffect(() => {
        getAllSpells();
    }, []);

    const getAllSpells = () => {
        fetch(allSpellsGet())
            .then((res) => res.json())
            .then((data) => {
                setDoneFetch(true);
                console.log(data);
                setSpells(data);

            })
            .catch((err) => console.log(err));
    }

    return (
        <SpellsContext.Provider value={{ doneFetch, spells }}>
            {children}
        </SpellsContext.Provider>
    );
}

export default SpellsContextProvider;

import React, { useContext } from "react";
import { SpellsContext } from "../../contexts/SpellsContext";
import Loader from "../Common/Loader";
import Spells from "./Spells";

const SpellsLoader = () => {

    const { spells, doneFetch } = useContext(SpellsContext);

    return (
        <>
            {
                doneFetch ? (
                    spells.length ?
                        <Spells spells={spells} /> :
                        "No pudimos encontrar los hechizos") :
                    <Loader />
            }
        </>
    );
}

export default SpellsLoader;

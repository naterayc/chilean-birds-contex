import React from "react";
import PrimaryButton from "../Common/PrimaryButton";
import Spell from "./Spell";

const Spells = ({ spells }) => {
    return (
        <>
            <h2 className="section-title">Hechizos</h2>
            <div className="container-spells">
                {spells.map(spell => {
                    const { hechizo, uso, id } = spell;
                    return (
                        <Spell key={id} hechizo={hechizo} uso={uso} />
                    )
                })}
            </div>
            <PrimaryButton to="/" text="Volver" className="btn-primary-pd" />
        </>
    )
}

export default Spells;

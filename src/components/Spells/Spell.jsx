import React from "react";

const Spell = ({ hechizo, uso }) => {
    return (
        <div className="spell">
            <h4> {hechizo} </h4>
            <p> {uso} </p>
        </div>
    )
}

export default Spell;

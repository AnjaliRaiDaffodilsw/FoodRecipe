import React from 'react'
import "./style.css";
import { v4 as uuidv4 } from "uuid";


function RecipeTile({ recipe }) {
    return (
        <div className="recipeTile">
            <img className="recipeTile__img" src={recipe["recipe"]["image"]} />
            <p className="recipeTile__name" key={uuidv4()}>{recipe["recipe"]["label"]}</p>
        </div>
    )
}

export default RecipeTile

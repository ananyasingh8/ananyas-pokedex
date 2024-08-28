import React from 'react';
import game from './assets/game.png'
import './Card.css';
import search from './assets/search.svg'

export default function Card() {

    const [searchtext, setSearchText] = React.useState("");

    function handleChange(event) {
        setSearchText(event.target.value);
    }

    return (
        <div className="card">
            <form className="card-form">
                <button className="search-icon"><img src={search}/></button>
                <input type="text" placeholder="Enter Pokemon Name" className="poke-search"
                onChange={handleChange} />
            </form>
            <div className="card-content">
                <img className="card__img" src={game} />
                <div className="card__text">
                    <h2 className="poke-name">Name:    Pikachu</h2>
                    <h2 className="poke-type">Type:    Electric</h2>
                    <h2 className="poke-attack">Attack:    Pound</h2>
                </div>
            </div>
        </div>

    )
}
import game from './assets/game.png'
import './Card.css';

export default function Card() {
    return (

        <div className="card">
            <input type="text" placeholder="Enter Pokemon Name" className="poke-search" />
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
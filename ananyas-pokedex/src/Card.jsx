import React from 'react';
import './Card.css';
import search from './assets/search.svg';

export default function Card() {

    const [searchtext, setSearchText] = React.useState("");
    const [data, setData] = React.useState(null);

    function handleChange(event) {
        setSearchText(event.target.value);
    }

    React.useEffect(() => {
        if (searchtext) {
            const url = `https://pokeapi.co/api/v2/pokemon/${searchtext.toLowerCase()}`;
            fetch(url)
                .then(res => res.json())
                .then(res => setData(res))
                .catch(error => console.error("Error fetching data:", error));
        }
    }, [searchtext]);

    function handleSearch(event) {
        event.preventDefault(); // Prevent form submission
    }

    return (
        <div className="card">
            <form className="card-form" onSubmit={handleSearch}>
                <button className="search-icon" type="submit"><img src={search} alt="Search" /></button>
                <input type="text" placeholder="Enter Pokemon Name" className="poke-search"
                       onChange={handleChange} />
            </form>
            {data ? (
                <div className="card-content">
                    <img className="card__img" src={data.sprites?.front_default} alt="Pokemon" />
                    <div className="card__text">
                        <h2 className="poke-name">Name: {data.name}</h2>
                        <h2 className="poke-type">Type: {data.types?.[0]?.type?.name}</h2>
                        <h2 className="poke-weight">Weight: {data.weight}</h2>
                    </div>
                </div>
            ) : (
                <h2 className="card__text">Please enter a Pokemon name to search.</h2>
            )}
        </div>
    );
}

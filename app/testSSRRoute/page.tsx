import React from 'react';
// Define the type for the Pokemon data
type Pokemon = {
  name: string;
  url: string;
};
// Function to get a random number between min and max (inclusive)
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// The page component
const TestSSRRoute = async () => {
  const totalPokemons = 500;
  const randomIds = Array.from({ length: 5 }, () => getRandomInt(1, totalPokemons));
  // Fetch data for random Pokémon
  const pokemonPromises = randomIds.map(id =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())
  );
  const pokemons = await Promise.all(pokemonPromises);
  const buildTime = new Date().toLocaleString();

  return (
    <div>
      <h1>Random Pokemons</h1>
      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px', listStyleType: 'none', padding: 0 }}>
        {pokemons.map((pokemon: any, index: number) => (
          <li key={index} style={{ textAlign: 'center' }}>
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} style={{ width: '100px', height: '100px' }} />
            <br />
            {pokemon.name}
          </li>
        ))}
      </ul>
      <p>Page built at: {buildTime}</p>
    </div>
  );
};

export default TestSSRRoute;
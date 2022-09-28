import { useEffect, useState } from 'react';
import './App.css';
import PokeAbilities from './components/PokeAbilities';
import PokeStats from './components/PokeStats';
import PokeStatsData from './components/PokeStatsData';
import PokeType from './components/PokeType';
import SearchBar from './components/SearchBar';
import logo from './img/logo.png'

function App() {
  const [pokemonName, setPokemonName] = useState("")
  const [searchInput, setSearchInput] = useState("")
  const [pokemonSprite, setPokemonSprite] = useState()
  const [pokemonDataObject, setPokemonDataObject] = useState()


  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/681')
      .then((res) => res.json())
      .then((data) => {

        const { name, sprites: { front_default } } = data;
        setPokemonName(name);
        setPokemonSprite(front_default);
        setPokemonDataObject(data)
        console.log(data);
      })
      .catch((err) => console.warn(err))
    return () => {

    }
  }, [])

  return (
    <div className='Body'>
      <header className='searchBar'>
        <img src={logo} alt="pokedex-logo" className='poke-logo' />
        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setPokemonName={setPokemonName}
          setPokemonSprite={setPokemonSprite}
          setPokemonDataObject={setPokemonDataObject}
        />
      </header>
      {pokemonDataObject && <main className='main'>
        <section className='PokemonData'>
          <h1> {pokemonName}</h1>
          <img
            src={pokemonSprite ? pokemonSprite : ''}
            alt="pokemon-sprite"
          />
          <PokeType types={pokemonDataObject.types} />
          <PokeAbilities />
        </section>
        <article className='Stats'>
          <PokeStats stats={pokemonDataObject.stats}/>
          {
            // Aqui va la grafica
          }
          <PokeStatsData stats={pokemonDataObject.stats} />
        </article>
      </main>}
    </div>

  );
}


export default App;

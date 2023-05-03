import React from "react";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import "../../components/0_Styles/pokedex.css";

const PokeCard = ({ url }) => {
  const [pokemon, setPokemonById] = useFetch(url);
  useEffect(() => {
    setPokemonById();
  }, []);

  console.log(pokemon);

  return (
    <article>
      <header className="poke__img">
        <img
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>

      <section>
        <h3>{pokemon?.name}</h3>
        <ul>
          {pokemon?.types.map((objType) => (
            <li key={objType.type.url}>{objType.type.name}</li>
          ))}
        </ul>

        <ul>
          {pokemon?.stats.map((objStat) => (
            <li key={objStat.stat.url}>
              <span>{objStat.stat.name}</span>
              <span>{objStat.base_stat}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default PokeCard;

import React from 'react'
import { useSelector } from 'react-redux'


const Pokedex = () => {
    const {trainerName}=useSelector(state=>state)
 
    return (
    <div>
        <h1>PokedexPoke</h1>
        <p><span>Welcome: {trainerName} </span></p>
    </div>
  )
}

export default Pokedex
import React from 'react'
import FormNameUser from '../components/Home/FormNameUser'
import { useSelector } from 'react-redux'

const Home = () => {
  const {trainerName}= useSelector(state=>state) 
   return (
    <div>
    <h1>Pokedex de home</h1>
    <h2>Hi Trainer</h2>
    <p>Pleace give us your trainer name to start.</p>
    <FormNameUser/>
    </div>
  )
}

export default Home
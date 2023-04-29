import React, { useRef } from 'react'
import { setTrainerName } from '../../store/slices/trainerName.slice'
import { useDispatch, useSelector } from 'react-redux'

const FormNameUser = () => {
  const inputName=useRef() //se trae la info del imput
  const dispatch=useDispatch()  //como en Redux no se puede usar la action directamente hay que crear un despachador.
  const {trainerName}=useSelector((state)=>state)
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(setTrainerName(inputName.current.value.trim()))
  }
console.log(trainerName)
  return (
    <form onSubmit={handleSubmit}> 
        <input ref={inputName} type="text" />
        <button>Start</button>
    </form>
  )
}

export default FormNameUser
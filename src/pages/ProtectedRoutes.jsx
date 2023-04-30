import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const {trainerName}= useSelector(state=>state) 
    console.log(trainerName)
  
    if(trainerName.length>=3){
     return <Outlet/>
            
   } else {
    alert("coloque un nombre")
    return <Navigate to='/'/>

   }


}

export default ProtectedRoutes
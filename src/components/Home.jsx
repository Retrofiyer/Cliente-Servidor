import React from 'react'
import {getAuth, signOut} from 'firebase/auth'
import appFirebase from '../credenciales'
const auth = getAuth(appFirebase)

const Home = ({correoUsuario}) => {
  return (
    <div>
        <h2>Bienvenido {correoUsuario} <button className='btn btn-logout' onClick={()=>signOut(auth)}>Logout</button></h2>
    </div>
  )
}

export default Home
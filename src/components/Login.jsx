import React, { useState } from 'react'

import appFirebase from '../credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {

    const [registrando, setRegistrando] = useState(false)
    const funAuth = async(e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if(registrando){
            try {
                await createUserWithEmailAndPassword(auth, email, password)

            } catch (error) {
                alert("El Usuario ya existe")
            }
            
        }
        else{
            try {
               await signInWithEmailAndPassword(auth, email, password)

            } catch (error) {

                alert("El correo o la contraseña son incorrectas")

            }
        }
    }
    
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-8">
          <div className="padre">
            <div className="card card-body">
              <form onSubmit={funAuth}>
                <label>Email</label>
                <input type="text" placeholder='Ingresar Email' className='boxtxt'id='email'/>
                <label>Contraseña</label>
                <input type="password" placeholder='Ingresar Contraseña' className='boxpass' id='password'/>
                <div className="button-container">
                  <button onClick={()=>setRegistrando(registrando)}>Registrarse</button>
                  <button onClick={()=>setRegistrando(!registrando)}>Iniciar Sesión</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
import React, { useState } from 'react'

import appFirebase from '../credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

const auth = getAuth(appFirebase)

const Login = () => {

    const [registrando, setRegistrando] = useState(false);
    const [error, setError] = useState(null);

    const funAuth = async(e) => {

        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        setError(null);

        if(registrando){
            try {
                await createUserWithEmailAndPassword(auth, email, password)
                alert('Registro exitoso.');
            } catch (error) {
                alert("El Usuario ya existe")
            }
            
        }
        else{
            try {
               await signInWithEmailAndPassword(auth, email, password)
               alert('Inicio de sesión exitoso.');
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
                <input type='text' placeholder='Ingresar Email' className='boxtxt' id='email' />
                <label>Contraseña</label>
                <input type='password' placeholder='Ingresar Contraseña' className='boxpass' id='password' />
                <div className='button-container'>
                <button className='btn-event' type='submit'>{registrando ? 'Registrarse' : 'Iniciar Sesión'}</button>
                  <h5 className='txt'>{registrando ? "Si ya tienes cuenta" : "¿No tienes cuenta?"}<button className='btnswitch' type='button' onClick={() => setRegistrando(!registrando)}>
                    {registrando ? 'Iniciar Sesión' : 'Registrarse'}
                  </button></h5>
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
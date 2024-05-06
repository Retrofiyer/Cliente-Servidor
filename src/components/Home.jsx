// import React from 'react'
// import {getAuth, signOut} from 'firebase/auth'
// import appFirebase from '../credenciales'
// const auth = getAuth(appFirebase)

// const Home = ({correoUsuario}) => {
//   return (
//     <div>
//         <h2>Bienvenido {correoUsuario} <button className='btn btn-logout' onClick={()=>signOut(auth)}>Logout</button></h2>
//     </div>
//   )
// }

import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import appFirebase from '../credenciales';

const auth = getAuth(appFirebase);

const Home = ({ correoUsuario }) => {
  const [comment, setComment] = useState('');
  const [submittedComment, setSubmittedComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedComment(comment);
    setComment('');
  };

  return (
    <div>
      <h2>Bienvenido {correoUsuario} <button className='btn btn-logout' onClick={()=>signOut(auth)}>Logout</button></h2>
      <div>
        <h3>Deja una sugerencia:</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            value={comment}
            onChange={handleChange}
            placeholder="Escribe tu comentario..."
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
      {submittedComment && (
        <div>
          <h3>Última sugerencia enviada:</h3>
          <p>{submittedComment}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
import { AuthErrorCodes } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import {
  auth,
  db,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../credenciales";
import { ReCaptchaEnterpriseProvider } from "firebase/app-check";

const AuthContext = React.createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

const UserAuth= ({ children }) => {
  const [error, seterror] = useState("");
  const [currentuser, setcurrentuser] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setcurrentuser(user);
        console.log(user.uid);
      } else console.log("usuario no valido");
    });
  }, []);
  
  const signup = (email, password, username) => {
    seterror("");
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        console.log(result.user);
        const ref = doc(db, "usersinformation", result.user.uid);
        const docRef = await setDoc(ref, { username })
          .then((re) => {
            alert("Los datos han sido ingresados correctamente");
          })
          .catch((e) => {
            console.log(e.message);
          });
      })
      .catch((error) => {
        if (error.code == "auth/email-already-in-use") {
          seterror("email is alredy in use try another email");
        } else if (error.code === AuthErrorCodes.WEAK_PASSWORD) {
          seterror("Password Must be 6 charecter");
        } else {
          seterror(error.message);
        }
      });
  };
  const value = {
    currentuser,
    signup,
    error,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default UserAuth;
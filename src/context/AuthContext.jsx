import { useContext, createContext, useState, useEffect } from "react";
import { auth, db } from "../firebase/firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // ---------------------- create user with firebase auth ------------------------

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      savedMovies: [],
    });
  };

  // ---------------------- login with firebase auth ------------------------

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ---------------------- logout with firebase auth ------------------------

  const logOut = () => {
    return signOut(auth);
  };

  // ------------------------ onAuth state changed with firebase ----------------------------

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsuscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

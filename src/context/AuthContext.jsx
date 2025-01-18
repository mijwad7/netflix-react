import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContexProvider({ children }) {
  const [user, setUser] = useState({});

  async function signUp(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;

      // Store user info in Firestore
      await setDoc(doc(db, "users", newUser.uid), {
        email: newUser.email,
        savedShows: [],
      });

      setUser(newUser); // Set the user state after signup
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}

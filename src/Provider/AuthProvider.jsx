import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';


export const  AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);

    const createUser = (email , pass) =>{
        return createUserWithEmailAndPassword(auth , email , pass)
    }
    const signIn = (email, pass) =>{
        return signInWithEmailAndPassword(auth, email , pass)
    }
    const profileUpdate = (name, photoURL) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }
    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setUser(user)
        })
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        profileUpdate,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
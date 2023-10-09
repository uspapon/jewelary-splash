import React, { createContext, useEffect, useState } from 'react';
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]  = useState(true);

    const createUser = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (name, photo) => {
        
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
    }

    const signIn = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
       
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {

        return signOut(auth);
    }


    // Obsurve Auth state Change. 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change user', currentUser);
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }

    },[])
    
    const authInfo = { 
        user,
        loading,
        createUser,
        updateUserProfile,
        signIn,
        googleSignIn,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;



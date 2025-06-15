import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
 import { GoogleAuthProvider } from "firebase/auth";
 import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    
    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

   
// providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

    const [coffees, setCoffees] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:5000/coffees')
        .then(res => res.json())
        .then(loadedCoffees =>{
            // console.log(coffees);
            setCoffees(loadedCoffees)




        
        })
        
    },[coffees])

    

    // register
    const registerUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google login
    const googleLogin  = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    // github login
    const githubLogin  = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    // logout
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }



      


    // observer
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unsubscribe()
        }

    },[])

  




    const authInfo = {
        coffees,
        setCoffees,
        user,
        loading,
        registerUser,
        loginUser,
        googleLogin,
        githubLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;
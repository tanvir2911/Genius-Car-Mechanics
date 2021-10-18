import {
    getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthenticaton from "../Pages/Login/Firebase/firebase.init";

initializeAuthenticaton();


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
            })
            .finally(() => setIsLoading(false))
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }

    return {
        signInUsingGoogle,
        logOut,
        user,
        isLoading
    }
}

export default useFirebase;
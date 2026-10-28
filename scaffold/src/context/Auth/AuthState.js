import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { auth } from "../../config/firebase"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export default function AuthState()
{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, curr => {
            setUser(curr ? {
                id: curr.uid,
                name: curr.displayName,
                email: curr.email
            } : null)
        })
        setLoading(false)
        return unsub
    }, [])

    async function register(name, email, password)
    {
        setLoading(true)
        await createUserWithEmailAndPassword(auth, email, password)
        .then(cred => updateProfile(cred.user, {displayName: name}))
        .catch(() => toast("Please enter valid data"))
        .finally(() => setLoading(false))
    }

    async function login(email, password)
    {
        setLoading(true)
        await signInWithEmailAndPassword(auth, email, password)
        .catch(() => toast("Please enter valid data"))
        .finally(() => setLoading(false))
    }

    async function logout()
    {
        setLoading(true)
        await signOut(auth)
        .catch(e => setError(e.message))
        .finally(() => setLoading(false))
    }

    return {user, loading, error, register, login, logout}
}
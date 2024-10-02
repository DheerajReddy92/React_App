import {auth,provider} from '../config/firebase'
import {signInWithPopup} from "firebase/auth"
import {useNavigate} from 'react-router-dom'

export const Login = () => {

    const navigate = useNavigate()

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth,provider)
        console.log(result)
        navigate('/')
    }
    return <div>
        <h1>Login from here</h1>
        <a>Sign in with Google to continue...</a>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
}
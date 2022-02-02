import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../components/Context/AuthProvider";



export const LoginForm = () => {
    const introMessage = "Indtast brugernavn og adgangskode for at logge ind"
    const [ message, setMessage ] = useState(introMessage);
    const { loginData, setLoginData } = useContext(AuthContext);

    const SubmitLoginForm = async e => {
        const formData = new FormData(e.target.form)
        try {
            const result = await axios.post('https://api.mediehuset.net/token', formData)
            handleSessionData(result);            
        }
        catch(err) {
            console.error(err)
            setMessage('Der er sket en fejl. Kunne ikke logge ind')
        }
    }

    const handleSessionData = resp => {
        if(resp.status === 201) {
            sessionStorage.setItem('token', JSON.stringify(resp.data))
            setLoginData(resp.data)
            setMessage(`Du er logget ind som ${resp.data.username}`)
        }
    }

    const logOut = () => {
        sessionStorage.removeItem('token')
        setLoginData('')
        setMessage(introMessage)
    }

    return (
        <div>
            <h1>Login</h1>
            <p>{message}</p>
            {!loginData ?
            <form method="post">
                <div>
                    <label htmlFor="username">Brugernavn: </label>
                    <input type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="password">Adgangskode: </label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <button type="button" onClick={SubmitLoginForm}>Login</button>
                    <button type="reset">Nulstil</button>
                </div>
            </form>
            :
            <form>
                <button type="button" onClick={logOut}>Log out</button>
            </form>
            }
        </div>
    )
}
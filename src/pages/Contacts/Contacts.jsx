import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../components/Context/AuthProvider";

export const Contacts = () => {
    const {loginData} = useContext(AuthContext)

    return (
        <>
        <h2>Hej her er contacts</h2>
        {!loginData ?
            <p>Du er ikke logget ind</p>
            : 
            <p>Du er logget ind som {loginData.username}</p>
        }
        </>
    )
}
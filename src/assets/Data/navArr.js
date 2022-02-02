import { Contacts } from "../../pages/Contacts/Contacts";
import { Home } from "../../pages/Home/Home";
import { LoginForm } from "../../pages/Login/Login";
import { Products } from "../../pages/Products/Products";


const navArr = [
    {
        title: 'FORSIDE',
        path: '/',
        element: <Home />,
        display: true
    },
    {
        title: 'PRODUKTER',
        path: '/products',
        element: <Products />,
        display: true
    },
    {
        title: 'bageriet',
        path: '/',
        element: <Home />,
        display: true
    },
    {
        title: 'KONTAKT',
        path: '/contacts',
        element: <Contacts />,
        display: true
    },
    {
        title: 'LOGIN',
        path: '/login',
        element: <LoginForm />,
        display: true
    }
]

export default navArr
import React from "react";
import { slide as Menu } from 'react-burger-menu'
import './Burgermenu.css';

export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Forside
            </a>
            <a className="menu-item" href="/products">
                Produkter
            </a>
            <a className="menu-item" href="/contacts">
                Kontakt
            </a>
            <a className="menu-item" href="/login">
                Login
            </a>
        </Menu>
    )
}
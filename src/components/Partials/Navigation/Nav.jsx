import React from "react";
import { NavLink } from "react-router-dom";
import navArr from "../../../assets/Data/navArr";
import styles from "../Navigation/Nav.module.scss"

export const Navigation = () => {

    return (
        <nav className={styles.navbar}>
            <ul>
                {navArr.map((item, key) => {
                    return (
                        item.display ?
                        <li key={key}>
                            <NavLink to={item.path}>{item.title}</NavLink>
                        </li>
                        : null
                    )
                })}
            </ul>
        </nav>
    )
}
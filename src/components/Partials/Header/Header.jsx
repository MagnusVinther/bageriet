
import styles from './Header.module.scss'
import navArr from '../../../assets/Data/navArr'
import { NavLink } from 'react-router-dom'
import { Navigation } from '../Navigation/Nav'

export const Header = () => {
    const pagetitle = navArr.find(item => 
        item.path === window.location.pathname
    ) 
        // console.log(title);
	return (
		<div className={styles.wrapper}>
			<header>
                <NavLink to="/">
                    <img src={ require('../../../assets/Images/Untitled-1.png')} alt="logo" />
                </NavLink>
                <Navigation />
				<h1>
                    {pagetitle.title}
                </h1>
			</header>
		</div>
	)
  }
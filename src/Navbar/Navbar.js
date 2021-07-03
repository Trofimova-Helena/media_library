import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './../cssStyles/Navbar.module.css'

function Navbar() {
	return <nav className={styles.Menu}>
			<ul className={styles.navMenu}>
				<li><NavLink to="/books" className={styles.NavLinkStyle}>Книги</NavLink></li>
                <li><NavLink to="/movies" className={styles.NavLinkStyle}>Фильмы</NavLink></li>
                <li><NavLink to="/musics" className={styles.NavLinkStyle}>Музыка</NavLink></li>
			</ul>
		</nav>
}

export default Navbar;
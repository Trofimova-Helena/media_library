import React from 'react';
import {NavLink} from "react-router-dom";

function Navbar({}) {
	return <nav>
			<ul>
				<li><NavLink to="/books">Книги</NavLink></li>
                <li><NavLink to="/movies">Фильмы</NavLink></li>
                <li><NavLink to="/musics">Музыка</NavLink></li>
			</ul>
		</nav>
}

export default Navbar;
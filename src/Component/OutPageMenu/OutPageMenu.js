import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './OutPageMenu.scss';
const OutPageMenu = (props) => {
	return (
		<header>
			<div className="header-bg">
				<MenuBar />
				<div className="m-5 p-5 ">{props.children}</div>
			</div>
		</header>
	);
};

export default OutPageMenu;

import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => (
	<Menu mode="horizontal" selectedKeys={['home']} id="nav" key="nav">
		<Menu.Item key="home">
			<Link to="/home">Home</Link>
		</Menu.Item>
		<Menu.Item key="foo">
			<Link to="/foo">Foo</Link>
		</Menu.Item>
		<Menu.Item key="bar">
			<Link to="/bar">Bar</Link>
		</Menu.Item>
	</Menu>
);

export default Header;

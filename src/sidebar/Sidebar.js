import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

// Import SVG icons
import java from '../icons/java.svg';
import nodejs from '../icons/nodejs.svg';
import python from '../icons/python.svg';
import ruby from '../icons/ruby.svg';
import php from '../icons/php.svg';
import go from '../icons/go.svg';

const { Sider } = Layout;

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Sider trigger={null}>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['nodejs']}>
					{/* <Link to="/"> */}
					<Menu.Item key="nodejs" className="nodejs">
						<img src={nodejs} />
						<span>Node.js</span>
					</Menu.Item>
					{/* </Link>
					<Link to="/go"> */}
					<Menu.Item key="go" className="go">
						<img src={go} />
						<span>Go</span>
					</Menu.Item>
					{/* </Link>
					<Link to="/python"> */}
					<Menu.Item key="python" className="python">
						<img src={python} style={{ marginTop: '-0.25rem' }} />
						<span>Python</span>
					</Menu.Item>
					{/* </Link>
					<Link to="/php"> */}
					<Menu.Item key="php" className="php">
						<img src={php} />
						<span>PHP</span>
					</Menu.Item>
					{/* </Link>
					<Link to="/ruby"> */}
					<Menu.Item key="ruby" className="ruby">
						<img src={ruby} />
						<span>Ruby</span>
					</Menu.Item>
					{/* </Link>
					<Link to="/java"> */}
					<Menu.Item key="java" className="java">
						<img src={java} />
						<span>Java</span>
					</Menu.Item>
					{/* </Link> */}
				</Menu>
			</Sider>
		);
	}
}

export default Sidebar;
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
			<Sider>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['nodejs']}>
					<Menu.Item key="nodejs" className="nodejs">
						<Link to="/">
							<img src={nodejs} alt="nodejs" />
							<span>Node.js</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="go" className="go">
						<Link to="/go">
							<img src={go} alt="go" />
							<span>Go</span>
						</Link>
					</Menu.Item>
					{/* <Link to="/python"> */}
					<Menu.Item key="python" className="python">
						<img src={python} style={{ marginTop: '-0.25rem' }} alt="python" />
						<span>Python</span>
					</Menu.Item>
					{/* </Link>
					<Link to="/php"> */}
					<Menu.Item key="php" className="php">
						<img src={php} alt="php" />
						<span>PHP</span>
					</Menu.Item>
					{/* </Link>
					<Link to="/ruby"> */}
					<Menu.Item key="ruby" className="ruby">
						<img src={ruby} alt="ruby" />
						<span>Ruby</span>
					</Menu.Item>
					{/* </Link>
					<Link to="/java"> */}
					<Menu.Item key="java" className="java">
						<img src={java} alt="java" />
						<span>Java</span>
					</Menu.Item>
					{/* </Link> */}
				</Menu>
			</Sider>
		);
	}
}

export default Sidebar;

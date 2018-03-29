import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';

import SidebarComponent from '../sidebar/Sidebar';
import NodeJSDocWrapper from '../content/nodejs';
import GoDocsWrapper from '../content/go';

import './Home.css';

const { Header, Footer, Content } = Layout;

class Home extends Component {
	render() {
		const HeaderMarkup = (
			<Header>
				<p style={{ color: 'white', textAlign: 'center' }}>Header</p>
			</Header>
		);
		const FooterMarkup = (
			<Footer>
				<p style={{ color: 'darkblue', textAlign: 'center' }}>Footer</p>
			</Footer>
		);
		return (
			<Router>
				<Layout>
					{HeaderMarkup}
					<Content>
						<Layout>
							<SidebarComponent />
							<Layout>
								<Route exact path="/" component={NodeJSDocWrapper} />
								<Route path="/go" component={GoDocsWrapper} />
								<Route path="/python" component={GoDocsWrapper} />
								<Route path="/php" component={GoDocsWrapper} />
								<Route path="/ruby" component={GoDocsWrapper} />
								<Route path="/java" component={GoDocsWrapper} />
							</Layout>
						</Layout>
					</Content>

					{FooterMarkup}
				</Layout>
			</Router>
		);
	}
}

export default Home;

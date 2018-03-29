import React, { Component } from 'react';
import { Layout } from 'antd';
import Playground from './Playground';

const { Content } = Layout;

class NodeJSDocsWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Content
				style={{
					padding: '2rem',
				}}
			>
				<h3>Node.js</h3>
				<Playground />
			</Content>
		);
	}
}

export default NodeJSDocsWrapper;

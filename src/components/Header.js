import React from 'react';
import {Menu} from 'semantic-ui-react';

class Header extends React.Component {

	updateUrl(path) {
		this.props.history.push(path);
	}

	render() {
		return (
			<Menu>
				<Menu.Item onClick={() => {this.updateUrl('/about')}}>About</Menu.Item>
				<Menu.Item onClick={() => this.updateUrl('/')}>Home</Menu.Item>
			</Menu>
		)
	}
}

export default Header; 

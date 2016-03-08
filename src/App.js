import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {

	render() {

		var navigation = {
			height: '60px',
			backgroundColor: '#00ADB0',
			paddingTop: '8px',
			paddingBottom: '10px',
			paddingLeft: '20px'
		};

		var navcontainer = {
			maxWidth: '950px',
			margin: 'auto'
		}

		var navlist = {
			display: 'inline-block',
			fontFamily: 'helvetica-light',
			fontSize: '8px',
			textTransform: 'uppercase',
			paddingLeft: '0px'
		};

		var li = {
			display: 'inline-block',
			marginRight: '15px',
			paddingTop: '5px',
			paddingBottom: '5px',
			paddingRight: '10px',
			paddingLeft: '10px',
			fontSize: '12px',
			color: 'white'
		};

		var content = {
			padding: '0px',
			minHeight: '90vh'
		}

		var footer = {
			height: '180px',
			backgroundColor: 'black',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			color: 'white',
			textAlign: 'center',
			padding: '30px',
			marginTop: '5px'
		}

		return (
			<div>
				<nav style={navigation}>
					<div style={navcontainer}>
						<ul style={navlist}>
							<li style={li}>Project Tool</li>
							<li style={li}><Link to="/">Home</Link></li>
							<li style={li}><a href="mailto:tjinauyeung@gmail.com">Contact</a></li>
						</ul>
					</div>
				</nav>
				<div style={content}>
					{this.props.children}
				</div>
				<footer style={footer}>
					<p>Built using React.js and Ruby on Rails. Made in Amsterdam. 2016</p>
				</footer>
			</div>
		);
	}
}

export default App;

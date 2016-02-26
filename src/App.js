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
            maxWidth: '1200px',
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
            padding: '20px',
            minHeight: '90vh'
        }

        var footer = {
            height: '180px',
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
        }

        return (
			<div>
                <nav style={navigation}>
                    <div style={navcontainer}>
                        <ul style={navlist}>
                            <li style={li}>Project Manager</li>
                            <li style={li}><Link to="/">Home</Link></li>
                            <li style={li}><Link to="/">About</Link></li>
                            <li style={li}><Link to="/">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
                <div style={content}>
                    {this.props.children}
                </div>
                <footer style={footer}>
                        <h3>Made with love in Amsterdam. 2016</h3>
                </footer>
            </div>
        );
    }
}

export default App;

import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {

	render() {
<<<<<<< HEAD

        var navigation = {
            height: '60px',
            backgroundColor: 'black',
            paddingTop: '8px',
            paddingBottom: '10px',
            paddingLeft: '20px'
        };

        var navcontainer = {
            maxWidth: '1400px',
            margin: 'auto',
            paddingLeft: '10px'
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
            backgroundColor: '#fff',
            borderRadius: '10px',
            width: '100px',
            paddingLeft: '10px',
            paddingTop: '5px',
            paddingBottom: '5px',
            paddingRight: '10px'
        };

        var logo = {
            display: 'inline-block',
            marginRight: '15px',
            borderRadius: '10px',
            color: 'white',
            paddingTop: '5px',
            paddingBottom: '5px',
            fontSize: '12px'
        }

        var content = {
            padding: '20px'
        }

        return (
			<div>
                <nav style={navigation}>
                    <div style={navcontainer}>
                        <ul style={navlist}>
                            <li style={logo}>Project Manager</li>
                            <li style={li}><Link to="/">Home</Link></li>
                            <li style={li}><Link to="/">About</Link></li>
                            <li style={li}><Link to="/">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
                <div style={content}>
                    {this.props.children}
                </div>
            </div>
||||||| merged common ancestors
        return (
					<div className="container">
          
            <nav className="main">
              <ul>
                <li><Link to="/">Home</Link></li>
              </ul>
            </nav>


            {this.props.children}
          </div>
=======
        return (
					<div className="container">

            <nav className="main">
              <ul>
                <li><Link to="/">Home</Link></li>
              </ul>
            </nav>
						
            {this.props.children}
          </div>
>>>>>>> df910b732eb2943e4a6d90a922c4527cf18e6791
        );
    }
}

export default App;

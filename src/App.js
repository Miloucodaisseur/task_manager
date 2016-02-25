import React from 'react';
import { Link } from 'react-router';
// import ProjectList from './ProjectList';


class App extends React.Component {

	render() {
        return (
					<div className="container">
          
            <nav className="main">
              <ul>
                <li><Link to="/">Home</Link></li>
              </ul>
            </nav>


            {this.props.children}
          </div>
        );
    }
}

export default App;

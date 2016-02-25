import React from 'react';
import ToDoList from './toDoList'

class App extends React.Component {

	render() {
		var container = {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
			paddingTop: '60px'
		}
        return (
        	<div style={container}>
          		<ToDoList />
          	</div>
        );
    }
}

export default App;
import React from 'react';
import ToDoList from './ToDoList.js';


class App extends React.Component {

	constructor(){
		super();
	}

	render() {
        return (
        	<div className="container">
        		<ToDoList />
            </div>
        );
    }
}

export default App;
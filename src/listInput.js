import React from 'react';
import jQuery from 'jquery';
import model from './Model';

class ListInput extends React.Component {
	constructor() {
		super();
	}

	onSubmitForm(event) {
	    event.preventDefault();
		let component = this;

	    let description = this.refs.newTodoInput.value;
	    let newTask = { id: null, description: description, done: false };

	   	function onDone(data) {
	        component.props.onChange();
	        component.refs.newTodoInput.value = "";
	    };

	   	function onFail(error) {
	        console.log(error);
	    };

	    model.post(newTask, onDone, onFail);
	    this.setState({
	    })
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmitForm.bind(this)}>
					<input ref="newTodoInput" />
					<button type="submit">Add</button>
				</form>
			</div>
		);
	}
}

export default ListInput;
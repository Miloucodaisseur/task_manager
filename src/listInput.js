import React from 'react';
import jQuery from 'jquery';

class ListInput extends React.Component {
	constructor() {
		super();
	}

	onSubmitForm(event) {
	    event.preventDefault();

	    let component = this;
	    let description = this.refs.newTodoInput.value;
			let projectId = this.props.projectId;
	    let newTask = {
	     	id: null,
	      	description: description,
	      	done: false
	    };

	    console.log(newTask);

	    jQuery.ajax({
	      	type: "POST",
	      	url: "https://projectapitask.herokuapp.com/projects/${projectId}/tasks.json",
	      	data: JSON.stringify({
	          	task: newTask
	      	}),
	      	contentType: "application/json",
	      	dataType: "json"
	    })

	    .done(function(data) {
	        component.props.onChange();
	        component.refs.newTodoInput.value = "";
	    })

	    .fail(function(error) {
	        console.log(error);
	    });
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

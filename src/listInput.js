import React from 'react';
import jQuery from 'jquery';

class ListInput extends React.Component {
	constructor() {
		super();
		this.state = {
			default: "Add a new task here"
		}
	}

	onSubmitForm(event) {
	    event.preventDefault();

	    let component = this;
	    let description = this.refs.newTodoInput.value;
	    let newTask = {
	     	id: null,
	      	description: description,
	      	done: false
	    };

	    console.log(newTask);

	    jQuery.ajax({
	      	type: "POST",
	      	url: "https://apitask.herokuapp.com/tasks.json",
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

	setEmptyValue() {
		this.setState({
			value: ""
		})
	}

	render() {

		var input = {
			height: '60px',
			width: '280px',
			padding: '0px 0px 0px 20px',
			borderStyle: 'none',
			border: 'none',
			outline: '0',
			fontSize: '18px',
			fontFamily: 'helvetica-light',
			color: '#D11F57',
			backgroundImage: 'url(http://www.tjinauyeung.nl/plus-icon.png)',
			backgroundSize: 'contain',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'right'
		}

		return (
				<form onSubmit={this.onSubmitForm.bind(this)}>
					<input style={input} defaultValue="Add new task" ref="newTodoInput" />
				</form>
		);
	}
}

export default ListInput;
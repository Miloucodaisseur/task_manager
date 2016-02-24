import React from 'react';

class ListInput extends React.Component {

	createTodo(event) {
	    event.preventDefault();

	    let component = this;
	    let title = this.refs.newTodoInput.value;
	    let newTodo = {
	     	id: null,
	      	title: title,
	      	completed: false
	    };

	    jQuery.ajax({
	      	type: "POST",
	      	url: "https://afternoon-atoll-31464.herokuapp.com/todos.json",
	      	data: JSON.stringify({
	          	todo: newTodo
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

	onSubmitForm(event){
		event.preventDefault();

		this.props.onSubmit(this.refs.todoItem.value);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmitForm.bind(this)}>
					<input ref="todoItem" />
					<button>Add</button>
				</form>
			</div>
		);
	}
}

export default ListInput;
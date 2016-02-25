import React from 'react';
import jQuery from 'jquery';
import EditableTextField from './EditableTextField';

class ListItem extends React.Component {
	constructor(){
		super();
	}

	componentDidMount() {
		this.setState({
			key: this.props.id,
			id: this.props.id,
			description: this.props.description,
			done: this.props.done,
			createdAt: this.props.createdAt,
			updatedAt: this.props.updatedAt
		})
	}

	destroy(event) {

	    let component = this;
	    let deleteTask = { id: this.state.id };

	    jQuery.ajax({
	      	type: "DELETE",
	      	url: "https://apitask.herokuapp.com/tasks/" + this.state.id,
	      	data: JSON.stringify({
	          	task: deleteTask
	      	}),
	      	contentType: "application/json",
	      	dataType: "json"
	    })

	    .done(function(data) {
	        component.props.destroy();
	    })

	    .fail(function(error) {
	        console.log(error);
	    });

	}

	complete(event) {

		let component = this;

		// capturing the old state
		let oldState = {
	     	id: this.state.id,
	     	description: this.state.description,
	     	done: this.state.done,
	     	createdAt: this.state.createdAt,
			updatedAt: this.state.updatedAt
	    }

	   	// this toggles the state.done
		this.state.done = !this.state.done;

		// capturing the changed state
		let changedState = {
	     	done: this.state.done
	    }

	    // merging the old and the new
		let newState = jQuery.extend(oldState, changedState);

	    this.setState(newState);

	    jQuery.ajax({
	      	type: "PUT",
	      	url: "https://apitask.herokuapp.com/tasks/" + this.state.id,
	      	data: JSON.stringify({
	          	task: newState
	      	}),
	      	contentType: "application/json",
	      	dataType: "json"
	    })

	    .done(function(data) {
	        component.props.complete();
	    })

	    .fail(function(error) {
	        console.log(error);
	    });

	}

	changedText(newInput) {

		let component = this;

		// capturing the old state
		let oldState = {
	     	id: this.state.id,
	     	description: this.state.description,
	     	done: this.state.done,
	     	createdAt: this.state.createdAt,
			updatedAt: this.state.updatedAt
	    }

		// capturing the changed state
		let changedState = {
	     	description: newInput
	    }

	    // merging the old and the new
		let newState = jQuery.extend(oldState, changedState);

	    this.setState(newState);

	    jQuery.ajax({
	      	type: "PUT",
	      	url: "https://apitask.herokuapp.com/tasks/" + this.state.id,
	      	data: JSON.stringify({
	          	task: newState
	      	}),
	      	contentType: "application/json",
	      	dataType: "json"
	    })

	    .done(function(data) {
	        component.props.complete();
	    })

	    .fail(function(error) {
	        console.log(error);
	    });

	}

	render() {

		var complete = { textDecoration: 'line-Through' };
 		var not_complete = { textDecoration: 'none'};

		return (
			<div>
				<p style={this.state.done ? complete : not_complete}>
					<EditableTextField value={this.state.description} done={this.state.done} onChange={this.changedText.bind(this)} />
				</p>
				<button onClick={this.destroy.bind(this)}>Delete</button>
				<button onClick={this.complete.bind(this)}>Mark as complete</button>
			</div>
		);
	}
}

export default ListItem;

import React from 'react';
import jQuery from 'jquery';
import EditableTextField from './EditableTextField';
import model from './Model';

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

	    console.log(deleteTask);
	    function onDone(data) {
	        component.props.destroy();
	    }

	    function onFail(error) {
	        console.log(error);
	    };

	    model.destroy(deleteTask, onDone, onFail);	    
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
		let updateTask = jQuery.extend(oldState, changedState);
	    
	    function onDone(data) {
	        component.props.complete();
	    }

	    function onFail(error) {
	        console.log(error);
	    }

	    model.update(updateTask, onDone, onFail);
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
		let updateTask = jQuery.extend(oldState, changedState);

	    function onDone(data) {
	        component.props.complete();
	    }

	    function onFail(error) {
	        console.log(error);
	    }

	    model.update(updateTask, onDone, onFail);
	    
		this.setState({
			description: newInput
		})
	}

	render() {

		var complete = { textDecoration: 'line-Through' };
 		var not_complete = { textDecoration: 'none'};

		return (
			<div>
				<p style={this.state.done ? complete : not_complete}>
					<EditableTextField value={this.state.description} onChange={this.changedText.bind(this)} />
				</p>
				<button onClick={this.destroy.bind(this)}>Delete</button>
				<button onClick={this.complete.bind(this)}>Mark as complete</button>
			</div>
		);
	}
}

export default ListItem;
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
			projectId: this.props.projectId,
			description: this.props.description,
			done: this.props.done,
			createdAt: this.props.createdAt,
			updatedAt: this.props.updatedAt,
			projectId: this.props.projectId
		})
	}

	destroy(event) {

	    let component = this;
	    let deleteTask = { id: this.state.id };

	    jQuery.ajax({
	      	type: "DELETE",
	      	url: "https://projectapitask.herokuapp.com/projects/" + this.props.projectId + "/tasks/" + this.state.id,
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
	      	url: "https://projectapitask.herokuapp.com/projects/" + this.props.projectId + "/tasks/" + this.state.id,
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
	      	url: "https://projectapitask.herokuapp.com/projects/"+ this.props.projectId + "/tasks/" + this.state.id,
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

		var row = { 
			borderTop: '2.5px solid #d5d1b4',
			backgroundColor: '#f7f6f0',
			height: '90px',
			paddingLeft: '20px'
		}

		var task = {
			width: '100%',
			margin: '0px',
		}

		var list = {
			listStyleType: "none",	
			paddingLeft: '0px',
			margin:	'0px'
		}

		var mark = {
			width: '90px',
			fontFamily: 'helvetica-light',
			textTransform: 'uppercase',
			fontSize: '8px',
			color: 'white',
			padding: '5px',
			border: 'none',
			backgroundColor: '#00ADB0',
			borderRadius: '3px',
			outline: '0',
			display: 'inline-block',
			letterSpacing: '1px'
		}

		var del = {
			width: '90px',
			display: 'inline-block',
			marginLeft: '80px',
			fontFamily: 'helvetica-light',
			fontSize: '8px',
			textTransform: 'uppercase',
			color: 'white',
			padding: '5px',
			border: 'none',
			backgroundColor: '#D11F57',
			borderRadius: '3px',
			letterSpacing: '1px',
			outline: '0'
		}

		var complete = { textDecoration: 'line-Through', color: 'grey'};
 		var not_complete = { textDecoration: 'none'};

		return (
			<div style={row}>
				<div style={task}>
					<p style={this.state.done ? complete : not_complete}>
						<EditableTextField value={this.state.description} done={this.state.done} onChange={this.changedText.bind(this)} />
					</p>
					<button style={mark} onClick={this.complete.bind(this)}>Complete</button>
					<button style={del} onClick={this.destroy.bind(this)}>Delete</button>
				</div>
			</div>
		);
	}
}

export default ListItem;

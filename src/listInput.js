import React from 'react';

class ListInput extends React.Component {

	onSubmitForm(event){
		event.preventDefault();

		this.props.onSubmit(this.refs.todoItem.value);
	}

	render() {
		return (
				<form onSubmit={this.onSubmitForm.bind(this)}>
				<input ref="todoItem" placeholder="I need to..." />
				<button>Add</button>
				</form>
		);
	}
}

export default ListInput;
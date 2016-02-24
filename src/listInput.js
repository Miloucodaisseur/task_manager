import React from 'react';

class ListInput extends React.Component {

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
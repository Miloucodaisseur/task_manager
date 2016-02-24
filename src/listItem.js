import React from 'react';

class ListItem extends React.Component {
	
	destroy() {
		this.props.onChange(this.props.itemname);
	}

	handleClick() {
		this.props.onMark(this.props.itemname);
	}

	render() {

		var marked = { textDecoration: 'line-Through' };
 		var notMarked = { textDecoration: 'none'}

		return (
			<div>
				<p style={this.props.done ? marked : notMarked}>{this.props.itemname}</p>
				<button onClick={this.destroy.bind(this)}>Delete</button>
				<button onClick={this.handleClick.bind(this)}>Mark done</button>
			</div>
		);
	}
}

export default ListItem;
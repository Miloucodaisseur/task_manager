import React from 'react';

class EditableTextField extends React.Component {
  constructor() {
    super();

    this.state = {
      editing: false,
      value: ""
    };
  }

  handleKeyPress(event){
  	if (event.key === "Enter") {

  		var newInput = this.refs.input.value;
  		this.props.onChange(newInput);

  		this.setState({
  			editing: false
  		});
  	}
  }

  edit(event){
    if (this.props.done === false) {
      this.setState({
    		editing: true
    	});
    }
  }

  render() {

    var input = {
      margin: 0,
      padding: 0,
      width: '100%',
      borderStyle: 'none',
      border: 'none',
      outline: '0',
      fontSize: '16px',
      fontFamily: 'helvetica-light',
      color: '#D11F57',
      background: 'none'
    }

    if (this.state.editing) {
      return (
        <input style={input} ref="input" placeholder={this.props.value} onKeyPress={this.handleKeyPress.bind(this)}/>
      );
    } else {
      return(
        <span onClick={this.edit.bind(this)}>{this.props.value}</span>
      );
    }
  }
}
export default EditableTextField;

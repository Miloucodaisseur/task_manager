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

  		// de nieuwe waarde van de input wordt doorgegeven naar de parent
  		var newInput = this.refs.input.value;
  		this.props.onChange(newInput);

  		// edit functie wordt weer uitgezet
  		this.setState({
  			editing: false
  		});
  	}
  }

  edit(event){

  	// only if the task is not marked, the text field 
  	if (this.props.done == false){
	  	this.setState({
	  		editing: true
	  	});  	
	}
  }

  render() {

    var input = {
      margin: 0,
      padding: 0,
      width: '250px',
      borderStyle: 'none',
      border: 'none',
      outline: '0',
      fontSize: '18px',
      fontFamily: 'helvetica-light',
      color: '#D11F57',
      background: 'none'
    }

    if (this.state.editing) {
      return (
      	<input style={input} ref="input" defaultValue={this.props.value} onKeyPress={this.handleKeyPress.bind(this)}/>
      );
    } else {
      return(
        <span onClick={this.edit.bind(this)}>{this.props.value}</span>
      );
    }
  }
}

export default EditableTextField;
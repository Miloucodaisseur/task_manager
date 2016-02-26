import React from 'react';

class EditableTitle extends React.Component {
  constructor(){
    super();

    this.state = {
      editing: false
    };
  }

  handleKeyPress(event){
    if (event.key === "Enter") {
      var newTitle = this.refs.input.value;
      this.props.onChange(newTitle);

      this.setState({
        editing: false
      });
    }
  }

  edit(event) {
    this.setState({
      editing: true
    });
  }

  render() {

    var input = {
      margin: 0,
      padding: 0,
      width: '100%',
      borderStyle: 'none',
      border: 'none',
      outline: '0',
      fontSize: '24px',
      fontFamily: 'helvetica-light',
      color: '#D11F57',
      background: 'none'
    }

    if (this.state.editing) {
      return (
        <div>
          <input style={input} ref="input" defaultValue={this.props.value} onKeyPress={this.handleKeyPress.bind(this)} />
        </div>
      );
    } else {
      return(
        <span onClick={this.edit.bind(this)}>{this.props.value}</span>
      );
    }

  }
}

export default EditableTitle;

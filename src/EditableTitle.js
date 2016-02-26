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
    if (this.state.editing) {
      return (
        <div>
          <input ref="input" defaultValue={this.props.value} onKeyPress={this.handleKeyPress.bind(this)} />
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

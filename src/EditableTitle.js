import React from 'react';

class EditableTitle extends React.Component {
  constructor(){
    super();
  }

  handleKeyPress(event){
    if (event.key === "Enter") {
      var newTitle = this.refs.input.value;
      this.props.onChange(newTitle);
    }
  }

  render() {
    return (
      <div>
        <input ref="input" defaultValue={this.props.value} onKeyPress={this.handleKeyPress.bind(this)} />
      </div>
    );
  }
}

export default EditableTitle;

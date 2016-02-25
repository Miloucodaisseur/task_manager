import React from 'react';
import jQuery from 'jquery';

class ProjectInput extends React.Component {
  constructor() {
    super();
  }

  onSubmitForm(event) {
    event.preventDefault();

    let component = this;
    let title = this.refs.newProjectInput.value;
    let newProject = {
      id: null,
      title: title
    };

    console.log(newProject);
  }



  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm.bind(this)}>
          <input ref="newProjectInput" />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default ProjectInput;

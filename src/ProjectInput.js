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

    jQuery.ajax({
      type: "POST",
      url: "https://projectapitask.herokuapp.com/projects.json",
      data: JSON.stringify({
          project: newProject
      }),
      contentType: "application/json",
      dataType: "json"
    })

    .done(function(data) {
      component.props.onChange();
      component.refs.newProjectInput.value = "";
    })

    .fail(function(error) {
      console.log(error);
    });
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

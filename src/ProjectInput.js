import React from 'react';
import jQuery from 'jquery';

class ProjectInput extends React.Component {
  constructor() {
    super();
  }

  onSubmitForm(event) {
    event.preventDefault();

    let component = this;
    let title = this.refs.newProjectTitle.value;
    let description = this.refs.newProjectDescription.value;
    let newProject = {
      id: null,
      title: title,
      description: description
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
      component.refs.newProjectTitle.value = "";
      component.refs.newProjectDescription.value = "";
    })

    .fail(function(error) {
      console.log(error);
    });
  }



  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm.bind(this)}>
          <input ref="newProjectTitle" placeholder="Title"/>
          <input ref="newProjectDescription" placeholder="Description"/>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default ProjectInput;

import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import ToDoList from './toDoList';

class Project extends React.Component {

  constructor() {
    super();

    this.state = {
      project: {}
    };
  }

  componentDidMount() {
    this.findProject();
  }

  findProject(){
    let projectId = this.props.params.projectId;
    let component = this;

    jQuery.getJSON("https://projectapitask.herokuapp.com/projects/" + projectId + ".json", function(data) {
      component.setState({
        project: data.project
      });
      console.log(this.state.project);
    });
  }

  destroy(event){
    let component = this;
    let destroyedProject = this.state.project.id;

    jQuery.ajax({
      type: "DELETE",
      url: "http://projectapitask.herokuapp.com/projects/" + destroyedProject,
      data: JSON.stringify({
        project: destroyedProject
      }),
      contentType: "application/json",
      dataType: "json"
    })

    .done(function(data){
      // Should be a automatic redirect to homepage. Maybe with transitionTo?
      // browserHistory.push('/');
    })

    .fail(function(error){
      console.log(error);
    })
  }

  render() {
    return (
      <div>
          <h1>{this.state.project.title}</h1>
          <p>{this.state.project.description}</p>
          <button onClick={this.destroy.bind(this)}>Delete Project</button>
          <ToDoList projectId={this.props.params.projectId} />
      </div>
    );
  }
}

export default Project;

import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import ToDoList from './toDoList';
import EditableTitle from './EditableTitle';

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

      browserHistory.push('/');
    })

    .fail(function(error){
      console.log(error);
    })
  }

  changedText(newTitle){
    let oldState = this.state;

    let changedState = {
      project: { title: newTitle }
    }

    let newState = jQuery.extend(oldState, changedState);

    this.setState(newState);

    let projectId = this.props.params.projectId;

    jQuery.ajax({
        type: "PUT",
        url: "https://projectapitask.herokuapp.com/projects/" + projectId + ".json",
        data: JSON.stringify({
            project: this.state.project
        }),
        contentType: "application/json",
        dataType: "json"
    })

    .done(function(data) {
        // something after done
    })

    .fail(function(error) {
        console.log(error);
    });
  }



  render() {
    return (
      <div>
          <h1>
            <EditableTitle value={this.state.project.title} onChange={this.changedText.bind(this)} />
          </h1>
          <p>{this.state.project.description}</p>
          <button onClick={this.destroy.bind(this)}>Delete Project</button>
          <ToDoList projectId={this.props.params.projectId} />
      </div>
    );
  }
}

export default Project;

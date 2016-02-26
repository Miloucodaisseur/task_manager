import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import ToDoList from './toDoList';

class Project extends React.Component {
<<<<<<< HEAD
    constructor (){
      super();
    }

    componentDidMount() {
      this.setState({
        key: this.props.id,
        id: this.props.id,
        title: this.props.title,
        description: this.props.description,
        createdAt: this.props.createdAt,
        updatedAt: this.props.updatedAt
      })
    }

    destroy(event){
      let component = this;
      let destroyedProject = this.state.id;

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
        component.props.destroyed();
      })

      .fail(function(error){
        console.log(error);
      })
    }

    render() {

        var style = {
            width: '31%',
            padding: '20px',
            backgroundColor: '#f7f6f0',
            display: 'inline-block',
            verticalAlign: 'top',
            margin: '20px 10px 0px 10px',
            color: 'black'
        }

      return (
        <div style={style}>
          <h2>{this.state.title}</h2>
          <p>{this.state.description}</p>
          <button onClick={this.destroy.bind(this)}>Delete Project</button>
        </div>
      );
    }
||||||| merged common ancestors
    constructor (){
      super();
    }

    componentDidMount() {
      this.setState({
        key: this.props.id,
        id: this.props.id,
        title: this.props.title,
        description: this.props.description,
        createdAt: this.props.createdAt,
        updatedAt: this.props.updatedAt
      })
    }

    destroy(event){
      let component = this;
      let destroyedProject = this.state.id;

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
        component.props.destroyed();
      })

      .fail(function(error){
        console.log(error);
      })
    }

    render() {

      return (
        <div>
          {this.state.title}
          <button onClick={this.destroy.bind(this)}>Delete Project</button>
        </div>
      );
    }
=======
>>>>>>> df910b732eb2943e4a6d90a922c4527cf18e6791

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

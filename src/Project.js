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
      
      browserHistory.push('/');
    })

    .fail(function(error){
      console.log(error);
    })
  }

  render() {
    var style = {
      width: '31%',
      padding: '20px',
      backgroundColor: 'white',
      display: 'inline-block',
      verticalAlign: 'top',
      margin: '5px',
    }

    var todo = {
      display: 'inline-block',
      verticalAlign: 'top',
      margin: '5px',
      width: '55%',
    }

    var container = {
        width: '1200px',
        margin: 'auto'
    }
    var del = {
        width: '140px',
        height: '30px',
        fontFamily: 'helvetica-light',
        fontSize: '12px',
        textTransform: 'uppercase',
        color: 'white',
        padding: '5px',
        border: 'none',
        backgroundColor: '#D11F57',
        borderRadius: '3px',
        letterSpacing: '1px',
        outline: '0'
    }

    var header = {
        marginLeft: '10px',
        fontWeight: '100'
    }

    var user = {
        width: '50px',
        height: '50px',
        marginRight: '20px',
        marginBottom: '20px',
        borderRadius: '50%',
        display: 'inline-block'
    }

    var adduser = {
        fontWeight: '100',
        color: 'lightgrey',
        marginTop: '20px'
    }

    return (
      <div style={container}>
          <h1 style={header}>My Dashboard / All projects / {this.state.project.title} </h1>

          <div style={style}>
              <h2>{this.state.project.title}</h2>
              <p>{this.state.project.description}</p>

              <h2 style={adduser}>Members:</h2>
              <img style={user} src="https://qph.is.quoracdn.net/main-qimg-498de3782ec00063441d03e10b7548c4?convert_to_webp=true" />
              <img style={user} src="https://qph.is.quoracdn.net/main-qimg-498de3782ec00063441d03e10b7548c4?convert_to_webp=true" />
              <img style={user} src="http://www.tjinauyeung.nl/adduser.jpg"  />

              <button style={del} onClick={this.destroy.bind(this)}>Delete Project</button>
          </div>

          <div style={todo}>
              <ToDoList projectId={this.props.params.projectId} />
          </div>
      </div>
    );
  }
}

export default Project;

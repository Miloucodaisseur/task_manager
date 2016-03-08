import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import ProjectItem from './ProjectItem';
import ProjectInput from './ProjectInput';

class ProjectList extends React.Component {

    constructor(){
      super();

      this.state = {
        projects: []
      };
    }

    reload(event) {
      let component = this;
      jQuery.getJSON("https://projectapitask.herokuapp.com/projects.json", function(data){
        component.setState({
          projects: data.projects
        });
      });
    }

    componentDidMount() {
      this.reload();
    }

    render() {

      var container = {
        maxWidth: '950px',
        margin: 'auto'
      }

      var header = {
          marginLeft: '10px',
          fontWeight: '100',
          color: '#807e71'
      }

      var current = {
          color: '#00ADB0',
      }

      return (
        <div style={container}>
            <h1 style={header}><Link to="/">My Dashboard</Link> / <span style={current}><Link to="/">All projects</Link></span></h1>
          <ProjectInput onChange={this.reload.bind(this)} />

          {this.state.projects.map(function(project, i) {
            return(
                <ProjectItem key={project.id} id={project.id} title={project.title}
                description={project.description} />
            );
          })}
        </div>
      );
    }
  }

export default ProjectList;

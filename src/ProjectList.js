import React from 'react';
import jQuery from 'jquery';
import Project from './Project';
import ProjectInput from './ProjectInput';
import { Link } from 'react-router';

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
      return (
        <div>
          <h1>Project List</h1>
          <ProjectInput onChange={this.reload.bind(this)} />

          {this.state.projects.map(function(project, i) {
            return(
              <Project key={project.id} id={project.id} title={project.title} description={project.description} />
              <Link to={`/project/${project.id}`}>{project.title}</Link>
            );
          })}
        </div>
      );
    }
  }

export default ProjectList;

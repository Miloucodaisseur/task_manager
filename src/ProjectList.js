import React from 'react';
import jQuery from 'jquery';
import Project from './Project';

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
          {console.log(this.state.projects)}
          {this.state.projects.map(function(project, i) {
            return(
              <Project key={project.id} id={project.id} title={project.title} description={project.description} />
            );
          })}
        </div>
      );
    }
  }

export default ProjectList;

import React from 'react';
import jQuery from 'jquery';
import Project from './Project';
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
        width: '1400px',
        margin: 'auto'
      }

      return (
              <div style={container}>
                <h1>Project List</h1>
                <ProjectInput onChange={this.reload.bind(this)} />
         

                {this.state.projects.map(function(project, i) {

                  return( 
                          <Project key={project.id} id={project.id} title={project.title} 
                          description={project.description} destroyed={this.reload.bind(this)} />
                         );
                },this)}
              </div>
      );
    }
  }

export default ProjectList;

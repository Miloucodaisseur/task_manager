import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';
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
        width: '1400px',
        margin: 'auto'
      }

      return (
<<<<<<< HEAD
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
||||||| merged common ancestors
        <div>
          <h1>Project List</h1>
          <ProjectInput onChange={this.reload.bind(this)} />
          
          {this.state.projects.map(function(project, i) {
            return(
              <Project key={project.id} id={project.id} title={project.title} description={project.description} destroyed={this.reload.bind(this)} />
            );
          },this)}
        </div>
=======
        <div>
          <h1>Project List</h1>
          <ProjectInput onChange={this.reload.bind(this)} />

          {this.state.projects.map(function(project, i) {
            return(
                <ProjectItem key={project.id} id={project.id} title={project.title}
                description={project.description} />
            );
          })}
        </div>
>>>>>>> df910b732eb2943e4a6d90a922c4527cf18e6791
      );
    }
  }

export default ProjectList;

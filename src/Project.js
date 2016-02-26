import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';

class Project extends React.Component {
  constructor (){
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

    jQuery.getJSON("https://afternoon-atoll-31464.herokuapp.com/projects/" + projectId + ".json", function(data) {

      component.setState({
        project: data.project
      });
    });
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
}


export default Project;

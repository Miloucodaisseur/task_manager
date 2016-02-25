import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';

class Project extends React.Component {
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

      this.findProject();
    }

    findProject(){
      let projectId = this.state.id;
      let component = this;

      jQuery.getJSON("https://afternoon-atoll-31464.herokuapp.com/projects/" + projectId + ".json", function(data) {
        console.log(data);

      component.setState({
        project: data.project
      });
    });
  }

    render() {

      return (
        <div>
        <h1>{this.state.project.title}</h1>
        <h2>{this.state.project.description}</h2>

        </div>
      );
    }

}


export default Project;

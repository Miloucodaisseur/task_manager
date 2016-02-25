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

      component.setState({
        key: data.project.id,
        id: data.project.id,
        title: data.project.title,
        description: data.project.description,
        createdAt: data.project.createdAt,
        updatedAt: data.project.updatedAt
      });
    });
  }

  render() {

    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.description}</h2>
      </div>
    );
  }
}

// export default Project;

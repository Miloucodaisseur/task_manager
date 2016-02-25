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
    }

    render() {

      return (
        <div>
        <h1>{this.state.title}</h1>
        <h2>{this.state.description}</h2>
        </div>
      );
    }

}


export default Project;

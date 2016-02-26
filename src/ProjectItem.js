import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';

class ProjectItem extends React.Component {
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

    var style = {
      width: '31%',
      backgroundColor: '#f7f6f0',
      margin: '5px',
      display: 'inline-block',
      verticalAlign: 'top',
      padding: '20px'
    }

    return (
      <Link to={`/project/${this.state.id}`}>
        <div style={style}>
          <h2>{this.state.title}</h2>
          <p>{this.state.description}</p>
        </div>
      </Link>
    );
  }
}

export default ProjectItem;

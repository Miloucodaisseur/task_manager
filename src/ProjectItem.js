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
      width: '300px',
      backgroundColor: '#f7f6f0',
      margin: '5px',
      display: 'inline-block',
      verticalAlign: 'top',
      padding: '20px'
    }

    var user = {
        width: '50px',
        height: '50px',
        marginRight: '20px',
        marginBottom: '20px',
        borderRadius: '50%',
        display: 'inline-block'
    }

    var adduser = {
        fontWeight: '100',
        color: 'lightgrey',
        marginTop: '20px'
    }


    return (
      <Link to={`/project/${this.state.id}`}>
        <div style={style}>
          <h2>{this.state.title}</h2>
          <p>{this.state.description}</p>
            <h2 style={adduser}>Members:</h2>
            <img style={user} src="https://qph.is.quoracdn.net/main-qimg-498de3782ec00063441d03e10b7548c4?convert_to_webp=true" />
            <img style={user} src="https://qph.is.quoracdn.net/main-qimg-498de3782ec00063441d03e10b7548c4?convert_to_webp=true" />
        </div>
      </Link>
    );
  }
}

export default ProjectItem;

import React from 'react';
import jQuery from 'jquery';

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
        {this.state.title}
        </div>
      );
    }

}


export default Project;

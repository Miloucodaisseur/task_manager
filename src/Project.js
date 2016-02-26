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

        var style = {
            width: '31%',
            padding: '20px',
            backgroundColor: '#f7f6f0',
            display: 'inline-block',
            verticalAlign: 'top',
            margin: '20px 10px 0px 10px',
            color: 'black'
        }

      return (
        <div style={style}>
          <h2>{this.state.title}</h2>
          <p>{this.state.description}</p>
          <button onClick={this.destroy.bind(this)}>Delete Project</button>
        </div>
      );
    }

}


export default Project;

import React from 'react';
import jQuery from 'jquery';

class ProjectInput extends React.Component {
  constructor() {
    super();
  }

  onSubmitForm(event) {
    event.preventDefault();

    let component = this;
    let title = this.refs.newProjectTitle.value;
    let description = this.refs.newProjectDescription.value;
    let newProject = {
      id: null,
      title: title,
      description: description
    };

    jQuery.ajax({
      type: "POST",
      url: "https://projectapitask.herokuapp.com/projects.json",
      data: JSON.stringify({
          project: newProject
      }),
      contentType: "application/json",
      dataType: "json"
    })

    .done(function(data) {
      component.props.onChange();
      component.refs.newProjectTitle.value = "";
      component.refs.newProjectDescription.value = "";
    })

    .fail(function(error) {
      console.log(error);
    });
  }


  handleKeyPress(event){
    if (event.key == 'Enter') {
      event.preventDefault();
    };
  }

  render() {
          
          var style = {
              width: '32%',
              padding: '20px',
              backgroundColor: 'white',
              display: 'inline-block',
              verticalAlign: 'middle',
              margin: '20px 10px 0px 10px',
              color: 'black'
          }

          var input = {
              marginTop: '5px',
              height: '60px',
              width: "100%",
              borderStyle: 'none',
              border: 'none',
              outline: '0',
              fontSize: '24px',
              fontFamily: 'helvetica-bold',
              color: '#D11F57',
              backgroundImage: 'url(http://www.tjinauyeung.nl/plus-icon.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right'
          }

          var textarea = {
              width: '100%',
              borderStyle: 'none',
              border: 'none',
              outline: '0',
              fontSize: '16px',
              fontFamily: 'helvetica-light',
              color: '#D11F57'
          }

          var mark = {
            width: '90px',
            marginLeft: '15px',
            marginTop: '15px',
            fontFamily: 'helvetica-light',
            fontSize: '8px',
            color: 'white',
            padding: '5px',
            border: 'none',
            backgroundColor: '#00ADB0',
            borderRadius: '3px',
            outline: '0',
            letterSpacing: '1px'
          }

          var del = {
            width: '90px',
            marginLeft: '90px',
            fontFamily: 'helvetica-light',
            fontSize: '8px',
            color: 'white',
            padding: '5px',
            border: 'none',
            backgroundColor: '#D11F57',
            borderRadius: '3px',
            letterSpacing: '1px',
            outline: '0'
          }

    return (
      <div style={style}>
        <form onSubmit={this.onSubmitForm.bind(this)}>
<<<<<<< HEAD
          <input style={input} defaultValue="Add a new project" ref="newProjectInput" onKeyPress={this.handleKeyPress.bind(this)}/>
          <textarea style={textarea} rows="4" ref="newProjectInput">Add a project description here</textarea>
          <button style={mark}>COMPLETE</button>
          <button style={del}>DELETE</button>
||||||| merged common ancestors
          <input ref="newProjectInput" />
          <button type="submit">Add</button>
=======
          <input ref="newProjectTitle" placeholder="Title"/>
          <input ref="newProjectDescription" placeholder="Description"/>
          <button type="submit">Add</button>
>>>>>>> df910b732eb2943e4a6d90a922c4527cf18e6791
        </form>
      </div>
    );
  }
}

export default ProjectInput;

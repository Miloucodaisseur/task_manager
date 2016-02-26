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



  render() {

    var style = {
      width: '31%',
      backgroundColor: '#fff',
      margin: '5px',
      display: 'inline-block',
      verticalAlign: 'top',
      padding: '20px'
    }

    var input = {
        height: '35px',
        width: '100%',
        padding: '0',
        borderStyle: 'none',
        border: 'none',
        outline: '0',
        fontSize: '24px',
        fontFamily: 'helvetica-light',
        color: '#D11F57',
        backgroundImage: 'url(http://www.tjinauyeung.nl/plus-icon.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right'
    }

    var textarea = {
        marginTop: '20px',
        width: '100%',
        height: '130px',
        borderStyle: 'none',
        border: 'none',
        outline: '0',
        fontSize: '16px'
    }

    var add = {
        width: '140px',
        height: '30px',
        fontFamily: 'helvetica-light',
        fontSize: '12px',
        textTransform: 'uppercase',
        color: 'white',
        padding: '5px',
        border: 'none',
        backgroundColor: '#00ADB0',
        borderRadius: '3px',
        letterSpacing: '1px',
        outline: '0'
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
      <div style={style}>
        <form onSubmit={this.onSubmitForm.bind(this)}>
            <input style={input} ref="newProjectTitle" placeholder="Add a new project"/>
            <textarea style={textarea} rows="5" placeholder="Add your project description here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis doloremque ad harum numquam dicta voluptatibus voluptates quidem quisquam, nam voluptatum deserunt possimus? Expedita quasi sequi error incidunt molestiae pariatur quod?"  ref="newProjectDescription"/>
            
            <h2 style={adduser}>Members:</h2>
            <img style={user} src="https://qph.is.quoracdn.net/main-qimg-498de3782ec00063441d03e10b7548c4?convert_to_webp=true" />
            <img style={user} src="https://qph.is.quoracdn.net/main-qimg-498de3782ec00063441d03e10b7548c4?convert_to_webp=true" />
            <img style={user} src="http://www.tjinauyeung.nl/adduser.jpg" />

            <button style={add} type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default ProjectInput;

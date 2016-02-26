import React from 'react';
import ListInput from './listInput';
import ListItem from './listItem';
import jQuery from 'jquery';

class ToDoList extends React.Component {

  	constructor(){
  		  super();

  		  this.state = {
  			  tasks: []
  		  };
  	}

    reloadList(event) {
        let component = this;
        let projectId = this.props.projectId;

        jQuery.getJSON("https://projectapitask.herokuapp.com/projects/" + projectId +"/tasks.json", function(data){
            component.setState({
                tasks: data.tasks
            });
        });
        console.log(this.state.tasks);
    }

    componentDidMount() {
        this.reloadList();
  	}

  	render() {
        return (
          	<section>
              	<h1>To do:</h1>
                  <ListInput onChange={this.reloadList.bind(this)} projectId={this.props.projectId} />
                  <button onClick={this.reloadList.bind(this)}>Testing</button>
                  {this.state.tasks.map(function(task, i) {
                      return(
                         <ListItem description={task.description}/>
                      );
                  })}

            </section>
        );
    }
}

export default ToDoList;

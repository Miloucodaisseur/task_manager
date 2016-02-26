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
                  <ListInput onChange={this.reloadList.bind(this)} projectId={this.props.projectId} />
                  {this.state.tasks.map(function(task, i) {
                      return(
                          <ListItem projectId={this.props.projectId} key={task.id} id={task.id} description={task.description} done={task.done} destroy={this.reloadList.bind(this)} complete={this.reloadList.bind(this)} />
                      );
                  }, this)}

            </section>
        );
    }
}

export default ToDoList;

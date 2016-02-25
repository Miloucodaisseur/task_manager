import React from 'react';
import ListInput from './listInput';
import ListItem from './listItem';
import jQuery from 'jquery';
import model from './Model';


class ToDoList extends React.Component {

  	constructor(){
  		  super();
  		  this.state = {
  			  tasks: []
  		  };
  	}

    reload(event) {
        let component = this;

        function onDone (data){
            component.setState({
                tasks: data.tasks
            });
        }

        model.get(onDone);
    }

    componentDidMount() {
        this.reload();
  	}

  	render() {
        return (
          	<section>
              	<h1>To do:</h1>
              	<ListInput onChange={this.reload.bind(this)} />

                {this.state.tasks.map(function(task, i) {
                    return(
                        <ListItem key={task.id} id={task.id} description={task.description} done={task.done} destroy={this.reload.bind(this)} complete={this.reload.bind(this)} />
                    );
                }, this)}
            </section>
        );
    }
}

export default ToDoList;

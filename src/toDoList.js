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

    reloadList(event) {
        let component = this;

        function onDone (data){
            component.setState({
                tasks: data.tasks
            });
        }

        model.get(onDone);
        console.log(model);
    }

    componentDidMount() {
        this.reloadList();
  	}

  	render() {
        return (
          	<section>
              	<h1>To do:</h1>
              	<ListInput onChange={this.reloadList.bind(this)} />

                {this.state.tasks.map(function(task, i) {
                    return(
                        <ListItem key={task.id} id={task.id} description={task.description} done={task.done} destroy={this.reloadList.bind(this)} complete={this.reloadList.bind(this)} />
                    );
                }, this)}
            </section>
        );
    }
}

export default ToDoList;

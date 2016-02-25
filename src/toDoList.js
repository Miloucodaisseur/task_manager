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
        jQuery.getJSON("https://apitask.herokuapp.com/tasks.json", function(data){
            component.setState({
                tasks: data.tasks
            });
        }); 
    }

    componentDidMount() {
        this.reloadList();
  	}

  	render() {
        var style = {
          width: '300px'
        }

        return (
          	<section style={style}>
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

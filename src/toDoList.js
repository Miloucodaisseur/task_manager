import React from 'react';
import ListInput from './listInput';
import ListItem from './listItem';
import jQuery from 'jquery';

class ToDoList extends React.Component {

	constructor(){
		super();
		this.state = {
			items: ["Call my mom", "Do the groceries", "Find my cat", "Finish my homework"],
		};
	}

    // componentDidMount(){
    //      // the jQuery.get callback will create a new context (this), so we need to remember what 'this'
    //      var self = this;
    //      jQuery.get("https://apitask.herokuapp.com/tasks.json", function(data){
    //          self.setState({
    //              items: data.tasks
    //          });
    //      });
    // }

	onChangeDestroy(item){

		this.state.items.splice(item, 1);

		this.setState({
			items: this.state.items
		});
	}

	onMarkDone(itemname){
	}

	renderItems(item){
		return <ListItem itemname={item} onChange={this.onChangeDestroy.bind(this)} onMark={this.onMarkDone.bind(this)}/>;
	}

	onAddListItem(item) {
		var newItem = item;
		var newItems = this.state.items.concat(newItem);
		this.setState({
			items: newItems
		});
	}

	render() {
        return (
        	<div>
        	<h1>My First To Do App</h1>
            	<ListInput onSubmit={this.onAddListItem.bind(this)} />
            	<div>{this.state.items.map(this.renderItems.bind(this))}</div>
            </div>
        );
	}
}

export default ToDoList;
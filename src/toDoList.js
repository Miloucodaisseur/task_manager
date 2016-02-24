import React from 'react';
import ListInput from './listInput';
import ListItem from './listItem';
import jQuery from 'jquery';


class ToDoList extends React.Component {

	constructor(){
		
		super();
		this.state = {
			items: [{
        		done: false,
        		description: "Call my mom"
      			}, {
        		done: false,
        		description: "Do the groceries"
      			}, {
        		done: false,
        		description: "Find my cat"
      			}, {
        		done: false,
        		description: "Finish my homework"
      		}]
		};
	}

	componentDidMount() {
    	let component = this;
    	jQuery.getJSON("https://apitask.herokuapp.com/tasks.json", function(data){
        	component.setState({
            	items: data.tasks
        	})
    	}); 
  	}

	onChangeDestroy(item){

		this.state.items.splice(item, 1);

		this.setState({
			items: this.state.items
		});
	}

	onMarkDone(val){
		var items = this.state.items;
 		var item = this.state.items.find(function(element) {
      		return element.description == val;
    	});
   		
    	if(item){
      		item.done = !item.done;
    	}

    	this.setState({
      		items: this.state.items
    	});
	}

	renderItems(item){
		return <ListItem itemname={item.description} done={item.done} onChange={this.onChangeDestroy.bind(this)} onMark={this.onMarkDone.bind(this)} key={item.description}/>;
	}

	onAddListItem(item) {
		var newItem = {
      		done: false,
      		description: item
    	};
		var newItems = this.state.items.concat(newItem);
		this.setState({
			items: newItems
		});
	}

	render() {
        return (
        	<section>
            	<h1>To Do</h1>
            	<ListInput onSubmit={this.onAddListItem.bind(this)} />
               	{this.state.items.map(this.renderItems.bind(this))}
          	</section>
        );
    }
}

export default ToDoList;

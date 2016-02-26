import jQuery from 'jquery';

class Local {
	constructor(){
		this.tasks = [
		{
			id: 1,
			description: "Hello",
			done: true
		},{

			id: 2,
			description: "Hello again!",
			done: false
		},{

			id: 3,
			description: "Hello again!",
			done: false
		},{

			id: 4,
			description: "Hello again 4!",
			done: false

			}];
	}

	get(onDone) {
		var response = {tasks: this.tasks};
		onDone( response );
	}

	// still not working, needs to be fixed
	post(task, onDone, onFail) {
		var newTasks = this.tasks.concat(task);
		task = newTasks;
		onDone({ task: newTasks});
	}
}


class Remote {

	constructor() {
		this.server = "https://projectapitask.herokuapp.com/";
	}

	get(onDone){
		jQuery.getJSON( this.server + "tasks.json", onDone);
	}

	post(task, onDone, onFail) {

		var data = JSON.stringify({ task: task });

		let request = {
	      	type: "POST",
	      	url: this.server + "tasks.json",
	      	data: data,
	      	contentType: "application/json",
	      	dataType: "json"
	    };

	    jQuery.ajax( request ).done(onDone).fail(onFail);
	}

	destroy(task, onDone, onFail) {

		var data = JSON.stringify({task: task});

		let request = {
	      	type: "DELETE",
	      	url: this.server + "tasks/" + task.id,
	      	data: data,
	      	contentType: "application/json",
	      	dataType: "json"
	    };

	    jQuery.ajax(request).done(onDone).fail(onFail);
	}

	update(task, onDone, onFail) {

		var data = JSON.stringify({task: task});

		let request = {
	      	type: "PUT",
	      	url: this.server + "tasks/" + task.id,
	      	data: data,
	      	contentType: "application/json",
	      	dataType: "json"
	    };

	   	jQuery.ajax(request).done(onDone).fail(onFail);
	}

}

// for local database use "var model = new Local", for remote database use "var model = new Remote"

var model = new Remote;
// var model = new Local;

export default model;

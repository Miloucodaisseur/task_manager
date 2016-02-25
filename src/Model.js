import jQuery from 'jquery';

class TasksRemote {

	constructor() {
		this.server = "https://apitask.herokuapp.com/";
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
	    

	get(onDone){
		jQuery.getJSON( this.server + "tasks.json", onDone);
	}

}


class Model {

	constructor(){
		this.tasks = new TasksRemote;
	}
}

var model = new TasksRemote;


export default model;
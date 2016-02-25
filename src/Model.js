import jQuery from 'jquery';

class Local {
	constructor(){
		this.tasks = [];		
	}

	get(onDone) {
		var response = {tasks: this.tasks};
		onDone( response );
	}

}


class Remote {

	constructor() {
		this.server = "https://apitask.herokuapp.com/";
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

// var model = new Remote;
var model = new Local;

export default model;
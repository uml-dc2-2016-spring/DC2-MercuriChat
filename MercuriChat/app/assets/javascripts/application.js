// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap.min
<<<<<<< HEAD
//= require jquery-ui/autocomplete
//= require turbolinks
//= require dashboard
//= require_tree .


=======
//= require dashboard
//= require websockets
//= require_tree ../../../vendor/assets/javascripts/.
//= require turbolinks
//= require websocket_rails/main
//= require_tree .

$(document).ready(function() {
	var w = new WebSocketRails('localhost:3000');
	w.on_open = function(data) {
		console.log("Connection has been established: ", data);
		w. trigger("Hello", "Hello there!");
		console.log("We have sent hello!");
	}

	var channel = dispatcher.subscribe('updates');
	channel.bind('update', function(count)) {
		$('#count').text(count);
	}
});
>>>>>>> 697ba6b1c84dfce54b44f48b5dc31260997473f3

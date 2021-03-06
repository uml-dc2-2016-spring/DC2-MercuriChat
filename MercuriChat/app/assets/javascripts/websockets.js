// Code for HTML5 WebSockets implementation: 

// Referenced from "The Definitive Guide to HTML5 WebSocket"
// Start a new WebSocket:
//var w = new WebSocketRails('localhost:3000/websocket')
url = "ws://localhost:3000/dashboard";
if(!w) {
    var w = new WebSocket(url);
    console.log("Client creating new websocket.")
}

// The following WebSocket events are referenced from the following sources--
// Referenced from: https://www.youtube.com/watch?v=WDowDtfWiGQ 
// Referenced from: http://www.tutorialspoint.com/html5/html5_websocket.htm

// WebSocket Event: open
// Description: occurs when WebSocket connection is established
w.onopen = function() {
	console.log("w.onopen: WebSocket has been opened!");

	// Sends message to confirm it works:
	// var str = "Thank you for opening this WebSocket request!";
	// w.send(str);
	// console.log("w.onopen: <" + str + "> was sent!");
}
  
// WebSocket Event: message
// Description: occurs when the client receives data from server.
w.onmessage = function(e) {
    console.log("w.onmessage:" + e.data.toString());
    if (e.data.toString())
    // Creating new variables for alert msgs:
    var alrtstr1 = "<div class=\"alert alert-msg\" role=\"alert\">";
    var alrtstr2 = "</div>";
    // Printing out time and date:
    var d = new Date();
    var tmanddat = "<br /><p class=\"tmdt\">" + d + "</p>";
    msg_channel = e.data.toString().split(/#&[^&]/)[0];
    if (gon.channel + " " == msg_channel) {
        displayMessage(alrtstr1 + e.data.toString().split(/#&[^&]/)[1] + tmanddat + alrtstr2);
    }
    else{
        //Calling Ruby using Ajax referenced from: http://stackoverflow.com/questions/30489571/how-to-call-ruby-method-on-server-from-javascript
        $.ajax({
            type: "GET",
            url: '/dashboard',
            data: {incoming_channel: msg_channel},
            dataType: "script"
        });
    }
    console.log("My Channel: " + gon.channel)
    console.log("Incoming Channel: " + msg_channel)
}

// WebSocket Event: error
// Description: occurs when there is an error in communication.
w.onerror = function(e) {
	console.log("w.onerror: WebSocket has encountered an error.");
}

// WebSocket Event: close
// Description: occurs when the WebSocket connection is closed.
w.onclose = function(e) {
    console.log(w)
	console.log("onclose: WebSocket has been closed!");
}

// On load, retrieve the message by button trigger:
window.onload = function() {
	document.getElementById("sendButton").onclick = function() {
		w.send(document.getElementById("inputMessage").value);
	}
}

function displayMessage(s) {
	var logOutput = document.getElementById("msgOutput");
	console.log("log: msgOuput has been stored. ");

	// For debugging purposes:
	//console.log("log:" + s);
	var el = $("#msgOutput").before('<p>' + s + '</p>');
	//console.log(el);

	// Referenced from: http://stackoverflow.com/questions/270612/scroll-to-bottom-of-div
	// Scrolls to the bottom of the  if overflowed:
	$("#msg-history").scrollTop($("#msg-history")[0].scrollHeight);

	// Referenced from: https://github.com/mathiasbynens/jquery-placeholder/issues/19
	// Clear textarea and display placeholder:
	$('#inputMessage').val('').blur();
	$('#inputMessage').focus();
}

$(document).ready(function(){
    var i = 0
    var alrtstr1 = "<div class=\"alert alert-msg\" role=\"alert\">";
    var alrtstr2 = "<div>";

    while(i < gon.chatlog.length) {
        d = gon.chatlogdate[i];
        var tmanddat = "<p class=\"tmdt\">" + d + "</p>";
        displayMessage(alrtstr1 + tmanddat + gon.chatlog[i] + alrtstr2);
        i += 1;
    }
    gon.chatlog = []
});


function showprev(){
    $.ajax({
        type: "GET",
        url: '/loadmore',    
        data: {msg_index: "ok"},
        dataType: "script"
    });

    var i = 0
    var alrtstr1 = "<div class=\"alert alert-msg\" role=\"alert\">";
    var alrtstr2 = "<div>";

    while(i < gon.chatlog.length) {
        d = gon.chatlogdate[i];
        var tmanddat = "<p class=\"tmdt\">" + d + "</p>";
        displayMessage(alrtstr1 + tmanddat + gon.chatlog[i] + alrtstr2);
        i += 1;
    }
}

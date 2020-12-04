import React from 'react';

import './Popup.css';

const Popup = () => {

  // chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  //   var activeTab = tabs[0];
  //   chrome.tabs.sendMessage(activeTab.id, { "message": "start" });
  // });
  // connectToSocket();

  // function connectToSocket() {
  //   // //If connected,return
  //   console.log("Connecting to socket");
  //   var socket = new SockJS('http://194.37.81.135:8080/snowflakes');
  //   console.log('socket--->', socket);
  //   stompClient = Stomp.over(socket);
  //   stompClient.connect({}, function (frame) {
  //     console.log("connected");
  //     stompClient.subscribe('/topic/112312/mobile', function (greeting) {
  //       showGreeting(JSON.parse(greeting.body).content);
  //     });
  //   });

  // }


  // function forwardEventsToClient() {

  // }






  return (
    <div className="App">
      <header className="App-header">
        Welcome to miro remote
      </header>
    </div>
  );
};

export default Popup;

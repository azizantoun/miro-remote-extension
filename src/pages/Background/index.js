// document.querySelector(".AT__bottom-bar--REMOTE").addEventListener("click", () => {
//     alert("im called");
// });

// import * as SockJS from 'sockjs-client';
// import { Stomp } from "@stomp/stompjs"

// function connectToSocket() {
//     // //If connected,return
//     console.log("Connecting to socket");
//     var socket = new SockJS('http://194.37.81.135:8080/snowflakes');
//     console.log('socket--->', socket);
//     const stompClient = Stomp.over(socket);
//     stompClient.connect({}, function (frame) {
//         console.log("connected");
//         stompClient.subscribe('/topic/112312/mobile', function (greeting) {
//             showGreeting(JSON.parse(greeting.body).content);
//         });
//     });

// }



// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.type == 'fromcontent') {
//         connectToSocket();
//     }
// });



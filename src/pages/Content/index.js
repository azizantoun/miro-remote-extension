import { printLine } from './modules/print';
import { elementReady } from "./modules/es6-element-ready";
import * as SockJS from 'sockjs-client';
import { Stomp } from "@stomp/stompjs"
import { doc } from 'prettier';



var stompClient;
var code = 0;
var notes = '';

elementReady('.bottom-bar__inner').then((bottomBar) => {
    renderRemoteButton();
});






chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "start") {
            //document.querySelector('.AT__bottom-bar--REMOTE').click();
            alert('here');
        }
    }
);

function start() {
    alert("started");
}


var slideContainer = document.querySelectorAll('.slide__inner');



function renderRemoteButton(selector = '.bottom-bar__inner', template) {
    var viewButton = `<div class="svg-button bottom-bar__plugin-button--REMOTE AT__bottom-bar--REMOTE"><div class="badge-wrappper">
    <img src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='24' height='24' fill='%23FDFDFD'/%3E%3Crect x='1' y='4' width='19' height='14' rx='1' stroke='%23050038' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M15 12.2C15 11.0799 15 10.5198 15.218 10.092C15.4097 9.71569 15.7157 9.40973 16.092 9.21799C16.5198 9 17.0799 9 18.2 9H19.8C20.9201 9 21.4802 9 21.908 9.21799C22.2843 9.40973 22.5903 9.71569 22.782 10.092C23 10.5198 23 11.0799 23 12.2V19.8C23 20.9201 23 21.4802 22.782 21.908C22.5903 22.2843 22.2843 22.5903 21.908 22.782C21.4802 23 20.9201 23 19.8 23H18.2C17.0799 23 16.5198 23 16.092 22.782C15.7157 22.5903 15.4097 22.2843 15.218 21.908C15 21.4802 15 20.9201 15 19.8V12.2Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.1615 8H19.8385C20.3657 7.99998 20.8205 7.99997 21.195 8.03057C21.5904 8.06287 21.9836 8.13419 22.362 8.32698C22.9265 8.6146 23.3854 9.07354 23.673 9.63803C23.8658 10.0164 23.9371 10.4096 23.9694 10.805C24 11.1796 24 11.6343 24 12.1615V19.8385C24 20.3657 24 20.8205 23.9694 21.195C23.9371 21.5904 23.8658 21.9836 23.673 22.362C23.3854 22.9265 22.9265 23.3854 22.362 23.673C21.9836 23.8658 21.5904 23.9371 21.195 23.9694C20.8205 24 20.3657 24 19.8385 24H18.1615C17.6343 24 17.1796 24 16.805 23.9694C16.4096 23.9371 16.0164 23.8658 15.638 23.673C15.0735 23.3854 14.6146 22.9265 14.327 22.362C14.1342 21.9836 14.0629 21.5904 14.0306 21.195C14 20.8205 14 20.3657 14 19.8385V12.1615C14 11.6343 14 11.1795 14.0306 10.805C14.0629 10.4096 14.1342 10.0164 14.327 9.63803C14.6146 9.07354 15.0735 8.6146 15.638 8.32698C16.0164 8.13419 16.4096 8.06287 16.805 8.03057C17.1795 7.99997 17.6343 7.99998 18.1615 8ZM16.9678 10.0239C16.6962 10.0461 16.5955 10.0838 16.546 10.109C16.3578 10.2049 16.2049 10.3578 16.109 10.546C16.0838 10.5955 16.0461 10.6962 16.0239 10.9678C16.0008 11.2512 16 11.6234 16 12.2V19.8C16 20.3766 16.0008 20.7488 16.0239 21.0322C16.0461 21.3038 16.0838 21.4045 16.109 21.454C16.2049 21.6422 16.3578 21.7951 16.546 21.891C16.5955 21.9162 16.6962 21.9539 16.9678 21.9761C17.2512 21.9992 17.6234 22 18.2 22H19.8C20.3766 22 20.7488 21.9992 21.0322 21.9761C21.3038 21.9539 21.4045 21.9162 21.454 21.891C21.6422 21.7951 21.7951 21.6422 21.891 21.454C21.9162 21.4045 21.9539 21.3038 21.9761 21.0322C21.9992 20.7488 22 20.3766 22 19.8V12.2C22 11.6234 21.9992 11.2512 21.9761 10.9678C21.9539 10.6962 21.9162 10.5955 21.891 10.546C21.7951 10.3578 21.6422 10.2049 21.454 10.109C21.4045 10.0838 21.3038 10.0461 21.0322 10.0239C20.7488 10.0008 20.3766 10 19.8 10H18.2C17.6234 10 17.2512 10.0008 16.9678 10.0239Z' fill='%23050038'/%3E%3C/svg%3E%0A"/>
    </div></div>`;
    const html = viewButton;
    document.querySelector(selector).insertAdjacentHTML('beforeend', html);
    renderRemoteDialog();
    addButtonEventListener();
}


function renderRemoteDialog(selector = 'body', template) {
    var dialogHTML = `<div class="remote-dialog-overlay"><div class="remote-dialog-overlay--inner"><p>Open on your device</p> <p class="underline"><a href="http://snowflakes2020.live">snowflakes20202.live</a></p> <p>Enter this passcode to connect to connect Miro Remote App</p> <p class="code">${code}</p><div class="remote-dialog-overlay--inner--close">&times;</div></div>`;
    const html = dialogHTML;
    document.querySelector(selector).insertAdjacentHTML('beforeend', html);
}


function addButtonEventListener() {
    document.querySelector(".AT__bottom-bar--REMOTE").addEventListener("click", () => {
        code = Math.floor(100000 + Math.random() * 900000);
        document.querySelector(".code").innerHTML = code;
        document.querySelector('.remote-dialog-overlay').classList.add("visible");
        connectToSocket(code);
    });
    document.querySelector(".remote-dialog-overlay--inner--close").addEventListener("click", () => {
        document.querySelector('.remote-dialog-overlay').classList.remove("visible");
    });
}


function getTotalSlideNumber() {
    return slideContainer.length;
}

function getSlidesThumbnails() {
    var thumbnails = [];
    slideContainer.forEach(item => {
        console.log(item.hasChildNodes.nodeName);
        if (item.hasChildNodes() && item.firstChild.nodeName === "CANVAS") {
            thumbnails.push(item.firstChild.toDataURL("image/png"));
        }
    });
    console.log(thumbnails)
}


var slideNext = function () {
    document.querySelector('[data-autotest-id="slides-navigator__next-slide"]').click();
}

var slidePrev = function () {
    document.querySelector('[data-autotest-id="slides-navigator__prev-slide"]').click();
}

var startPresentation = function () {
    document.querySelector('.remote-dialog-overlay').classList.remove("visible");
    document.querySelector('.presentation-play-button').click();
}




function readMessage(message) {
    console.log("Message recevied is==>", message);
    if (message && message.command) {
        let cmd = message.command;

        if (cmd === "present") {
            startPresentation();
        }
        if (cmd === "next") {
            slideNext();
        }
        if (cmd === "previous") {
            slidePrev();
        }

        // if (cmd === "getnotes") {
        //     fetchNotes();
        // }

    }

}


var fetchNotes = function () {
    const notes = document.querySelector('.miro-notes--editor').innerHTML;
    const msg = JSON.stringify({ 'notes': notes });
    stompClient.send(`/topic/${code}/mobile`, {}, msg);

}



function connectToSocket(code) {
    var socket = new SockJS('https://tf.testmiro.com/snowflakes');
    console.log('socket--->', socket);
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        document.querySelector('.AT__bottom-bar--PRESENTATIONS').click();
        stompClient.subscribe(`/topic/${code}/extension`, function (msg) {
            readMessage(JSON.parse(msg.body));
        });
    });
    //chrome.runtime.sendMessage({ 'type': 'fromcontent' });
}

var fetchNotesAndClose = function () {

}

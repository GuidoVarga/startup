const wsUri = "ws://echo.websocket.org/";
const output = document.getElementById('output');

document.getElementById('send-btn').onclick = () => {

  const message = document.getElementById('ms-input').value;
  console.log(wsUri);
  testWebSocket(message);
}

const testWebSocket = (message) => {
  
  const websocket = new WebSocket(wsUri);

  websocket.onopen = (evt) => {
    clearOutput();
    console.log('Connected');
    writeOnScreen("Sent: " + message);
    websocket.send(message);
  };

  websocket.onclose = (evt) => {
    console.log("Disconnected");
  };

  websocket.onmessage = (evt) => {
    console.log(evt.data);
    writeOnScreen('Response: ' + evt.data);
    websocket.close();
  };

  websocket.onerror = (evt) => {
    console.log(evt.data);
  };

};

const writeOnScreen = (message) => {
    const p = document.createElement("p");
    p.innerHTML = message;
    output.appendChild(p);
};

const clearOutput = () => {
    output.innerHTML="";
};

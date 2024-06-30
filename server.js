const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("Новое подключение");

  ws.on("message", function incoming(message) {
    console.log("получено сообщение:", message);

    // Отправка обратно полученного сообщения
    ws.send(`Эхо: ${message}`);
  });

  ws.on("close", function close() {
    console.log("Соединение закрыто");
  });

  ws.send("Добро пожаловать в WebSocket-сервер!");
});

console.log("WebSocket-сервер запущен на ws://localhost:8080");

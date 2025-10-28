import WebSocket, { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
wss.on('connection', function connection(ws) {
    // ws.on('error', console.error);
    ws.on('message', (data) => {
        console.log('received:', data.toString());
    });
    ws.send('no');
});
//# sourceMappingURL=index.js.map
import WebSocket, { WebSocketServer } from 'ws';
import { GameManager } from './GameManager.js';

const wss = new WebSocketServer({port:8080});

const gameManager = new GameManager();

wss.on('connection', function connection(ws){
    gameManager.addUser(ws);
    ws.send('disconnect', ()=>gameManager.removeUser(ws))


    // ws.on('message', function message(data){
    //     console.log('receivedd: %s',data)
    // })
});

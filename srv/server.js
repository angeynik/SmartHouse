const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const WebSocket = require('ws');


const app = express();

app.set('port', 3000);

 app.listen(app.get('port'), () => {
    console.log(`[OK] Server is running on localhost:${app.get('port')}`);
 });

 const WSServer = new WebSocket.Server ({port:1011}); 
 WSServer.on ('connection', ws => {
    ws.on ('message', message => {
        console.log (`Message:  ${message}`); 
    // Устанавливаем соединение
    });
    ws.send ('first mess'); 
    //Отправляем сообщение
    let i=0;
    setInterval (()=> {
        ws.send ('interval '+i);
        i++;
    }, 5000);
 });
 
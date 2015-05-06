var PORT = 3333;
var HOST = '127.0.0.1';
var calc = [];
var result;
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    calc = message.toString().split(",");
    result = eval(calc[0]+calc[1]+calc[2]);
    // console.log(result);

    console.log(remote.address + ':' + remote.port +' = ' + result);
});

server.bind(PORT, HOST);
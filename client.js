var PORT = 3333;
var HOST = '127.0.0.1';
var userinput = "";
var dgram = require('dgram');

process.argv.forEach(function(val, index, array) {
  if(index > 1){
    console.log(index + ': ' + val);
    userinput += (val+(','));
  }
});

var message = new Buffer(userinput);

var client = dgram.createSocket('udp4');
client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    client.close();
});
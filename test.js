var serialPort = require("serialport")
var sp = new serialPort.SerialPort("/dev/cu.usbmodem411", {
  baudrate: 9600,
  parser:serialPort.parsers.readline("\n")
});

var dat=0

var f = require('./mysql_connect.js');


  sp.on('data', function(data) {
  console.log('data received: ' + data);
  f.func(data)
});

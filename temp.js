var j5      = require('johnny-five'),
    arduino = new j5.Board();

arduino.on('ready', function(){
    var sensor = new j5.Sensor({
        pin : 'A0',
        freq: 1000
    });

    sensor.on('data', function(){
        console.log('data: ', this.raw);
    });
});

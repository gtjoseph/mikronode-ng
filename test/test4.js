/* jshint esversion:6 */

/*
 * This should show all the data from all 3 channels, regardless of the order of execution
 */

var MikroNode = require('../lib/index.js');

var connection = new MikroNode.Connection(process.argv[2], process.argv[3], process.argv[4],{timeout: 300});

connection.closeOnDone = false;

connection.connect((conn) => {
    var chan1 = conn.openChannel();
    var chan2 = conn.openChannel();
    var chan3 = conn.openChannel();

    chan1.closeOnDone = true;
    chan1.on('done', (data) => {
        data = MikroNode.parseItems(data);
        console.log(data);
    });
    chan1.once('trap', (data) => {
        data = MikroNode.parseItems(data);
        console.log(data);
    });
    chan1.write(['/ip/address/add','=interface=ether4','=address=192.168.5.5/24']);

    chan2.closeOnDone = true;
    chan2.on('done', (data) => {
        data = MikroNode.parseItems(data);
        console.log(data);
    });
    chan2.once('trap', (data) => {
        data = MikroNode.parseItems(data);
        console.log(data);
    });
    chan2.write(['/ip/address/add','=interface=ether4','=address=192.168.5.6/24']);

    chan3.closeOnDone = true;
    chan3.on('done', (data) => {
        data = MikroNode.parseItems(data);
        console.log(data);
    });
    chan3.once('trap', (data) => {
        data = MikroNode.parseItems(data);
        console.log(data);
    });
    chan3.write(['/ip/address/add','=interface=ether4','=address=192.168.5.7/24']);
});

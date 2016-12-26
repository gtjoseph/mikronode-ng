/* jshint esversion:6 */

/*
 * This tests the multi-channel handling of the API
 */

var MikroNode = require('../lib/index.js');

var connection = new MikroNode.Connection(process.argv[2], process.argv[3], process.argv[4],{
    timeout: 300,
    closeOnTimeout: false
});

connection.connect((conn) => {
    var chan1  = conn.openChannel();
    var chan2  = conn.openChannel();
    var chan3  = conn.openChannel();
    var chan4  = conn.openChannel();
    var chan5  = conn.openChannel();
    var chan6  = conn.openChannel();
    var chan7  = conn.openChannel();
    var chan8  = conn.openChannel();
    var chan9  = conn.openChannel();
    var chan10 = conn.openChannel();
    var chan11 = conn.openChannel();
    var chan12 = conn.openChannel();
    var chan13 = conn.openChannel();

    chan1.closeOnDone = true;
    chan1.on('read', (data) => {
        data = MikroNode.parseItems(data);
    });
    chan1.write('/ip/address/listen',(chan) => {
        console.log('Listening to addresses changes');
    });


    chan2.closeOnDone = true;
    chan2.on('done', (data) => {
        data = MikroNode.parseItems(data);
        console.log('Added IP: 192.168.5.5/24');
        console.log(data);
    });
    chan2.write(['/ip/address/add','=interface=ether4','=address=192.168.5.5/24']);

    chan3.closeOnDone = true;
    chan3.on('done', (data) => {
        data = MikroNode.parseItems(data);
        console.log('Added IP: 192.168.5.6/24');
        console.log(data);
    });
    chan3.write(['/ip/address/add','=interface=ether4','=address=192.168.5.6/24']);

    chan4.closeOnDone = true;
    chan4.on('done', (data) => {
        data = MikroNode.parseItems(data);
        console.log('Added IP: 192.168.5.7/24');
        console.log(data);
    });
    chan4.write(['/ip/address/add','=interface=ether4','=address=192.168.5.7/24']);

    chan5.closeOnDone = true;
    chan5.on('done', (data) => {
        data = MikroNode.parseItems(data);
        console.log('Listing addresses on interface ether4');
        console.log(data);
    });
    chan5.write(['/ip/address/print','?interface=ether4']);

    chan6.closeOnDone = true;
    chan6.on('done', (data) => {
        data = MikroNode.parseItems(data);
        console.log('Printing firewall configuration: FILTER');
        console.log(data);
    });
    chan6.write('/ip/firewall/filter/print');

    chan7.closeOnDone = true;
    chan7.on('done', (data) => {
        data = MikroNode.parseItems(data);
        console.log('Printing firewall configuration: NAT');
        console.log(data);
    });
    chan7.write('/ip/firewall/nat/print');

    chan8.closeOnDone = true;
    chan8.on('done', (data) => {
        data = MikroNode.parseItems(data);
        console.log('Printing firewall configuration: MANGLE');
        console.log(data);
    });
    chan8.write('/ip/firewall/mangle/print');

    chan9.closeOnDone = true;
    chan9.on('done', (data) => {
        data = MikroNode.parseItems(data);
        console.log('Printing firewall configuration: CONNECTION');
        console.log(data);
    });
    chan9.write('/ip/firewall/connection/print');

    chan10.closeOnDone = true;
    chan10.on('done', (data) => {
        data = MikroNode.parseItems(data);
        console.log('Printing DHCP Servers');
        console.log(data);
    });
    chan10.write('/ip/dhcp-server/print');

    chan11.closeOnDone = true;
    chan11.on('done', (data) => {
        data = MikroNode.parseItems(data);
        console.log('Printing DHCP Lease');
        console.log(data);
    });
    chan11.write('/ip/dhcp-server/lease/print');

    chan12.closeOnDone = true;
    chan12.on('done', (data) => {
        data = MikroNode.parseItems(data);
        console.log('Printing DHCP Networks');
        console.log(data);
    });
    chan12.write('/ip/dhcp-server/network/print');

    chan13.closeOnDone = true;
    chan13.on('done', (data) => {
        data = MikroNode.parseItems(data);
        console.log('Printing routerboard resource');
        console.log(data);
    });
    chan13.write('/system/resource/print');
});

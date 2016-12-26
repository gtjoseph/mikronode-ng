/* jshint esversion:6 */

/*
 * Same as test2 but with promise
 */

 var MikroNode = require('../lib/index.js');

 var connection = new MikroNode.Connection(process.argv[2], process.argv[3], process.argv[4],{
    timeout: 300,
    closeOnTimeout: false
 });

 connection.getConnectPromise().then(function(conn) {
    console.log('Connected');

    var chan1 = conn.getCommandPromise(['/ip/address/add','=interface=ether4','=address=192.168.5.5/24']);
    chan1.then((data) => {
        console.log('Added IP: 192.168.5.5/24');
        console.log(data);
    }, (err) => {
        console.log(err);
    });

    var chan2 = conn.getCommandPromise(['/ip/address/add','=interface=ether4','=address=192.168.5.6/24']);
    chan2.then((data) => {
        console.log('Added IP: 192.168.5.6/24');
        console.log(data);
    }, (err) => {
        console.log(err);
    });

    var chan3 = conn.getCommandPromise(['/ip/address/add','=interface=ether4','=address=192.168.5.7/24']);
    chan3.then((data) => {
        console.log('Added IP: 192.168.5.7/24');
        console.log(data);
    }, (err) => {
        console.log(err);
    });

    var chan4 = conn.getCommandPromise(['/ip/address/print','?interface=ether4']);
    chan4.then((data) => {
        console.log('Listing addresses on interface ether4');
        console.log(data);
    }, (err) => {
        console.log(err);
    });

    var chan5 = conn.getCommandPromise(['/ip/firewall/filter/print']);
    chan5.then((data) => {
        console.log('Printing firewall configuration: FILTER');
        console.log(data);
    }, (err) => {
        console.log(err);
    });

    var chan6 = conn.getCommandPromise(['/ip/firewall/nat/print']);
    chan6.then((data) => {
        console.log('Printing firewall configuration: NAT');
        console.log(data);
    }, (err) => {
        console.log(err);
    });

    var chan7 = conn.getCommandPromise(['/ip/firewall/mangle/print']);
    chan7.then((data) => {
        console.log('Printing firewall configuration: MANGLE');
        console.log(data);
    }, (err) => {
        console.log(err);
    });

    var chan8 = conn.getCommandPromise(['/ip/firewall/connection/print']);
    chan8.then((data) => {
        console.log('Printing firewall configuration: CONNECTION');
        console.log(data);
    }, (err) => {
        console.log(err);
    });

    var chan9 = conn.getCommandPromise(['/ip/dhcp-server/print']);
    chan9.then((data) => {
        console.log('Printing DHCP Servers');
        console.log(data);
    }, (err) => {
        console.log(err);
    });

    var chan10 = conn.getCommandPromise(['/ip/dhcp-server/lease/print']);
    chan10.then((data) => {
        console.log('Printing DHCP Lease');
        console.log(data);
    }, (err) => {
        console.log(err);
    });

    var chan11 = conn.getCommandPromise(['/ip/dhcp-server/network/print']);
    chan11.then((data) => {
        console.log('Printing DHCP Networks');
        console.log(data);
    }, (err) => {
        console.log(err);
    });

    var chan12 = conn.getCommandPromise(['/system/resource/print']);
    chan12.then((data) => {
        console.log('Printing routerboard resource');
        console.log(data);
    }, (err) => {
        console.log(err);
    });

 }, (result) => {
    console.log('Failed to connect');
    console.log(result);
 });

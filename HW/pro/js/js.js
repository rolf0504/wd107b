var socket = io();

socket.on('pi', function (data) {
    console.log(data.msg);
});
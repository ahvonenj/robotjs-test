// https://github.com/node-hid/node-hid
// npm install -g node-gyp
// npm install -g node-pre-gyp
// Visual C++ Compiler and Python 2.7

var keypress = require('keypress');

// Log daemon pid
console.log('DAEMON RUNNING, PID: ' + process.pid);


// Begin emitting
keypress(process.stdin);

process.stdin.on('keypress', function(ch, key)
{
	console.log('Key pressed', ch, key)
});

//rocess.stdin.setRawMode(true);
//process.stdin.resume();



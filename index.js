var daemon = require('daemon');

// Log parent pid
console.log('INDEX RUNNING, PID: ' + process.pid);


// Spawn child process
var child = daemon.daemon('demon.js', null,
{
	stdout: 'pipe'
});

// Log child process stdout-output
child.stdout.on('data', function(data)
{
	console.log(data.toString());
});



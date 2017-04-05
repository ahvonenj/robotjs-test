var child_process = require('child_process');

// Log parent pid
console.log('INDEX RUNNING, PID: ' + process.pid);


// Spawn child process
var child = child_process.spawn(process.execPath, ['demon.js'], 
{
	stdio: 'pipe',
	env: process.env,
	cwd: process.cwd,
	detached: true
});

child.unref();

// Log child process stdout-output
child.stdout.on('data', function(data)
{
	console.log(data.toString());
});

// Log child process stderr-output
child.stderr.on('data', function(data)
{
	console.log(data.toString());
});
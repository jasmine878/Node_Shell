// we can access the pwd function and store it in a variable like so.
//we can then call it by using pwd() and invoking the function;
const pwd = require('./pwd');
const ls = require('./ls');

//output a prompt
process.stdout.write('prompt > ');

//the stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
  if (data.toString().trim() === 'pwd') {
    pwd();
  } else if (data.toString().trim() === 'ls') {
    ls();
  } else {
    //'data' is an object.  We need to convert to a string in order to trim it.
    const cmd = data.toString().trim();   //.trim() removes the newLine

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ')
  }
})

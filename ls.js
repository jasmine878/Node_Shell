const fs = require('fs');

module.exports = function() {
  //we use the file system module (fs)
  //this built in Node module allows us to
  //access the machine's file system

  //fs is not global (like process) but a module.  So we need to "require" it
  //here we use 'read directory' (readdir) to get the files in a directory
  fs.readdir('./', 'utf-8', function(err, files) {
    if (err) {
      throw err
    } else {
      process.stdout.write(files.join('\n'));
      process.stdout.write("\nprompt > ")
    }
  })
}

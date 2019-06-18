module.exports = function() {
  // The process' current working directory (cwd) is available as
  //a method on the process global.
  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
}

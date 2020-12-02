const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = function(char){
  console.log(char);
  // if(char === 'x'){
  //   process.exit();
  // }
  if(char === '\u0003'){
    process.exit();
  }
}

exports.setupInput = setupInput
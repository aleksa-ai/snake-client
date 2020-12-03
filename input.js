let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = function(char){
  console.log(char);
  if(char === 'w'){
    connection.write("Move: up");
  }
  if(char === 'a'){
    connection.write("Move: left");
  }
  if(char === 's'){
    connection.write("Move: down");
  }
  if(char === 'd'){
    connection.write("Move: right");
  }
  if(char === 'g'){
    connection.write("Say: Go!");
  }
  if(char === 'h'){
    connection.write("Say: Hello!");
  }
  if(char === '\u0003'){
    process.exit();
  }
}

exports.setupInput = setupInput
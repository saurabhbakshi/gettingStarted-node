// All the parameter we passed to the script are captured in argv
// element-1 contains path to node executable, element-2 contains path to the executable file i.e. cmd_line.js
// element-3 are the parameter passed to the script, each argument is space seperated
console.log(process.argv);

// accessing individual argument

console.log(process.argv[2]);

const fs = require('fs');

console.log('-Before readFile');
fs.readFile('hello.txt','UTF-8',(err, data) => {
  if (err) throw err;
  console.log(data + ' (async)');
});
console.log('-After readFile');

console.log('-Before readFileSync');
const data = fs.readFileSync('hello.txt', 'UTF-8');
console.log(data + ' (sync)');
console.log('-After readFileSync');
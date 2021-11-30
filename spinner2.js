const arrows = ['\r|', '\r/', '\r-', '\r\\', '\r|'];

let x = 100;
for (const rotation of arrows) {
  setTimeout(() => {
    process.stdout.write(rotation);
  }, x);
  x += 200;
}

setTimeout(() => {
  process.stdout.write("\n")
}, x);

/*setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);
*/

// const sentence = "hello there from lighthouse labs \n";

// let x = 1000;
// for (const char of sentence) {
//     setTimeout(()=> {
//     process.stdout.write(char);
//   }, x);
//   x += 100;
// }

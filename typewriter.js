const sentence = "hello there from lighthouse labs";
const strNL = sentence + '\n'
for (let i in strNL) {
  setTimeout(() => process.stdout.write(strNL[i]), i * 100);
}
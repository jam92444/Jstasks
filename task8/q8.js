const now = new Date();
let time = now.toLocaleTimeString();
const date = now.toLocaleDateString();
const splittedDate = date.split("/");
time = time.replaceAll(time.includes("AM") ? "AM" : "PM", " ");
console.log(
  splittedDate[2] +
    "-" +
    splittedDate[1].padStart(2, 0) +
    "-" +
    splittedDate[0].padStart(2, 0),
  time
);

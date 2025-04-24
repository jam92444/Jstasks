// return promise
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, ms);
  });
}

delay(1000).then((msg) => console.log(msg));

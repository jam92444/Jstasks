var x = 5;
(function () {
  console.log(x); // 5
  eval("var x = 10;");
  console.log(x); // 10
})();

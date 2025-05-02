const students = [
  { id: 1, name: "Alice", scores: [80, 95, 70] },
  { id: 2, name: "Bob", scores: [60, 75, 85] },
  { id: 3, name: "Charlie", scores: [90, 92, 88] },
  { id: 4, name: "David", scores: [40, 55, 65] },
];

function markResult(obj) {
  let result = [];

  obj.forEach(({ id, name, scores }) => {
    let score = 0;
    scores.forEach((item) => (score = score + item));
    let average = (score / scores.length).toFixed(2);

    let studentObj = {
      id,
      name,
      average,
      status:
        average >= 90 && average <= 100
          ? "Excellent"
          : average >= 76 && average <= 89
          ? "Good"
          : average >= 55 && average <= 75
          ? "Average"
          : "Fail",
    };
    result.push(studentObj)
  });
  return result.sort((a,b)=>  b.average - a.average );
}
const data = markResult(students);
console.log("Student Result: ",data)

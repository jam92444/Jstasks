const students = [
  {
    name: "Alice",
    age: 20,
    courses: [
      { title: "Math", score: 85 },
      { title: "English", score: 92 },
    ],
  },
  {
    name: "Bob",
    age: 22,
    courses: [
      { title: "Math", score: 70 },
      { title: "English", score: 78 },
    ],
  },
  {
    name: "Charlie",
    age: 19,
    courses: [
      { title: "Math", score: 95 },
      { title: "English", score: 88 },
    ],
  },
];

const EnglishHighest = students
  .filter((item) => item.courses[1].score > 90)
  .map((item) => ({
    _name: item.name,
    englishScore: item.courses[1].score,
  }));

const MathHighest = () => {
  let highest = 0;
  students.forEach((item) => {
    if (highest == 0) {
      highest = item.courses[0].score;
    }
    if (item.courses[0].score > highest) {
      highest = item.courses[0].score;
    }
  });
  const data = students.filter((item) => item.courses[0].score == highest);
  return data[0].name;
};


const math = students.reduce((acc,valu)=> valu.courses[0].score > acc.courses[0].score ? valu : acc , students[0]);
console.log("Highest Student: ", EnglishHighest);
 
console.log("Highest Math score: ",MathHighest());

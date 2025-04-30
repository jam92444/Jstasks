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
  .filter((item) => item.courses.find(item => item.title==="English").score > 90)
  .map((item) => ({
    _name: item.name,
    englishScore: item.courses.find(item => item.title==="English" ).score ,
  }));

const MathHighest = () => {
  let highest = 0;
  students.forEach((item) => {
    let { courses} = item;
    let courseMark = courses.find(course => course.title == "Math" ).score;
    if (highest == 0) {
      highest = courseMark;
    }
    if (courseMark > highest) {
      highest = courseMark;
    }
  });
  const data = students.find((item) => item.courses.find(cours => cours.title === "Math").score === highest);
  return data.name;
};


console.log("Highest Student: ", EnglishHighest);
 
console.log("Highest Math score: ",MathHighest());

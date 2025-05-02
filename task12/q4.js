const students = [
  {
    id: 1,
    name: "Alice",
    courses: [
      { title: "Math", score: 85, completed: true },
      { title: "Science", score: 92, completed: true },
      { title: "History", score: 70, completed: false },
    ],
  },
  {
    id: 2,
    name: "Bob",
    courses: [
      { title: "Math", score: 55, completed: true },
      { title: "Science", score: 65, completed: false },
      { title: "History", score: 75, completed: true },
    ],
  },
  {
    id: 3,
    name: "Charlie",
    courses: [
      { title: "Math", score: 95, completed: true },
      { title: "Science", score: 98, completed: true },
      { title: "History", score: 88, completed: true },
    ],
  },
];

const studentResult = (obj) => {
  const result = [];
  obj.forEach(({ id, name, courses }) => {
    let average = (
      courses.reduce(
        (accumulator, currentValue) => accumulator + currentValue.score,
        0
      ) / courses.length
    ).toFixed(2);
    let studentObj = {
      id,
      name,
      averageScore: average,
      status:
        average >= 90 && average <= 100
          ? "Top Performer"
          : average > 54 && average < 90
          ? "Pass"
          : "Fail",
      completedCourses: courses
        .filter((item) => item.completed === true )
        .map((item) => item.title),
    };
    result.push(studentObj);
  });
  return result;
};

const data = studentResult(students);
console.log(data);

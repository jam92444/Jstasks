const departments = [
  {
    name: "Engineering",
    teams: [
      {
        teamName: "Frontend",
        employees: [
          { name: "Alice", score: 92 },
          { name: "Bob", score: 77 },
        ],
      },
      {
        teamName: "Backend",
        employees: [
          { name: "Charlie", score: 85 },
          { name: "Dave", score: 60 },
        ],
      },
    ],
  },
  {
    name: "Marketing",
    teams: [
      {
        teamName: "Content",
        employees: [
          { name: "Eve", score: 70 },
          { name: "Frank", score: 55 },
        ],
      },
      {
        teamName: "SEO",
        employees: [
          { name: "Grace", score: 90 },
          { name: "Heidi", score: 65 },
        ],
      },
    ],
  },
];

function showAverage(obj) {
  const result = obj.map(({ name, teams }) => ({
    department: name,
    averageScore:
      teams
        .map(
          (item) =>
            item.employees.reduce((acc, val) => acc + val.score, 0) /
            item.employees.length
        )
        .reduce((acc, val) => acc + val, 0) / teams.length,
    teams: teams.map(({ teamName, employees }) => ({
      teamName,
      averageScore:
        employees.reduce((acc, val) => acc + val.score, 0) / employees.length,
      rating:
        employees.reduce((acc, val) => acc + val.score, 0) / employees.length >
        65
          ? "Good"
          : "Needs Improvement",
    })),
  }));
  return result;
}

const data = showAverage(departments);
console.log(data[1].teams);

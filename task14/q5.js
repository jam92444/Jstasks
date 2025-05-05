const projects = [
  {
    projectId: "P001",
    projectName: "Website Redesign",
    teams: [
      {
        teamId: "T001",
        teamName: "Frontend",
        members: [
          {
            name: "John",
            role: "Developer",
            tasks: [
              {
                taskId: "T1",
                taskName: "Create Homepage",
                status: "Completed",
              },
              {
                taskId: "T2",
                taskName: "Design Navbar",
                status: "In Progress",
              },
            ],
          },
          {
            name: "Sarah",
            role: "Designer",
            tasks: [
              {
                taskId: "T3",
                taskName: "Create Wireframe",
                status: "Completed",
              },
            ],
          },
        ],
      },
      {
        teamId: "T002",
        teamName: "Backend",
        members: [
          {
            name: "Mike",
            role: "Developer",
            tasks: [
              {
                taskId: "T4",
                taskName: "Set up Database",
                status: "Completed",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    projectId: "P002",
    projectName: "Mobile App Development",
    teams: [
      {
        teamId: "T003",
        teamName: "Mobile Development",
        members: [
          {
            name: "Anna",
            role: "Developer",
            tasks: [
              {
                taskId: "T5",
                taskName: "Implement Login",
                status: "In Progress",
              },
            ],
          },
        ],
      },
    ],
  },
];

const findTask = (object, project) => {
  const teams = object.find(({ projectName }) => projectName === project).teams;
  const task = [];
  teams.forEach(({ members }) => {
    members.forEach(({ tasks }) => {
      tasks.forEach((item) => {
        task.push(item);
      });
    });
  });
  return task;
};
// console.log("Tasks: ", findTask(projects, "Website Redesign"));

const pendingTask = (object) => {
  const result = [];

  object.forEach(({ teams }) => {
    teams.forEach(({ teamName, members }) => {
      let count = 0;

      members.forEach(({ tasks }) => {
        tasks.forEach((task) => {
          if (task.status === "In Progress") {
            count++;
          }
        });
      });
      if (count > 0) {
        result.push({
          teamName,
          inProgressCount: count,
        });
      } else {
        result.push({
          teamName,
          inProgressCount: 0,
        });
      }
    });
  });

  return result;
};
// console.log("Pending Tasks: ", pendingTask(projects));
const CompletedTeam = (object) => {
  const result = [];

  object.forEach(({ teams }) => {
    teams.forEach(({ teamName, members }) => {
      let count = 0;

      members.forEach(({ tasks, name }) => {
        tasks.forEach((task) => {
          if (task.status === "Completed") {
            result.push({
              teamName,
              name: name,
              taskName: task.taskName,
            });
          }
        });
      });
    });
  });

  return result;
};

// console.log("Completed task team: ",CompletedTeam(projects))

const CompletedTeamTaskCount = (object) => {
  const result = [];

  object.forEach(({ projectName, teams }) => {
    let count = 0;
    teams.forEach(({ members }) => {
      members.forEach(({ tasks }) => {
        tasks.forEach((task) => {
          if (task.status === "Completed") {
            count++;
          }
        });
      });
    });
    result.push({
      projectName,
      completedTasks: count,
    });
  });

  return result;
};
// console.log("Completed task team Count: ", CompletedTeamTaskCount(projects));

const PeopleNotAssigned = (object) => {
  const result = [];

  object.forEach(({ teams }) => {
    teams.forEach(({ teamName, members }) => {
      members.forEach(({ tasks, name }) => {
        let count = 0;
        tasks.forEach((task) => {
          if (task.status == "In Progress") {
            count++;
          }
        });

        if (count < 1) {
          result.push({
            name,
            teamName,
          });
        }
      });
    });
  });

  return result;
};

// console.log("Completed task team: ", PeopleNotAssigned(projects));

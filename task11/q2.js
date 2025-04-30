let StudentsList = [
  {
    id: 1,
    name: "ABC",
    age: 20,
  },
  {
    id: 2,
    name: "DEF",
    age: 19,
  },
  {
    id: 3,
    name: "GHI",
    age: 22,
  },
  {
    id: 4,
    name: "JKL",
    age: 25,
  },
  {
    id: 5,
    name: "MNO",
    age: 23,
  },
  {
    id: 6,
    name: "PQR",
    age: 22,
  },
];


const deptAdded = StudentsList.map((item)=>({
   ...item,department:"CSE"
}))
const student = deptAdded.filter(stud =>  stud.age >= 22);
const findIndex = deptAdded.find(stud => stud.id == 4);
console.log(deptAdded);
console.log("Student over age 22: ", student);
console.log("Specific Student: ",findIndex);
console.log("Student Name: ",findIndex.name);

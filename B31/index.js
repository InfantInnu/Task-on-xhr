const scores = [
  {
    marks: 32,
    name: "Yvette Merritt"
  },
  {
    marks: 57,
    name: "Lillian Ellis"
  },
  {
    marks: 22,
    name: "Mccall Carter"
  },
  {
    marks: 21,
    name: "Pate Collier"
  },
  {
    marks: 91,
    name: "Debra Beard"
  },
  {
    marks: 75,
    name: "Nettie Hancock"
  },
  {
    marks: 20,
    name: "Hatfield Hodge"
  }
];

// [32, 57, 22]
// Task 1
// Print the name list - As an array
// Expected Output
// ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
//  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]
var scoresName = [];
var passedStu = [];
var failedStu = [];
for(i=0;i<scores.length;i++){
    scoresName.push(scores[i].name);
    if(scores[i].marks >= 40){
        passedStu.push(['marks: '+ scores[i].marks,'name: '+scores[i].name]);
    }
    if(scores[i].marks < 40){
        failedStu.push(scores[i].name);
    }
}
var taskOneOutput = scoresName;

// Task 2
// >=40 pass.. find those student that passed (Use array method)
// Expected Output
// [{
//     marks: 57,
//     name: "Lillian Ellis"
//   },
//     {
//     marks: 91,
//     name: "Debra Beard"
//   },
//   {
//     marks: 75,
//     name: "Nettie Hancock"
//   }]
var taskTwoOutput = passedStu;
// console.log(taskTwoOutput)
// Task 3
//  Find all the names who failed the exams (Array methods)
// Expected Output
//   ["Yvette Merritt",
//   "Mccall Carter",
//   "Pate Collier",
//   "Hatfield Hodge"
// ];
var taskThreeOutput = failedStu;
console.log(taskOneOutput);

console.log(taskTwoOutput);

console.log(taskThreeOutput);







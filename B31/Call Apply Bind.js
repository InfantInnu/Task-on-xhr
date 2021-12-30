// const scores = [
//   {
//     marks: 32,
//     name: "Yvette Merritt"
//   },
//   {
//     marks: 57,
//     name: "Lillian Ellis"
//   },
//   {
//     marks: 22,
//     name: "Mccall Carter"
//   },
//   {
//     marks: 21,
//     name: "Pate Collier"
//   },
//   {
//     marks: 91,
//     name: "Debra Beard"
//   },
//   {
//     marks: 75,
//     name: "Nettie Hancock"
//   },
//   {
//     marks: 20,
//     name: "Hatfield Hodge"
//   }
// ];

// [32, 57, 22]
// Task 1
// Print the name list - As an array
// Expected Output
// ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
//  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]
// var scoresName = [];
// var passedStu = [];
// var failedStu = [];
// for(i=0;i<scores.length;i++){
//     scoresName.push(scores[i].name);
//     if(scores[i].marks >= 40){
//         passedStu.push(['marks: '+ scores[i].marks,'name: '+scores[i].name]);
//     }
//     if(scores[i].marks < 40){
//         failedStu.push(scores[i].name);
//     }
// }
// var taskOneOutput = scoresName;

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
// var taskTwoOutput = passedStu;
// console.log(taskTwoOutput)
// Task 3
//  Find all the names who failed 
//  const topper = 
//  scores
//   .filter((score)=>score.marks>90)
//   .map((score)=>score.name);
//  console.log(topper);
// const sum = scores.reduce((sum,curr)=>sum+curr.marks,0);
// const average = sum/scores.length;
// console.log(average); 
// // topper of th class
// const topStudent= scores.reduce((topper,currStudent) =>topper.marks > currStudent.marks ? topper : currStudent);
// console.log(topStudent);


var student ={
  firstName:"Vijaya",
  lastName:"Bharathy",
  fullName:function(){
    return this.lastName + "," + this.firstName;
  },
};
student.fullName()
console.log(student.fullName());

// Call - Call invokes the function and allows you to pass in arguments one by one.
// Apply - Apply invokes the function and allows you to pass in arguments as an array.
// Bind - Bind returns a new function, allowing you to pass in a this array and any number of arguments.

var student1 ={
  firstName:"Infant",
  lastName:"Innu",
  fullName:student.fullName,
};
console.log(student1.fullName());
var printfullName =function(){
  return this.lastName + "," + this.firstname;
  };
  console.log(printfullName.apply(student1));

  // Prototype Inheritance--
          //  It is used to add methods and propertites in objects





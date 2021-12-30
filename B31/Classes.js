// OOPs- Object Oriented Programming system
// Class  


// class Car {
//     constructor(name,wheels,doors,engine){
//     this.name = name;
//     this.wheels = wheels;
//     this.doors = doors;
//     this.engine = engine;
// }
// }
// const BMW = new Car("BMW",4,4,"v6");
// const venue = new Car("venue",4,4,"v3");
// const landcruise = new Car("landcruise",4,5,"v8");
// console.log(BMW);
// console.log(venue );
// console.log(landcruise);


// class Account {
//     constructor(name,accno,balance){
//         this.name = name;
//         this.accno = accno;
//         this.balance = balance;
//     }
// }
// const infa = new Account("Infa",123,55000);
// const inu = new Account("Inu",124,5);
// const rag = new Account("Rag",125,0);
// console.log(infa);
// console.log(inu);
// console.log(rag);


// class Account {
//     constructor(name,accno,balance){
//         this.name = name;
//         this.accno = accno;
//         this.balance = balance;
//     }
//      getBalance(){
//          return `The balane is: Rs${this.balance}`;
//      }
// }
// const infa = new Account("Infa",123,55000);
// const vani = new Account("vani",124,200000);
// const rag = new Account("Rag",125,0);
// console.log(infa);
// console.log(vani);
// console.log(rag);

// console.log(vani.getBalance());

// Task amount withdrawn in vani acc

// class Account {
//     constructor(name,accno,balance){
//         this.name = name;
//         this.accno = accno;
//         this.balance = balance;
//     }
//     getBalance(){
//        return `The balance is: ₹${this.balance}`;
//      }
//      withdrawn(amount) {
//          if (this.balance >= amount) {
//          this.balance = this.balance - amount;
//              return this.getBalance();
//          } else {
//            return `Insufficient balance. ${this.getBalance()}`;

//          }
//      }
// }

// const infa = new Account("Infa",123,55000);
// const sofi = new Account("sofi",124,200000);
// const aiza = new Account("aiza",125,100000000);
// console.log(infa);
// console.log(sofi);
// console.log(aiza);
// console.log(sofi.getBalance());
// console.log(infa.withdrawn(75_000));
// console.log(aiza.withdrawn(2000000));

// Task credited

class Account {
    constructor(name,accno,balance){
        this.name = name;
        this.accno = accno;
        this.balance = balance;
    }
    getBalance(){
       return `The balance is: ₹${this.balance}`;
     }
     Credited(amount) {
         if (this.balance + amount) {
         this.balance = this.balance + amount;
             return this.getBalance();
         } else {
           return `Insufficient balance. ${this.getBalance()}`;

         }
     }
}

const infa = new Account("Infa",123,55000);
const sofi = new Account("sofi",124,200000);
const aiza = new Account("aiza",125,100000000);
console.log(infa);
console.log(sofi);
console.log(aiza);
console.log(sofi.getBalance());
console.log(sofi.Credited(10000));







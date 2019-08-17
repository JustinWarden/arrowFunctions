const myheader= document.querySelector("#main-heading").innerHTML="My Awesome Website!!!"

// function checkIfEven(number){
//     if(number%2===0){
//         return true
//     } else {
//         return false
//     }
// }


// function addTwoNumbers(num1, num2){
//     return num1 + num2
// }

// function makeASandwich(breadType, toppings){
//     return `Here's your ${toppings} sandwich on ${breadType}`
// }

// const checkIfEven = (number) => {
//     if(number%2===0){
//         return true
//     } else {
//         return false
//     }
    
// } 
// const even = checkIfEven(4)
// console.log(even)


// const addTwoNumbers = (num1, num2) => num1 + num2
// const sumoftwoNumber = addTwoNumbers(2,4)
// console.log(sumoftwoNumber)


// const makeASandwich = (breadType, toppings) => {
//     return `heres your ${toppings} sandwich on ${breadType}`
// }

// const sandwich= makeASandwich ("rye" , "beef")
// console.log (sandwich)


// const students = [
//     {
//         name: "Chris Miller",
//         subject: "History",
//         info: "Failed last exam",
//         score: 59
//     },
//     {
//         name: "Courtney Seward",
//         subject: "History",
//         info: "Has completed all homework",
//         score: 91
//     },
//     {
//         name: "Garrett Ward",
//         subject: "History",
//         info: "Wonderful at helping other students",
//         score: 88
//     },
//     {
//         name: "John Dulaney",
//         subject: "History",
//         info: "Has never missed a class or exam",
//         score: 92
//     },
//     {
//         name: "Greg Lawrence",
//         subject: "History",
//         info: "Sub-par performance all around",
//         score: 64
//     },
//     {
//         name: "Leah Duvic",
//         subject: "History",
//         info: "Wonderful student",
//         score: 97
//     },
//     {
//         name: "Jesse Page",
//         subject: "History",
//         info: "Smokes too much. Distracting.",
//         score: 76
//     },
//     {
//         name: "Kevin Haggerty",
//         subject: "History",
//         info: "Falls asleep in class",
//         score: 79
//     },
//     {
//         name: "Max Wolf",
//         subject: "History",
//         info: "Talks too much",
//         score: 83
//     },
//     {
//         name: "Lissa Goforth",
//         subject: "History",
//         info: "Asks pointless, unrelated questions",
//         score: 78
//     },
//     {
//         name: "Tyler Bowman",
//         subject: "History",
//         info: "When was the last time he attended class?",
//         score: 48
//     },
//     {
//         name: "Ray Medrano",
//         subject: "History",
//         info: "Needs to contribute to in-class discussions",
//         score: 95
//     }
// ]

// const createStudentComponent = (students ,className) => {
//     return `
//         <div class="student">
//             <h1 class=${className}>
//             ${students.name}</h1>
//             <section>${students.subject}</section>
//             <aside>
//                 ${students.info}
//             </aside>
//         </div>
//     `
// }

// const studentContainer = document.querySelector("#container")

// for (let i = 0; i < students.length; i++) {
//     let studentComponent = " "
//     if (students[i].score >= 60) {
//         studentComponent = createStudentComponent(students[i],"passing")
//     } else {
//         studentComponent = createStudentComponent(students[i],"failing")
//     }
//     const container = document.querySelector("#container")
// container.innerHTML += studentComponent
// }

// const ratman ={
// name: "larry",
// last: "ratman",
// age: 34
// }

// const batman = ratman.name + ratman.last + ratman.age 

// const pinguin = document.querySelector("#ratman").innerHTML = batman

// console.log(pinguin)



// const mousemilker = (num1, num2, num3) => {
//     return (num1 * num2 * num3)
// }
// // console.log(mousemilker(20,20,20))

// const mousekiller = document.querySelector("#mouseman").innerHTML= mousemilker(20,20,20)

// console.log(mousekiller)
function number(marks) {
    if (marks>79) {
        console.Log("Grade:A");
    } else if (marks >= 60 && marks <= 79) {
        console.log ("Grade:B");
    } else if (marks >= 50 && marks <= 59) {
        console.log("Grade:C");
    } else if (marks >= 40 && marks <= 49) {
        console.log("Grade:D");
    } else {
        console.log("Grade:E");
    }
return 'Marks Entered:' + marks;    
}
const myNumber = number(45);
console.log(myNumber);
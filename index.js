let fistname = "Owen Schell"; //strings
let age = 18; //number
let student = true; //boolean

//1 variables
age = age + 2;
console.log("Hello, my name is", fistname, "!");
console.log("I'm", age, "years old!");
console.log(student);
document.getElementById("p1").innerHTML = "Hello " + fistname;
document.getElementById("p2").innerHTML = "You are " + age; 

//2 arithmetic expressions
let students = 20;
students += 5;
students -= 10;
students *= 10;
students /= 15;
document.getElementById("p4").innerHTML = "There are " + students + " people in my class";

//3 user input
let username, person;
document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myText").value;
    person = document.getElementById("theirText").value;
    console.log(username);
    console.log(person);
    document.getElementById("myLabel").innerHTML = "Hello " + username + " and " + person + " people!";
}

//4 type conversion
/*let yourAge = window.prompt("How old are you ?");
yourAge = Number(yourAge);
yourAge += 1;
console.log("Happy birthday!!! You are", yourAge, "years old");
let y;
y = Boolean("");
console.log(y, typeof y); */

//5 Math, const
let x = 3;
//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Math.sqrt(x);
//x = Math.abs(x);
//x = Math.random();
//max, min, Pi;
console.log(x);

//6 Right angled triangle
document.getElementById("submitButton").onclick = function() {
    a = document.getElementById("atextBox").value;
    a = Number(a);
        
    b = document.getElementById("btextBox").value;
    b = Number(b);
        
    c = Math.pow(a, 2) + Math.pow(b, 2);
    c = Math.sqrt(c);
    document.getElementById("lbC").innerHTML = "Slide C: " + c;
}

/* 7 Counter program
let count = 0;
document.getElementById("decreasebtn").onclick = function() {
    count -= 1;
    document.getElementById("countlb").innerHTML = count;
}
document.getElementById("resetbtn").onclick = function() {
    count = 0; 
    document.getElementById("countlb").innerHTML= count;
}
document.getElementById("increasebtn").onclick = function() {
    count += 1;
    document.getElementById("countlb").innerHTML= count;
} */

//8 random number generation
let ranNx;
let ranNy;
let ranNz;
document.getElementById("rollButton").onclick = function() {
    ranNx =  Math.floor(Math.random() * 20) + 1;
    ranNy =  Math.floor(Math.random() * 20) + 1;
    ranNz =  Math.floor(Math.random() * 20) + 1;

    document.getElementById("randomXLabel").innerHTML = ranNx;
    document.getElementById("randomYLabel").innerHTML = ranNy;
    document.getElementById("randomZLabel").innerHTML = ranNz;
} 

//9 using string properties and method
let phoneNumber = "123-456-789";
console.log(fistname.length);
console.log(fistname.charAt(2));
console.log(fistname.indexOf("c"));
console.log(fistname.lastIndexOf("l"));
phoneNumber = phoneNumber.replaceAll("-", ",");
console.log(phoneNumber);

//10 slide() strings
let fullName = "Snoop Dog";
let f1stname;
let lastname;
console.log(f1stname = fullName.slice(0, fullName.indexOf(" ")));
console.log(lastname = fullName.slice(fullName.indexOf(" ") + 1));

//11 method chaining ("Phương pháp xâu chuỗi")
let userLogin = "Owen Schell";
let letter = userLogin.charAt(5).toLowerCase();
console.log(letter);

//12 if statement
document.getElementById("buttonAge").onclick = function() {
    let yourage = document.getElementById("ageInput").value;
    if (yourage >= 18) {
        document.getElementById("yourAge").innerHTML = " You are an adult ";
    }
    else {
        document.getElementById("yourAge").innerHTML = " You are not an adult yet.";
    }
}

//13 if else ex p1
document.getElementById("checkbtn").onclick = function() {
    const myCheckBox = document.getElementById("myCheckbox")
    if (myCheckBox.checked) {
        console.log('The checkbox is checked');
    }
    else {
        console.log('The checkbox is unchecked');
    }
}
//p2
document.getElementById("champbtn").onclick = function() {
    const myKaisa = document.getElementById("kaisalb")
    const myXayah = document.getElementById("xayahlb")
    const myJinx = document.getElementById("jinxlb")
    if (myKaisa.checked) {
        console.log('Kaisa is the best champion!')
    }
    else if (myXayah.checked) {
        console.log("Xayah is the best champion!")
    }
    else if (myJinx) {
        console.log("Jinx is the best champion!")
    }
    else {
        console.log("No one is selected as a favorite.")
    }
}
document.getElementById("resetbtn").onclick = function() {
    location.reload();
}

// 14. switch case
let grade = 60;
switch(true) {
    case grade >= 90:
        console.log("A");
        break;
    case grade >= 80:
        console.log("B");
        break;
    case grade >= 70:
        console.log("C");
        break;
    case grade >= 60:
        console.log("D");
        break;
    default: 
        console.log("You are not graded");
}      

// 15. NOT logical operator
let sunny = false;
if (!sunny) {
    console.log("It's cloudy today.");
}
else{
    console.log("Sunny day!");
}    

// 16. while loop
let userFullName = "";
while(userFullName == "" || userFullName == null){
    userFullName = window.prompt("Enter your full name")
    }
    console.log("Hello", userFullName);
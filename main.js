//  task 1 //

// //titles of numbers
// var first = "First number is:";
// var second = "second number is:";
// var sum = "the sum is:";
// var sub = "the sub is:";
// var malt = "malt is:";
// var div = "div is:";
// var mod = "mod is:";
// //numbers
// var x = 10;
// var y = 4;

// //orders
// console.log(first + " " + [x]);
// console.log(second + " " + [y]);
// console.log(sum + " " +[x + y] )
// console.log(sub + " " +[x - y] )
// console.log(malt + " " +[x * y] )
// console.log(malt + " " +[x / y] )
// console.log(malt + " " +[x % y] )

// other solution
// //variables
// var number1 = 10;
// var number2 = 4;
// var sum = number1 + number2;
// var sub = number1 - number2;
// var malt = number1 * number2;
// var div = number1 / number2;
// var mod = number1 % number2;

// //orders
// // console.log("the first number is:" + " " + number1);
// // console.log("the second number is:" + " " + number2);
// // console.log("sum is:" + " " + sum);
// // console.log("sub is:" + " " + sub);
// // console.log("malt is:" + " " + malt);
// // console.log("div is:" + " " + div);
// // console.log("mod is:" + " " + mod);

// // other solution

// var message1 = `the first number is : ${number1}\nthe second number is : ${number2}\n\nsum is : ${sum}\n\nsub is : ${sub}\n\nmalt is : ${malt}\n\ndiv is :${div}\n\nmod is : ${mod} `;
// document.getElementById("console_result").innerHTML = message1;

// var title = "This my first course of learning javascript ";
// var uppercase_title = title.toUpperCase();
// var lowercase_title = title.toLowerCase();
// console.log(title.substring(0, 20));
// console.log(uppercase_title);
// console.log(lowercase_title);

//+++ concatenation +++
// var x = 20;
// x += "hello";
// console.log(x);
// replace function
// var title = "programming is an amazing thing to learn on your holiday";
// console.log(title.replace("learn", "do"));

//task 2

// var word = "hello world";
// var uppercase_word = word.toUpperCase();
// var replaced_word = word.replace("o", "y");
// var reversed_word = [...uppercase_word].reverse().join("");
// // var reversed_word = word.reverse;
// console.log(word);
// console.log(uppercase_word);
// console.log(replaced_word);
// console.log(reversed_word);

//other//
// var element = document.getElementById("my_id");
// var word = "hello world";
// var uppercase_word = word.toUpperCase();
// var replaced_word = word.replace("o", "y");
// var reversed_word = word.split("").reverse().join("");

// element.innerHTML = `${word} ${uppercase_word} ${replaced_word} ${reversed_word}`;

//other
//the summoned h3/ rendered/
// rendering h3

// var submit_button = document.getElementById("btn").addEventListener("click" , function() {

//        var input = document.getElementById("input").value

//        var age = input;

//        if (age >= 60) {
//          console.log(`Old man his age is ${age}`);
//        } else if (age >= 40) {
//          console.log(`mid man his age is ${age}`);
//        } else {
//          console.log(`young boy his age is ${age}`);
//        }

// });

// var element1 = document.getElementById("my_id").innerHTML;
// var uppercase_element1 = element1.toUpperCase();
// var replaced_element1 = element1.replace("o","z");
// var reversed_element1 = uppercase_element1.split("").reverse().join("");

// var element2 = document.getElementById("my_result").innerHTML

// if statement && switch -- case
            // last task  //  age calc 
   // var age = 10; //age 
  // var health = "normal"; //health
  // var des = "young"; // description

  // if (age >=60 && des =="old" ||health=="weak"  ) {
  // console.log(`this man is a/an ${des} and his age is : ${age} \n he is ${health} because he is an ${des} `)

  // }
  // else if (age <60 && age >20 && des =="mid" || health =="strong" ) {
  //   console.log (`this man is ${des} \n and his age is ${age} \n and he is ${health}`)
  // }
  // else if (age>1 &&age<20 &&des=="young" || health =="normal") {
  //   console.log(`this is an ${des} people \n and he is ${health} \n and his age is ${age} `)
  // }




                  //// today we are going to learn array in javascript
                  // lets get started
 // firstly we should use [] to add an array 
 //example 
 
               /* var students = ["Mohamed ","Ali","Yaroub","Hashem","Marawan","sami"] */
      //  already we created an array  that 's contain  a students' names
  // we can use some operation 
  // the first operation we will use is : 
  // 1. push() ?? 
  // we can add an item to array with push function ,,, but this item will add in the end of array so there is a way to do that ,,,we will talk about it
  //2. we can change the value in array we want by using index 
  //example:
//   students[0] = "hassan";
  //now we changed "mohamed" to "hassan"
  //3. we can delete an item from array by using pop() ?? function ,,,, but pop delete this item from the end of array ,,,so there are a way to add an item where we want
  //4. we can use splice() ?? function to delete an item from array ,too.
  // splice ( * deleted value (index)  , ^ the number of items we want to delete ,      )
  //we can switch items instead of delete it by giving the ^ 0 index....             
//   students.splice(5,1)
//   console.log(students);

  
             ////  array task
   // elements 
   //done but again

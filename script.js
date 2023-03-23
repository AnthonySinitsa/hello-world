//let
//const
//four egg sample
//let usersName = prompt("what isname?");

document.write("My name is Anthony the creator. ");

function inputUser() {
  // let userName = prompt("Your name: ");
  let userName = "";
  while (userName === "") {
    userName = prompt("please enter valid name: ");
  }

  if (userName == "") {
    userName = prompt("Actually put in your name. ");
  } else if ((userName == "John") | (userName == "john")) {
    document.write("Welcome Boss! ");
  } else {
    document.write("Welcome to my page " + userName + "! ");
  }
  return userName;
}

function guessNumber() {
  let inputNumber = prompt("guess a number between 0-9: ");

  if (inputNumber != 5) {
    document.write("wrong number");
  } else {
    document.write("correct number");
  }
  return inputNumber;
}

function imageNumber() {
  let images = prompt("how many more images do you want?");
  for (let i = 0; i < images; i++) {
    document.write(
      '<img src="bike.jpg" alt="image of a sleek dark gray bike" />'
    );
  }
  return images;
}

// let theUsersName = inputUser();
// document.write(theUsersName);

//structure of function
//function DECLARATION
//function addTwoNumbers(parameters){code to execute}
//for (let i = 0; i < 10; i++;){
//  console.log('loop' + i);
//}

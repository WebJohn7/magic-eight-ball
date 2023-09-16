let userName = "John";

userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);

let userQuestion = `John asked : Is the One Piece real ?`;

console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
  case 1 :
    console.log (`Cannot predict now`);
    break;
  case 2 :
    console.log (`Only Gold D. Roger know that`);
    break;
  case 3 :
    console.log (`Yes, the One piece is real`);
    break;
  case 4 :
    console.log (`No, the One piece in not real`);
    break;
  case 5 :
    console.log (`The One piece is Nami's tits`);
    break;
  case 6 :
    console.log (`The One piece is to only motivate pirates, it's not real`)
    break;
  default :
    console.log (`I don't have an answer for you`);
    break;
}

console.log (eightBall)
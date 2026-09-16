//declared variables
let score = 0;
let response;
let answer;

//question 1
response = prompt(`What does 3 > 2 eavaluate to?
[1] true
[2] false`);

answer = Number(response);
if (Number.isNaN(answer)) {
  alert("please enter a number.");
} else if (answer < 1 || answer > 2) {
  alert("Please enter 1 or 2.");
} else {
  if (answer === 1) {
    alert("Correct!");
    score = score + 1;
  } else {
    alert("Inocrrect.");
  }
}
//question 2
response = prompt(`Which operator means strictly equal?
[1] =
[2] ===
[3] !==`);

answer = Number(response);

if (Number.isNaN(answer)) {
  alert("Please enter a number.");
} else if (answer < 1 || answer > 3) {
  alert("Please enter 1, 2, or 3.");
} else {
  if (answer === 2) {
    alert("Corect!");
    score = score + 1;
  } else {
    alert("Incorrect.");
  }
}

//question 3
response = prompt(`Which operator means not equal?
[1] ===
[2] !==
[3] >=`);

answer = Number(response);
if (Number.isNaN(answer)) {
  alert("Please enter a number.");
} else if (answer < 1 || answer > 3) {
  alert("Please enter 1, 2, or 3.");
} else {
  if (answer === 2) {
    alert("Corect!");
    score = score + 1;
  } else {
    alert("Incorrect");
  }
}
alert(`Your score is ${score} out of 3.`);

if (score === 0) {
  alert("Review materials.");
} else if (score === 3) {
  alert("You got everything correct!");
} else {
  alert("Nice work!");
}

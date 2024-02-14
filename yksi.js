// Input field, and buttons
let myGreeting = document.getElementById("greeting");
let myName = document.getElementById("name");
let myGo1 = document.getElementById("go1");
let myGo2 = document.getElementById("go2");
let myGo3 = document.getElementById("go3");

let numberOfClicks = 0;
let maxClicks = 4;
let randomNumber;

// Function to greet the user
function greeting() {
  let name = myName.value;
  myGreeting.innerText = "Hei, " + name + ", oletko valmis aloittamaan?";
}

// Greeting button
myGo1.addEventListener("click", greeting);

// Function to check user's age
function checkAge() {
  var age = document.getElementById("ageInput").value;
  if (age < 16) {
    document.getElementById("ageMessage").innerText =
      "Olet liian nuori pelaamaan!";
    return;
  }

  document.getElementById("ageMessage").innerText = "Hyvä, jatketaan";
  document.getElementById("tehtava3").style.display = "block"; // Show 3 section if age is OK
}

// Age check button
myGo2.addEventListener("click", checkAge);

// Function to handle guessing the random number
function guessNumber() {
  var lowerNum = parseInt(document.getElementById("lowerNum").value);
  var upperNum = parseInt(document.getElementById("upperNum").value);
  var guess = parseInt(document.getElementById("guessInput").value);

  // Check if the guess is within the lower and upper bounds
  if (guess < lowerNum || guess > upperNum) {
    document.getElementById("guessMessage").innerText =
      "Virhe: Arvaus ei ole välillä alarajan ja ylärajan välissä!";
    return;
  }

  // Randomly generate a new number when the game starts
  // or when the user changes the lower or upper bounds
  if (
    numberOfClicks === 0 ||
    lowerNum !==
      parseInt(
        document.getElementById("lowerNum").getAttribute("data-value")
      ) ||
    upperNum !==
      parseInt(document.getElementById("upperNum").getAttribute("data-value"))
  ) {
    randomNumber =
      Math.floor(Math.random() * (upperNum - lowerNum + 1)) + lowerNum;
    document.getElementById("lowerNum").setAttribute("data-value", lowerNum);
    document.getElementById("upperNum").setAttribute("data-value", upperNum);
    numberOfClicks = 0;
  }

  // Check if the maximum number of guesses has been reached
  if (numberOfClicks >= maxClicks) {
    document.getElementById("guessMessage").innerText =
      "Arvauskerrat loppuivat! Oikea vastaus oli " + randomNumber;
    return;
  }

  numberOfClicks++;

  // Feedback for user to help
  if (guess === randomNumber) {
    document.getElementById("guessMessage").innerText =
      "Oikein! Kannattaisiko lotota?";
  } else {
    if (guess < randomNumber) {
      document.getElementById("guessMessage").innerText = "Lukuni on suurempi!";
    } else {
      document.getElementById("guessMessage").innerText = "Lukuni on pienempi!";
    }
  }
}

// Guessing button
myGo3.addEventListener("click", guessNumber);

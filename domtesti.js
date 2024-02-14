// nim3 ajet3an kun tiedosto ladataan:
let myButton = document.querySelector("button");
myButton.innerText = "Paina tästä";
let myText = document.querySelector(".message");

// tapahtumakuuntelijat:
myButton.addEventListener("click", changeColor);
myText.addEventListener("click", changeColor);

// callback funktio (ajetaan vasta kun tapahtuma tapahtuu):
function changeColor() {
  myText.style.color = "red";
}

// tehv3hteminen inputin avulla
let myGreeting = document.getElementById("greeting");
let myName = document.getElementById("name");
let myGo1 = document.getElementById("go1");

function greeting() {
  let name = myName.value;
  myGreeting.innerText = "Hei, " + name + "!";
}

myGo1.addEventListener("click", greeting);

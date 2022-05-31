// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello rasta!";

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");

  if (mySrc === "./images/rastaloins.jpg") {
    myImage.setAttribute("src", "./images/sunset.jpg");
  } else {
    myImage.setAttribute("src", "./images/rastaloins.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");

  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Bless up, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Bless up, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};

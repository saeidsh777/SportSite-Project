let userNameinput = document.querySelector(".userName-input");
let passwordinput = document.querySelector(".password-input");
let userNameNote = document.querySelector(".valid-user");
let passwordNote = document.querySelector(".valid-pass");

console.log(passwordNote);

function keypressuser() {
  if (userNameinput.value.length == 0) {
    userNameNote.style.opacity = "0";
  } else if (userNameinput.value.length < 8) {
    userNameNote.style.opacity = "1";
    userNameNote.style.color = "rgb(255 107 107)";
    userNameNote.innerHTML = "Your Username Character Must Be  at least : 8";
  } else {
    userNameNote.style.opacity = "1";
    userNameNote.style.color = "#9dff9d";
    userNameNote.innerHTML = "Valid UserName";
  }
  console.log(userNameinput.value);
}

function keypresspass() {
  if (passwordinput.value.length == 0) {
    passwordNote.style.opacity = "0";
  } else if (passwordinput.value.length < 12) {
    passwordNote.style.opacity = "1";
    passwordNote.style.color = "rgb(255 107 107)";
    passwordNote.innerHTML = "Your Password Character Must Be  at least : 12";
  } else {
    passwordNote.style.opacity = "1";
    passwordNote.style.color = "#9dff9d";
    passwordNote.innerHTML = "Valid PassWord";
  }
}

let CreateAccount = document.querySelector(".CreateAccount");
let boxLogin = document.querySelector(".boxLogin");
let boxCreate = document.querySelector(".boxCreate");
let back = document.querySelector(".back");

CreateAccount.addEventListener("click", function () {
  boxLogin.style.opacity = "0";
  boxLogin.style.zIndex = "-22";

  boxCreate.style.opacity = "1";
  boxCreate.style.zIndex = "999";
});

back.addEventListener("click", function () {
  boxLogin.style.opacity = "1";
  boxLogin.style.zIndex = "999";

  boxCreate.style.opacity = "0";
  boxCreate.style.zIndex = "-22";
});

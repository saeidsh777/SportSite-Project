// boxLogin variable
let userNameinput = document.querySelector(".userName-input");
let userNameNote = document.querySelector(".valid-user");
let passwordinput = document.querySelector(".password-input");
let passwordNote = document.querySelector(".valid-pass");
let boxLogin = document.querySelector(".boxLogin");
let CreateAccount = document.querySelector(".CreateAccount");
// ------------------------------
function keypressuser() {
  if (userNameinput.value.length == 0) {
    userNameNote.style.opacity = "0";
  } else if (userNameinput.value.length < 8) {
    userNameNote.style.opacity = "1";
    userNameNote.style.color = "rgb(255 107 107)";
    userNameNote.innerHTML = "Your Username Character Must Be at least : 8";
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

// boxCreate variable
let EmailInputCreate = document.querySelector(".Email");
let userNameInputCreate = document.querySelector(".userNameAccount");
let passwordInputCreate = document.querySelector(".passwordAccount");
let boxCreate = document.querySelector(".boxCreate");
let back = document.querySelector(".back");
let btnCreateAccount = document.querySelector(".btn-createAccount");
let regexEmail = /^(\w+[\._]?\w+)@([a-zA-Z]{3,6})\.([a-zA-Z]{2,3})$/;
let regexPasswordUser = /^[\w+]{8,16}$/;
// --------------------


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

EmailInputCreate.addEventListener("blur", function () {
  let validEmail = regexEmail.test(EmailInputCreate.value);
  
  if (validEmail | EmailInputCreate.value === "") {
    EmailInputCreate.style.border = "1px solid white";
    EmailInputCreate.style.color = "white";
    EmailInputCreate.previousElementSibling.style.color = "white";
  } else {
    EmailInputCreate.style.border = "1px solid #fd5757";
    EmailInputCreate.style.color = "#fd5757";
    EmailInputCreate.previousElementSibling.style.color = "#fd5757";
  }
});

EmailInputCreate.addEventListener("focus", function () {
  EmailInputCreate.style.border = "1px solid black";
  EmailInputCreate.style.color = "black";
  EmailInputCreate.previousElementSibling.style.color = "black";
});

userNameInputCreate.addEventListener("blur", function (){
  let validUserName = regexPasswordUser.test(userNameInputCreate.value);
  
  if (validUserName | userNameInputCreate.value === "") {
    userNameInputCreate.style.border = "1px solid white";
    userNameInputCreate.style.color = "white";
    userNameInputCreate.previousElementSibling.style.color = "white";
  } else {
    userNameInputCreate.style.border = "1px solid #fd5757";
    userNameInputCreate.style.color = "#fd5757";
    userNameInputCreate.previousElementSibling.style.color = "#fd5757";
  }
});

passwordInputCreate.addEventListener("focus", function () {
  passwordInputCreate.style.border = "1px solid black";
  passwordInputCreate.style.color = "black";
  passwordInputCreate.previousElementSibling.style.color = "black";
});

passwordInputCreate.addEventListener("blur", function (){
  let validPassword = regexPasswordUser.test(passwordInputCreate.value);
  
  if (validPassword | passwordInputCreate.value === "") {
    passwordInputCreate.style.border = "1px solid white";
    passwordInputCreate.style.color = "white";
    passwordInputCreate.previousElementSibling.style.color = "white";
  } else {
    passwordInputCreate.style.border = "1px solid #fd5757";
    passwordInputCreate.style.color = "#fd5757";
    passwordInputCreate.previousElementSibling.style.color = "#fd5757";
  }
});

passwordInputCreate.addEventListener("focus", function () {
  passwordInputCreate.style.border = "1px solid black";
  passwordInputCreate.style.color = "black";
  passwordInputCreate.previousElementSibling.style.color = "black";
});


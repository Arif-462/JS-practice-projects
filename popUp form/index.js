


let title = document.querySelector("#title");
let nameInput = document.querySelector(".nameField");
let signUpBtn = document.querySelector(".signupBtn");
let signInBtn = document.querySelector(".singinBtn");

signInBtn.onclick = function(){
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signInBtn.classList.remove("singinBtn");
    signUpBtn.classList.add("singinBtn");
    
};

signUpBtn.onclick = function(){
    nameInput.style.maxHeight = "50rem";
    title.innerHTML = "Sign Up";
    signInBtn.classList.add("singinBtn");
    signUpBtn.classList.remove("singinBtn");
};




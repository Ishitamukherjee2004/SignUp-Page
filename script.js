const name = document.querySelector('.name');
const number = document.querySelector('.number');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const signup = document.querySelector('.sign-up');
const signin = document.querySelector('sign-in');

signup.addEventListener("click", function () {
     if(name.value ===""){
       alert("Name can't be empty");
    }
    else if(number.value ===""){

     alert("Number can't be empty");
    }
    else if(email.value===""){
        alert("Email can't be empty");
    }
    else if(password.value ===""){

     alert("Password can't be empty");
    }
    else{
    alert("Thanks for signing up");
    }
});






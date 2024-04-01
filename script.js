const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const btn =  document.getElementById('btn');



function emailValidation(){
    const eC= emailInput.value.trim();
    if(eC.length <3 || !eC.includes('@') || !eC.includes('.')){
        emailError.textContent = 'Make sure email is more than 3 characters and has @ and a .';
        return false;
    }
    
    emailError.textContent = '';
    return true;
}

function validatePassword() {
    const passwordValue = passwordInput.value.trim();
    if (passwordValue.length < 8) {
      passwordError.textContent = 'Make sure password is more than 8 characters';
      passwordError.classList.remove('success');
      return false;
    }
    passwordError.textContent = '';
    return true;
  }


emailInput.addEventListener('input',emailValidation);
passwordInput.addEventListener('input',validatePassword);


form.addEventListener('submit', function(event) {
    event.preventDefault(); 

 

    const isEmailValid = emailValidation();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
        if (confirm('Are you sure you want to sign up?')) {
            alert('Successful signup!');
            const span = document.getElementById('passwordError');
            span.classList.add('success');
            emailInput.value = '';
        passwordInput.value = '';
            span.textContent = 'All good to go';
        } 
    } else {
       
        console.log("blue")
        window.location.href = window.location.href;
        emailInput.value = '';
        passwordInput.value = '';
    }
});
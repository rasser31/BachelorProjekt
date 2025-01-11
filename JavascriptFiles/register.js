const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const closeButton=document.getElementById('closeButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})
closeButton.addEventListener('click', function(){
    window.location.href = "index.html";
})


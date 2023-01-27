// add funcao na barra horizontal
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    } 
    else {
        header.classList.remove('navbarDark');
    }
}

// botão flutuante 
let floatForm = document.querySelector('.float-form');
let floatButton = document.querySelector('.float-form-button');

floatButton.addEventListener('click', function() {
    floatForm.style.display = (floatForm.style.display === 'none') ? 'block' : 'none';
});

// validação do e-mail
let emailInput = document.querySelector('input[type=email]');
let submitButton = document.querySelector('input[type=submit]');
let form = document.querySelector('.float-form');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  let email = emailInput.value;
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    alert('Entre com seu endereço válido');
  } else {
    window.location.href = form.action + '?email=' + email;
  }
});


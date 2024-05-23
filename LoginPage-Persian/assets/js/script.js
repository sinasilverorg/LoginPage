const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login')

registerBtn.addEventListener('click', () => {
  container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});

    // Developed by Hero Expert
    // Telegram channel: @HeroExpert_ir
    // Telegram channel: @NetworkExpert_com
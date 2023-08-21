const login = document.querySelector('.login')
const btnLogin = document.querySelector('.btnlogin');
const iconClose = document.querySelector('.icon-close');
const logo = document.querySelector('.logo')

btnLogin.onclick = () => {
    login.classList.add('active-login');
}

iconClose.onclick = () => {
    login.classList.remove('active-login');
}

logo.onclick = () => {
    location.reload();
}

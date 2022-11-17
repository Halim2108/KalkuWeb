const menu = document.getElementById('menu-label');
const sideBar = document.getElementsByClassName('sidebar')[0];
const icon = document.querySelector('.hs');
const history = document.getElementsByClassName('history-card')[0];

menu.addEventListener('click', function() {
    sideBar.classList.toggle('hide');
})

icon.addEventListener('click', function() {
    history.classList.toggle('newCard');
})
const menuOptions = document.querySelectorAll('.menu li');

function changeOption(e) {
    menuOptions.forEach(option => option.classList.remove('selected'));
    e.target.classList.add('selected');
}

menuOptions.forEach(option => option.addEventListener('click',(e) => changeOption(e)));
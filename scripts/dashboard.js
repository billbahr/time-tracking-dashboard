const menuOptions = document.querySelectorAll('.menu li');
const dailyData = document.querySelectorAll('.daily');
const weeklyData = document.querySelectorAll('.weekly');
const monthlyData = document.querySelectorAll('.monthly');

function changeOption(e) {
    menuOptions.forEach(option => option.classList.remove('selected'));
    e.target.classList.add('selected');

    // hide all data
    dailyData.forEach(item => item.classList.add('hide'));
    weeklyData.forEach(item => item.classList.add('hide'));
    monthlyData.forEach(item => item.classList.add('hide'));

    // unhide selection
    switch (e.target.innerText) {
        case 'Daily':
            dailyData.forEach(item => item.classList.remove('hide'));
            break;
        case 'Weekly':
            weeklyData.forEach(item => item.classList.remove('hide'));
            break;
        case 'Monthly':
            monthlyData.forEach(item => item.classList.remove('hide'));
            break;
    }


}

/* fetch("data.json")
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
  		// or whatever you wanna do with the data
    }); */

menuOptions.forEach(option => option.addEventListener('click',(e) => changeOption(e)));

const menuOptions = document.querySelectorAll('.person nav li');
const dailyData = document.querySelectorAll('.daily');
const weeklyData = document.querySelectorAll('.weekly');
const monthlyData = document.querySelectorAll('.monthly');
const htmlData[0] = document.querySelectorAll('.work>div>p');
const htmlData.push(document.querySelectorAll('.play>div>p'));
const studyData = document.querySelectorAll('.study>div>p');
const exerciseData = document.querySelectorAll('.exercise>div>p');
const socialData = document.querySelectorAll('.social>div>p');
const selfData = document.querySelectorAll('.self>div>p');


function updateHTML(data) {

}

function loadData() {
    fetch("data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        workData.forEach(para => {
            if(para.classList.contains('daily')) {
                if(para.classList.contains('big')) {
                    para.innerHTML = data[0].timeframes.daily.current + "hrs";
                } else {
                    para.innerHTML = "Yesterday - " + data[0].timeframes.daily.previous + "hrs";
                }
            }
            if(para.classList.contains('weekly')) {
                if(para.classList.contains('big')) {
                    para.innerHTML = data[0].timeframes.weekly.current + "hrs";
                } else {
                    para.innerHTML = "Last Week - " + data[0].timeframes.weekly.previous + "hrs";
                }
            }
            if(para.classList.contains('monthly')) {
                if(para.classList.contains('big')) {
                    para.innerHTML = data[0].timeframes.monthly.current + "hrs";
                } else {
                    para.innerHTML = "Last Month - " + data[0].timeframes.monthly.previous + "hrs";
                }
            }                        
        })
    })
    .catch(error => {
        console.log(error);
    });
}

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

loadData();
menuOptions.forEach(option => option.addEventListener('click',(e) => changeOption(e)));
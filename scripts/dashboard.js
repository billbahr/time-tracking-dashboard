
const menuOptions = document.querySelectorAll('.person nav li');
const dailyData = document.querySelectorAll('.daily');
const weeklyData = document.querySelectorAll('.weekly');
const monthlyData = document.querySelectorAll('.monthly');
const htmlData = new Array(6);
htmlData[0] = document.querySelectorAll('.work>div>p');
htmlData[1] = document.querySelectorAll('.play>div>p');
htmlData[2] = document.querySelectorAll('.study>div>p');
htmlData[3] = document.querySelectorAll('.exercise>div>p');
htmlData[4] = document.querySelectorAll('.social>div>p');
htmlData[5] = document.querySelectorAll('.self>div>p');

function loadData() {
    fetch("data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        for (let i = 0; i < 6; i++) {
            htmlData[i].forEach(para => {
                if(para.classList.contains('daily')) {
                    if(para.classList.contains('big')) {
                        para.innerHTML = data[i].timeframes.daily.current + "hrs";
                    } else {
                        para.innerHTML = "Yesterday - " + data[i].timeframes.daily.previous + "hrs";
                    }
                }
                if(para.classList.contains('weekly')) {
                    if(para.classList.contains('big')) {
                        para.innerHTML = data[i].timeframes.weekly.current + "hrs";
                    } else {
                        para.innerHTML = "Last Week - " + data[i].timeframes.weekly.previous + "hrs";
                    }
                }
                if(para.classList.contains('monthly')) {
                    if(para.classList.contains('big')) {
                        para.innerHTML = data[i].timeframes.monthly.current + "hrs";
                    } else {
                        para.innerHTML = "Last Month - " + data[i].timeframes.monthly.previous + "hrs";
                    }
                }                        
            })
        }
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

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();


    let secondsDegress = ((seconds / 60) * 360);
    secondHand.style.transform = setRotate(secondsDegress);

    let minsDegress = ((mins / 60) * 360);
    minHand.style.transform = setRotate(minsDegress);

    let hourDegress = ((hour / 12) * 360) + ((mins / 12 / 60) * 360);
    hourHand.style.transform = setRotate(hourDegress);
}

//GuaHsu 若傳入角度為0，則不顯示動畫效果避免354~0的rotate反彈跳
function setRotate(deg) {
    if (deg === 0) {
        document.querySelector('.hand').style.transition = 'all 0s';
    } else {
        document.querySelector('.hand').style.transition = 'all 0.05s';
    }
    return `rotate(${deg}deg)`;
}

setInterval(setDate, 1000);




const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
let names = document.getElementById('name');
const focus = document.getElementById('focus');

const showAmPM = true;

function getTime(){
    let today = new Date();
    let hour = today.getHours();
    let minutes= today.getMinutes();
    let secs = today.getSeconds();

    const amPm = hour>=12 ? 'PM':'AM';
    hour = hour % 12 || 12;

    time.innerHTML = `${hour}:${addZero(minutes)}:${addZero(secs)} ${showAmPM ? amPm : ''}`;

    setTimeout(getTime, 1000);
}

function addZero(n){
    return (parseInt(n ,10) < 10 ? `0` : '') + n;
}

function setBgGreet(){
    let today = new Date();
    let hour = today.getHours();

    if(hour < 12){
        document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/1165344.jpg')";
        greeting.textContent = 'Good Morning, ';
    }
    else if(hour<18){
        document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon, ';
    }
    else{
        document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
        greeting.textContent = 'Good Evening, ';
        document.body.style.color = 'white';
    }
}

function getName(){
    if(localStorage.getItem('names') === null){
        names.textContent = '[Enter Name]';
    }
    else{
        names.textContent = localStorage.getItem('names');
    }
}

function setName(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('names', e.target.innerText);
            names.blur();
        }
    }else{
        localStorage.setItem('names', e.target.innerText);
    }
}

function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]';
    }
    else{
        focus.textContent = localStorage.getItem('focus');
    }
}

function setFocus(e){
    if(e.type == 'keypress'){
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else{
        localStorage.setItem('focus', e.target.innerText);
    }
}

names.addEventListener('keypress', setName);
names.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus)

getName();
getFocus();
getTime();
setBgGreet();
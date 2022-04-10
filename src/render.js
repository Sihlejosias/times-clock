var hr = document.querySelector('#hr');
var mn = document.querySelector('#mn');
var sc = document.querySelector('#sc');
var day = new Date();
var hh = day.getHours() * 6;
var mm = day.getMinutes() * 6;
var ss = day.getSeconds() * 6;
hr.style.transform = 'rotateZ(${hh+(mm/12)}deg)';

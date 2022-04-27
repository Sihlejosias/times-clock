window.addEventListener("DOMContentLoaded", () => {
    let  hr = document.getElementById("hr");
    let mn = document.getElementById("mn");
    let sc = document.getElementById("sc");

    setInterval(() => {

        let rate = 6;

        day = new Date();
        hh = day.getHours() * 30;
        mm = day.getMinutes() * rate;
        ss = day.getSeconds() * rate;

        hr.style.transform = `rotatez(${(hh)+(mm/12)}deg)`;
        mn.style.transform = `rotatez(${mm}deg)`;
        sc.style.transform = `rotatez(${ss}deg)`;

        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');
        let ampm = document.getElementById('ampm');

        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();

        let am = h >= 12 ? "PM" : "AM"

        if (h > 12) {
            h = h - 12;
        }

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;
        ampm.innerHTML = am;

    });
});

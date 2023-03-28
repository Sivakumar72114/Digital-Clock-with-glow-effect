setInterval(() => {
    let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let hr_dot = document.querySelector(".hr_dot");
let mn_dot = document.querySelector(".mn_dot");
let sc_dot = document.querySelector(".sc_dot");


let hr = new Date().getHours();
let mn = new Date().getMinutes();
let sc = new Date().getSeconds();

// Am & PM function
function ap() {
  if (hr >= 12) {
    ampm.innerHTML = "PM";
    hr = hr - 12;
  } else {
    ampm.innerHTML = "AM";
  }
}
ap();





hours.innerHTML = hr;
minutes.innerHTML = mn;
seconds.innerHTML = sc;

//adding 0 infront of 1 to 9 numbers
if(hr <10){
	hours.innerHTML = "0"+hr;
}
if(mn <10){
	minutes.innerHTML = "0"+mn;
}


if(sc <10){
	seconds.innerHTML = "0"+sc;
}


hh.style.strokeDashoffset = 440-(440*hr)/12;
mm.style.strokeDashoffset = 440-(440*mn)/60;
ss.style.strokeDashoffset = 440-(440*sc)/60;

// hr_dot.style.transition = "transform 1s ease-in";
// mn_dot.style.transition = "transform 1s ease-in";
// sc_dot.style.transition = "transform 1s ease-in";

hr_dot.style.transform= `rotate(${hr * 30}deg)`;
mn_dot.style.transform= `rotate(${mn *6}deg)`;
sc_dot.style.transform= `rotate(${sc *6}deg)`;
})
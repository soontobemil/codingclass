const clock = document.getElementById("clock");

function getClock () {
   const date = new Date();
   const hours = String (date.getHours()).padStart(2, "0");
   const minutes = String (date.getMinutes()).padStart(2, "0");
   const seconds = String (date.getSeconds()).padStart(2, "0");
   clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(getClock, 1000); //set internval allows to call something every msecond you want

//(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
//setInterval(sayHello, 5000);
//setTimeout(sayHello, 5000);
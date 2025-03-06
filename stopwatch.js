const p = document.querySelector("div.wrapper p")
const startBtn = document.querySelector("#start")
const resetBtn = document.querySelector("#reset")
const stopBtn = document.querySelector("#stop")

let min,secs,hours,count;
min = 0 ; secs = 0; hours = 0; count = 0;
let interval = null;

startBtn.addEventListener("click", () =>{
    if (!interval){
    interval = setInterval(timer, 10);
    };
})


stopBtn.addEventListener("click", () =>{
    clearInterval(interval);
    interval = null;
})

resetBtn.addEventListener("click", () =>{
    clearInterval(interval);
    interval = null
    min = 0
    secs = 0
    hours = 0
    count = 0

    p.innerHTML = "00:00:00"
})

function timer(){

    count ++;
    console.log(min, secs, hours, count);
    if (count == 100){
        secs+= 1;
        count = 0;
    }
    if (secs == 60){
        min += 1;
        secs = 0;
    }
    if (min == 60){
        hours += 1;
        min = 0;
    }


    p.innerHTML =         
    `${String(hours).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

    

}


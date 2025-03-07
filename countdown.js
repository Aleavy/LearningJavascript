const allTime = document.querySelectorAll("span.time-int");
const upArrows = document.querySelectorAll("button.up-arrow");
const downArrows = document.querySelectorAll("button.down-arrow");
const stopBtn = document.querySelector("button#stop");
const startBtn = document.querySelector("button#start")
const restartBtn = document.querySelector("button#restart")


let hours, mins, seconds, count;
hours = 0; mins = 0; seconds = 0; count = 0;
let interval = null;
let canRun = true;

const canStart = () => {
    if (mins > 0 || seconds > 0 || hours > 0) {
        return true;
    }else {
        return false;
    }
};

const updateInerHTML = () =>{
        allTime[0].innerHTML = String(hours).padStart(2, "0");
        allTime[1].innerHTML = String(mins).padStart(2, "0");
        allTime[2].innerHTML = String(seconds).padStart(2, "0");
}

upArrows.forEach(arrow =>{
    arrow.addEventListener("click", ()=>{
        if (!canRun){
            return
        }
        let parent = arrow.parentElement;
        if (parent.classList.contains("hours") ){
            hours += 1;
        }else if (parent.classList.contains("minutes")  && mins < 59){
            mins += 1;
        } else if (parent.classList.contains("seconds")  && seconds < 59){
            seconds += 1;
        };
        updateInerHTML();
    });
})

downArrows.forEach(arrow =>{
    arrow.addEventListener("click", ()=>{
        if (!canRun){
            return
        }
        let parent = arrow.parentElement;
        if (parent.classList.contains("hours")  && hours > 0){
            hours -= 1;
        }else if (parent.classList.contains("minutes")  && mins > 0){
            mins -= 1;
        } else if (parent.classList.contains("seconds")  && seconds > 0){
            seconds -= 1;
        };
        updateInerHTML();
    });
})

const countdown = () =>{

    canRun = false;
    count += 1;

    if (Math.max(hours, mins, seconds) == 0){
        count = 0;
        clearInterval(interval);
        alert("The time is up!");
        canRun = true;
        interval = null;

    }

    if (count == 1){
        if (seconds > 0){
        count = 0;
        seconds -= 1;
        }
    }
    if (seconds == 0){
        if (mins > 0){
        mins -= 1;
        seconds = 60;
        };
    }
    if (mins == 0){
        if (hours > 0){
        hours -= 1;
        mins = 60;
        };
    }
    updateInerHTML();
}

startBtn.addEventListener("click", () => {

    if (canStart() && (!interval)){
        interval = setInterval(countdown, 1000);
    }
})

stopBtn.addEventListener("click", () =>{
    if (interval){
        clearInterval(interval);
        interval = null;
        canRun = true;
    }
})

restartBtn.addEventListener("click", () =>{
    if (interval){
        clearInterval(interval)
    }
    hours = 0; mins = 0; seconds = 0; count = 0;
    canRun = true;
    updateInerHTML();
})

updateInerHTML();
const allTime = document.querySelectorAll("span.time-int");
const upArrows = document.querySelectorAll("button.up-arrow");
const downArrows = document.querySelectorAll("button.down-arrow");
const stopBtn = document.querySelector("button#stop");
const resumeBtn = document.querySelector("button#resume");
const startBtn = document.querySelector("button#start")
const restart = document.querySelector("button#restart")


let hours, mins, seconds;
hours = 0; mins = 0; seconds = 0;

const updateInerHTML = () =>{
        allTime[0].innerHTML = String(hours).padStart(2, "0");
        allTime[1].innerHTML = String(mins).padStart(2, "0");
        allTime[2].innerHTML = String(seconds).padStart(2, "0");
}

upArrows.forEach(arrow =>{
    arrow.addEventListener("click", ()=>{
        let parent = arrow.parentElement;
        if (parent.className == "hours"){
            hours += 1;
        }else if (parent.className == "minutes" && mins < 59){
            mins += 1;
        } else if (parent.className == "seconds" && seconds < 59){
            seconds += 1;
        };
        updateInerHTML()
    });
})

downArrows.forEach(arrow =>{
    arrow.addEventListener("click", ()=>{
        let parent = arrow.parentElement;
        if (parent.className == "hours" && hours > 0){
            hours -= 1;
        }else if (parent.className == "minutes" && mins > 0){
            mins -= 1;
        } else if (parent.className == "seconds" && seconds > 0){
            seconds -= 1;
        };
        updateInerHTML()
    });
})

updateInerHTML()
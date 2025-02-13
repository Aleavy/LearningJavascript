let ul = document.querySelector(".list");
let btn = document.querySelector("div.center button");
let input = document.querySelector("div.center input");




const attachDeleteEvent = (father) => {
    let button = document.querySelectorAll("li button").forEach(btn =>{
        btn.addEventListener("click", () =>{
            let parent = btn.parentElement
            parent.parentElement.removeChild(parent);
            localStorage.setItem("list", father.innerHTML);
        })
    });
};

const createLi = (text, father) => {
    if (text.trim() === ''){

        return console.log('aca2');   
    } else {    

    console.log(father)

    let newLi = document.createElement('li');
    let newbtn = document.createElement('button');
    newLi.textContent = text;
    newLi.appendChild(newbtn);
    father.appendChild(newLi);
    newbtn.textContent = '❌';

    localStorage.setItem("list", father.innerHTML);

    newbtn.addEventListener("click", () =>{
        newLi.parentNode.removeChild(newLi);
    })
    }

}


if (localStorage.getItem("list")){ 
    ul.innerHTML = localStorage.getItem("list")
    attachDeleteEvent(ul)
}

btn.addEventListener('click', function(){
    createLi(input.value, ul)
    });
input.addEventListener('keypress', function(event){
    if (event.key === "Enter"){
        createLi(input.value, ul);
    }else{
        console.log(input.value);
    }
})
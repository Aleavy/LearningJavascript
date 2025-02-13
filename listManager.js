let ul = document.querySelector(".list");
let btn = document.querySelector("div.center button");
let input = document.querySelector("div.center input");


const createLi = (text, father) => {
    if (text.trim() === ''){

        return console.log('aca2');   
    } else {    

    console.log('aca')

    let newLi = document.createElement('li');
    let newbtn = document.createElement('button');
    newLi.textContent = text;
    newLi.appendChild(newbtn);
    father.appendChild(newLi);
    newbtn.textContent = '❌';
    newbtn.addEventListener("click", () =>{
        newLi.parentNode.removeChild(newLi);
    })
    }

}

const saveAndGet = (element) =>{
    localStorage.setItem('list', element.innerHTML);
    return localStorage.getItem('list');
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
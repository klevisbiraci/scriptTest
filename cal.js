let header = document.querySelector("h2");
let buttons = document.querySelectorAll("button");

buttons.forEach((el) => {
    el.addEventListener("click",listen);
})

let nrEnd = "";

function listen(e){
    let button = e.target.textContent;

    if(button === "del"){
        nrEnd = "";        
    }else if(button === "submit"){
        nrEnd = eval(nrEnd) 
    }else{
        nrEnd = nrEnd + button;
    }

    header.innerHTML = nrEnd;
} 
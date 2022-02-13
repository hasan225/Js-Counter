const buttons =document.querySelectorAll(".CounterBtn");

let count=0;

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(button.classList.contains("PrevBtn")){
            count--
        }
        else if(button.classList.contains("NextBtn")){
            count++
        }

        const counter=document.querySelector(".counter");
        counter.textContent=count;

        if(count < 0){
         counter.style.color="black"
        }
        else if(count > 0){
            counter.style.color="white"
        }
    })
})
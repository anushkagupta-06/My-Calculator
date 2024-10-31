let buttons=document.querySelectorAll(".btn");
let inp=document.querySelector("input");
let cal=0;

buttons.forEach(function(button){                 //// Iterate through each button and add event listener
    button.addEventListener("click",()=>{
        let val=button.innerHTML;                // or event.target.innerHTML
        if (val=="AC"){
            inp.value="";
            cal=0;
        }
        else if(val=='='){
            inp.value=eval(cal);              // need to use eval keyword remember
            cal=0;
        }
        else{
            cal=cal+button.innerText;
            inp.value=cal;
        }
    })
})

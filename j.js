let btn=document.createElement("button")
let div=document.querySelector("div");
btn.innerText="change mode";
div.after(btn);
//let btn1=document.querySelector("button");
let curmode="light";
btn.addEventListener("click",()=>{let body =document.querySelector("body");
    if(curmode==="light")
    {curmode="pink";
body.style.backgroundColor="pink";}
else{  curmode="light";
body.style.backgroundColor="white";}
});


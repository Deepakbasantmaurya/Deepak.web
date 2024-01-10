let btn=document.createElement("button");
btn.innerText="click me dark/light";
let head=document.querySelector("head");
head.append(btn);
let curmode="light";
btn.addEventListener("click",()=>{
    if(curmode==="light")
    {curmode="dark";
document.queryselector("body").style.backgroundColor="black"}
else{  {curmode="light";
document.queryselector("body").style.backgroundColor="white"}
}
});

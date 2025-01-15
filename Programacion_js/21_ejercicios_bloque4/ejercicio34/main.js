let btn_small = document.querySelector("#small");
let btn_medium = document.querySelector("#medium");
let btn_big = document.querySelector("#big");

let ventana =(anchura, altura)=>{
     window.open("https://portfolioantonioheredia.netlify.app/",
                 "_blank",
                 `width=${anchura},height=${altura}`);
    return true;             
}


btn_small.addEventListener("click",()=>{
     ventana(450,350)
});
btn_medium.addEventListener("click",()=>{
    ventana(650, 550)
});
btn_big.addEventListener("click",()=>{
    ventana(850, 650)
})
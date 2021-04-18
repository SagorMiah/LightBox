const allimage = document.querySelectorAll(".image");
const imagenext = document.querySelector(".image");
const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup img");
const popupclose = document.querySelector(".popup a");
const darkover = document.querySelector(".darkoverly");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

allimage.forEach((image,index) => {
    image.addEventListener("click",(e) => {
        darkover.classList.add("active");
        darkover.style.zIndex = "1";
        popup.classList.add("popactive");
        popup.style.zIndex = "6";
        popupImg.setAttribute("src",e.target.src);
    })
})
let currentImg = 1;
next.addEventListener("click", () => {
    popupImg.src = allimage[currentImg].src
    currentImg = (currentImg += 1) % allimage.length
})
prev.addEventListener("click", () => {
    popupImg.src = allimage[currentImg].src
    currentImg = (currentImg += 1) % allimage.length
})
popupclose.addEventListener("click",() => {
    darkover.classList.remove("active");
    popup.classList.remove("popactive");
    darkover.style.zIndex = "0";
})
document.addEventListener('load',function(){
    document.addEventListener('click',function(){
        if(darkover.classList.contains('active') && popup.classList.contains('popactive')){
            darkover.classList.remove('active')
            popup.classList.remove('popactive')
        }
    })
})
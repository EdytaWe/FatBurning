const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu__item");
const number = document.querySelectorAll(".number");
const button = document.querySelector("#button");

const showMenu = () =>{
    menu.classList.toggle("menu__mobile");
    menuItems.forEach(el=>{
        el.style.width = "100vw";
        el.style.padding = "15px";
        el.style.fontSize = "1.25rem";
    });
    hamburger.classList.toggle("fa-bars");
    hamburger.classList.toggle("fa-xmark");
    if(hamburger.classList.contains("fa-xmark")){
        hamburger.style.transform = "translatex(50px)";
    }else{
        hamburger.style.transform = "translatex(0px)";
    }
}


const changeColor =() =>{
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    button.style.backgroundColor = randomColor;
}


hamburger.addEventListener("click", showMenu);

number.forEach(el => {
    el.addEventListener("mouseover", e =>{
        el.classList.add("pulse")
    })
})
number.forEach(el => {
    el.addEventListener("mouseout", e =>{
        el.classList.remove("pulse")
    })
})

button.addEventListener("mousemove", changeColor);

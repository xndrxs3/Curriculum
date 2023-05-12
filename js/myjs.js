let enlances_header = document.querySelectorAll(".enlaces-header")[0];
let icon_hamburger = true;

document.querySelectorAll(".hamburger")[0].addEventListener("click", function(){
if(icon_hamburger){
    document.querySelectorAll(".hamburger")[0].style.color="#fff";
    icon_hamburger = false;
}
else{
document.querySelectorAll(".hamburger")[0].style.color="#000";
icon_hamburger = true;
}
enlances_header.classList.toggle("hamburgeropen");
})

document.querySelectorAll(".enlaces-header")[0].addEventListener("click", function(){
    enlances_header.classList.toggle("hamburgeropen");
    document.querySelectorAll(".hamburger")[0].style.color="#000";
})

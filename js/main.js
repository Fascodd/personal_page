const left_button = document.getElementById("lft-btn");
const left_section = document.getElementById("left-section");
const right_section = document.getElementById("right-section");
const main_section = document.getElementById("main-section");
const top_section = document.getElementById("top-section");

left_button.addEventListener("click",fill_left);

function fill_left(){
main_section.style.width ="0%";
right_section.style.width ="0%";
top_section.style.width="0%";
left_section.style.width = "100%";
left_section.style.height = "100%";

}
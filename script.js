const sections = document.querySelectorAll("section");

const reveal = () => {
sections.forEach(sec => {
const top = window.scrollY;
const offset = sec.offsetTop - 500;

if(top > offset){
sec.style.opacity = "1";
sec.style.transform = "translateY(0)";
}
});
};

window.addEventListener("scroll", reveal);
reveal();

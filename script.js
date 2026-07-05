const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
sections.forEach(sec => {
const top = window.scrollY;
const offset = sec.offsetTop - 500;

if(top > offset){
sec.style.opacity = "1";
sec.style.transform = "translateY(0)";
}
});
});

/* Email copy + feedback */
document.querySelectorAll(".email").forEach(btn => {
btn.addEventListener("click", () => {
navigator.clipboard.writeText("shanzanawaz2311@gmail.com");

btn.innerText = "Copied ✓";

setTimeout(() => {
btn.innerText = "Send Email";
}, 2000);
});
});

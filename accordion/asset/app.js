const accorditon = document.querySelectorAll(".accorditon-header");
const accorditonContent = document.querySelectorAll(".accorditon-content");
[...accorditon].forEach(item => item.addEventListener("click", handleAccorditon));
function handleAccorditon(e) {
    const content = e.target.nextElementSibling;
    content.classList.toggle("active");
    const icon = e.target.querySelector(".icon");
    icon.classList.toggle("fa-angle-down")
    icon.classList.toggle("fa-angle-up")
    content.style.height =  `${content.scrollHeight}px`;
    if (!content.classList.contains("active")) {
        content.style.height = "0px ";
    }
}   
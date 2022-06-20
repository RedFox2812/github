const headerList = document.querySelectorAll(".tab-header__item");
[...headerList].forEach((item) => item.addEventListener("click", handleTab));
function handleTab(event) {
    [...headerList].forEach((item) => item.classList.remove("active"));
    event.target.classList.add("active");
    [...headerList].forEach((item) => console.log(indexOf(item)));
} 

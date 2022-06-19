const headerList = document.querySelectorAll(".tab-header__item");
[...headerList].forEach((item) => item.addEventListener("click", handleTab));
function handleTab(event) {
    console.log(event.target)
} 
const headerList = document.querySelectorAll(".tab-header__item");
const bodyList = document.querySelectorAll(".tab-body__item");
[...headerList].forEach((item) => item.addEventListener("click", handleTab));
function handleTab(event) {
    [...headerList].forEach((item) => item.classList.remove("active"));
    event.target.classList.add("active");
    // cách 1 lấy index
    // const indexTab = [...headerList].indexOf(event.target);
    // const number = indexTab;
    //
    // cách 2 tạo attribute data-name
    const number = event.target.dataset.tab;
    [...bodyList].forEach((item) => {
        item.classList.remove("text-active")
        if(item.getAttribute("data-tab") === number) {
            item.classList.add("text-active")
        }
    });
    // [...bodyList][number].classList.add("text-active")
} 


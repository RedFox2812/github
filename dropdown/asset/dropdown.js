const dropdownSelect = document.querySelector(".dropdown-select");
const dropdownSelected = document.querySelector(".dropdown-value")
dropdownSelect.addEventListener("click", handleShow);
const dropdownList = document.querySelector(".dropdown-list");
const dropdown = document.querySelector(".dropdown");
function handleShow(e){
    dropdownList.classList.toggle("isshow");
    const dropdownItem = document.querySelectorAll(".dropdown-item");
    dropdownItem.forEach(item => item.addEventListener("click", function(e){
        const text = e.target.querySelector(".dropdown-text").textContent;
        dropdownSelected.textContent = text;
        dropdownList.classList.remove("isshow");
    }))
}
document.addEventListener("click", function(e){
    if(!dropdown.contains(e.target)){
        dropdownList.classList.remove("isshow");
    }
})
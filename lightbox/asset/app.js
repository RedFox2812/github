/**
 *  <div class="lightbox">
        <div class="lightbox-content">
            <div class="lightbox-img">
                <img src="https://vcdn1-dulich.vnecdn.net/2021/05/26/bien-an-bang-huongchivne-1622005178-1622005194.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=yUPjJGMgug23SaHyS5DRxw" alt="" class="lightimage">
            </div>
        </div>
    </div>
 */
const images = document.querySelectorAll(".image");
[...images].forEach(image => image.addEventListener("click",handleLightBox));
function handleLightBox(e) {  
    // document.body.insertAdjacentHTML("beforeend", template);
    if (!e.target.classList.contains("image")){
        return 0;
    }
    const srcImg = e.target.getAttribute("src");
    const template = `<div class="lightbox">
    <div class="lightbox-content">
        <i class="fa-solid fa-angle-left btn-pre"></i>
        <div class="lightbox-img">
            <img src="${srcImg}" alt="" class="lightimage">
        </div>
        <i class="fa-solid fa-angle-right btn-next"></i>
    </div>
</div>`; 
    document.body.insertAdjacentHTML("afterbegin",template);
    let lightbox = document.querySelector(".lightbox")
};
let index = 0;
document.body.addEventListener("click",function(e){
    let lightImage = document.querySelector(".lightimage");
    if(!lightImage) return;
    let lightSrc = lightImage.getAttribute("src");
    index = [...images].findIndex((item) => item.getAttribute("src") === lightSrc);
    if(e.target.matches(".lightbox")){
        e.target.parentNode.removeChild(e.target);     
    } else if(e.target.matches(".btn-pre")) {
        // btn-pre
        index = index - 1;
        if (index < 0) {
            index = images.length-1;
        }; 
        changeImage(lightImage, index);
    } else if(e.target.matches(".btn-next")) {
        // btn-next
        index = index + 1;
        if (index > images.length-1) {
            index = 0;
        };
        changeImage(lightImage, index);
    }
});
function changeImage(lightImage, index) {
    const newSrc = [...images][index].getAttribute("src");
    lightImage.setAttribute("src", newSrc);  
}

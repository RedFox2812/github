window.addEventListener("load",function(){
    const text = document.querySelector(".text");
    text.addEventListener("mouseenter", function(e){
        const title = e.target.dataset.text;
        const tooltipDiv = document.createElement("div");
        tooltipDiv.classList.add("tooltip-text");
        tooltipDiv.textContent = title; 
        document.body.appendChild(tooltipDiv);
        const cords = text.getBoundingClientRect();
        const {top, left, width, height} = cords;
        const tooltipHeight = tooltipDiv.offsetHeight;
        console.log(tooltipHeight);
        const triangleHeight = 10;
        tooltipDiv.style.left = `${left-width}px`;
        tooltipDiv.style.top= `${top-tooltipHeight-triangleHeight}px`;
    })
    text.addEventListener("mouseleave", function(){
        const tooltip = document.querySelector(".tooltip-text")
        if(!tooltip) return ;
        tooltip.parentNode.removeChild(tooltip);
    })
})
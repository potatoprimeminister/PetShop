const wrapper=document.querySelector(".sliderWrapper")
const menuItems=document.querySelectorAll(".menuItem")


menuItems.forEach((menuItems,index)=>{
    menuItems.addEventListener("click",()=>{
        wrapper.style.transform=`translateX(${-100*index}vw)`
    })
})

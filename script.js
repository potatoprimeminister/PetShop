const wrapper=document.querySelector(".sliderWrapper")
const menuItems=document.querySelectorAll(".menuItem")

const products=[
    {
        id: 1,
        title:"Shiba Inu",
        price:2000,
        img:"./img/dog.png",
        size: ["Small", "Medium", "Large"],
        type:["Male","Female"]
    },
    {
        id: 2,
        title:"Scottish Fold",
        price:1250,
        img:"./img/cat.png",
        size: ["Small", "Medium"],
        type:["Male","Female"]
    },
    {
        id: 3,
        title:"Siamese Fighting Fish",
        price:35,
        img:"./img/fish.png",
        size: ["1 Fish", "2 Fishes", "3 Fishes"],
        type:["Male( More colorful)","Female"]
    },
    {
        id: 4,
        title:"Golden Hamster",
        price:25,
        img:"./img/hamster.png",
        size: ["Small"],
        type:["Male","Female"]
    },
    {
        id: 5,
        title:"Corn Snake",
        price:100,
        img:"./img/snake.png",
        size: ["Medium", "Large"],
        type:["Baby","Adult"]
    }

]

let choosenProduct= products[0]

const currentProducImg=document.querySelector(".productImg");
const currentProducTile=document.querySelector(".productTitle");
const currentProducPrice=document.querySelector(".productPrice");
const currentProductType=document.querySelectorAll(".type");
const currentProductSize=document.querySelectorAll(".size");

menuItems.forEach((menuItems,index)=>{
    menuItems.addEventListener("click",()=>{
        //change the current slide
        wrapper.style.transform=`translateX(${-100*index}vw)`

        //change the choosen product
        choosenProduct= products[index]

        //change texts of currentProduct
        currentProducTile.textContent=choosenProduct.title
        currentProducPrice.textContent="$"+choosenProduct.price
        currentProducImg.src=choosenProduct.img
        
        currentProductType.forEach((type, i) => {
            if (choosenProduct.type[i]) {
                type.textContent = choosenProduct.type[i];
                type.style.display = "inline-block";
            } else {
                type.style.display = "none";
            }
        });

        currentProductSize.forEach((size, i) => {
            if (choosenProduct.size[i]) {
                size.textContent = choosenProduct.size[i];
                size.style.display = "inline-block";
            } else {
                size.style.display = "none";
            }
        })
    })
})

currentProductType.forEach((size)=>{
            size.addEventListener("click",()=>{
                
                //remove active from all sizes
                currentProductType.forEach((s)=>{
                    s.classList.remove("active");
                });

                //add active to clicked size
                size.classList.add("active");
            });
        });
currentProductSize.forEach((size)=>{
            size.addEventListener("click",()=>{
                
                //remove active from all sizes
                currentProductSize.forEach((s)=>{
                    s.classList.remove("active");
                });

                //add active to clicked size
                size.classList.add("active");
            });
        });

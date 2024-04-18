const wrapper = document.querySelector (".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./assets./image2.png",
            },
            {
                code: "darkblue",
                img: "./assets./image2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Jordan",
        price: 149,
        colors: [
            {
                code: "lightgreen",
                img: "./assets/image3.png",
            },
            {
                code: "darkblue",
                img: "./assets./image3.png",
            },
        ],
    }, 
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./assets./image4.png",
            },
            {
                code: "red",
                img: "./assets./image4.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "red",
                img: "./assets./image6.png",
            },
            {
                code: "black",
                img: "./assets./image6.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "black",
                img: "./assets./image5.png",
            },
            {
                code: "blue",
                img: "./assets./image5.png",
            },
        ],
    },
]

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".Color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index) => {
    item.addEventListener("click", () => {
        //change the current slide
        // console.log("you clicked!" + index);
        wrapper.style.transform =`translateX(${-100 * index}vw)`;
       
        //change the choosen product
        choosenProduct = products[index]

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //asigning new colors
        currentProductColors.forEach((color, index)=> {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});
currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
       currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
});

close.addEventListener("click",()=>{
    payment.style.display="none"
});


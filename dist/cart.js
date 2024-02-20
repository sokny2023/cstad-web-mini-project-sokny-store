// cart popular products in home page
let ppp = [
    {
      title: "Macbook",
      img: "../Images/home/pp1.jpg"
    },
    {
      title: "Macbook",
      img: "../Images/home/pp2.jpeg"
    },
    {
      title: "Macbook",
      img: "../Images/home/pp3.png"
    },
    {
      title: "Macbook",
      img: "../Images/home/pp4.jpg"
    },
    {
      title: "Macbook",
      img: "../Images/home/pp5.jpg"
    },
    {
      title: "Macbook",
      img: "../Images/home/pp6.jpg"
    },
    {
      title: "Macbook",
      img: "../Images/home/pp7.jpg"
    },
    {
      title: "Macbook",
      img: "../Images/home/pp8.png"
    },
  ];
  
  let pp_list = document.querySelector('#pp-list');
  ppp.map( pp => {
    pp_list.innerHTML += `
    <figure
    class="pp-hover bg-gray-50 border  border-primary-color/40 rounded-[5px] w-[90%] md:w-[100%] flex justify-center items-center relative hover:cursor-pointer"
    onmouseover="document.querySelector('.pp-name').style.display = 'block';"
    onmouseout="document.querySelector('.pp-name').style.display = 'none';">
    <img style="transition: 0.4s;" src="${pp.img}" alt=""
        class="w-[100%] hover:opacity-70 hover:scale-95 rounded-[5px] hover:border-none hover:outline-none">
    <figcaption style="display: none; transition: 0.4s;"
        class="pp-name text-primary-color w-[100%] bg-on-primary text text-[30px] absolute bottom-[50%]">
        ${pp.title}</figcaption>
  </figure>
    `
  });
  

  // cart block products in home page
  let block_prodcuts_array = [
    {
      title: 'Laptop',
      dest : 'MacBook, Asus, Lenovo, MSI...',
      img : '../Images/home/bp1.png',
    },
    {
      title: 'Monitor',
      dest : 'Apple, Asus, Lenovo, MSI...',
      img : '../Images/home/bp2.png',
    },
    {
      title: 'Phone',
      dest : 'Iphone Samsung Oppo...',
      img : '../Images/home/bp3.png',
    },
    {
      title: 'Headphone',
      dest : 'JBL Sony, Apple...',
      img : '../Images/home/bp4.png',
    },
  ];
  
  let block_products =document.querySelector('#blcok-product');
  block_prodcuts_array.map(block_prodcut =>{
    block_products.innerHTML+= `
                <div style="transition: 0.4s;" class="w-[100%] flex flex-col justify-between items-start border gap-2 rounded-[5px] hover:scale-105 hover:cursor-pointer">
                      <img src="${block_prodcut.img}" class="w-[100%] rounded-tl-[5px] rounded-tr-[5px]" alt="">
                      <h3 class="text-accent-color text-[18px] ml-4">${block_prodcut.title}</h3>
                      <p class="text-[14px] text-gray-800 ml-4">${block_prodcut.dest}</p>
                      <a href="#"
                          class="px-2 mt-1 py-1 text-[14px] border border-primary-color rounded-md text-on-secondary bg-primary-color hover:bg-primary-hover ml-4 mb-4">Buy
                          Product</a>
                  </div>
    `
  });

  // cart laptop in products page
let laptops =[
    {
        img: "../Images/home/bp1.png",
        title: "Macbook",
        price: 2500
    },
    {
        img: "../Images/products/laptop1.jpg",
        title: "Macbook",
        price: 2500
    },
];



let laptop_cart = document.querySelector('#laptop');
laptop_cart.addEventListener('click', () =>{
    alert("Hello");
});

laptops.map( laptop => {
    laptop_cart.innerHTML += `
<div
class="w-full  bg-white border border-gray-200 rounded-[5px] shadow dark:bg-gray-800 dark:border-gray-700">
<a href="#">
    <img class="p-8 rounded-t-lg" src="${laptop.img}" alt="product image" />
</a>
<div class="px-5 pb-5">
    <a href="#">
        <h5 class="text-[20px] font-semibold tracking-tight text-gray-900 dark:text-white">${laptop.title}</h5>
    </a>
    <div class="flex items-center mt-2.5 mb-5">
        <div class="flex items-center space-x-1 rtl:space-x-reverse">
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
        </div>
        <span
            class="bg-blue-100 text-primary-color text-xs font-semibold px-2.5 py-0.5 rounded  ms-3">5.0</span>
    </div>
    <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-primary-color ">$${laptop.price}</span>
        <a href="#"
            class="text-white bg-primary-color hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[5px] text-sm px-5 py-2.5 text-center ">Add
            to cart</a>
    </div>
</div>
</div> `
});
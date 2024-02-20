
// cart popular products in home page
let ppp = [
  {
    title: "Macbook",
    img: "../Images/home/pp1.jpg",
  },
  {
    title: "Iphone",
    img: "../Images/home/pp2.jpeg",
  },
  {
    title: "Samsung",
    img: "../Images/home/pp3.png",
  },
  {
    title: "Asus ROG",
    img: "../Images/home/pp4.jpg",
  },
  {
    title: "Lenovo",
    img: "../Images/home/pp5.jpg",
  },
  {
    title: "Dell Monitor",
    img: "../Images/home/pp6.jpg",
  },
  {
    title: "GPU",
    img: "../Images/home/pp7.jpg",
  },
  {
    title: "Headphone JBL",
    img: "../Images/home/pp8.png",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let pp_list = document.querySelector("#pp-list");

  if (pp_list && ppp) { 
    ppp.forEach(function(pp) { 
      pp_list.innerHTML += `
        <figure
          class="pp-hover bg-gray-50 rounded-[5px] w-[90%] md:w-[100%] flex justify-center items-center relative hover:cursor-pointer"
          onmouseover="this.querySelector('.pp-name').style.display = 'block';"
          onmouseout="this.querySelector('.pp-name').style.display = 'none';">
          <img style="transition: 0.4s;" src="${pp.img}" alt=""
              class="w-[100%] hover:opacity-70 hover:scale-95 rounded-[5px] hover:border-none hover:outline-none">
          <figcaption style="display: none; transition: 0.4s;"
              class="pp-name text-primary-color w-[100%] bg-on-primary text text-[30px] absolute bottom-[50%]">
              ${pp.title}</figcaption>
        </figure>
      `;
    });
  } else {
    console.log("#pp-list not found or ppp array is undefined");
  }
});


// cart block products in home page
let block_prodcuts_array = [
  {
    title: "Laptop",
    dest: "MacBook, Asus, Lenovo, MSI...",
    img: "../Images/home/bp1.png",
  },
  {
    title: "Monitor",
    dest: "Apple, Asus, Lenovo, MSI...",
    img: "../Images/home/bp2.png",
  },
  {
    title: "Phone",
    dest: "Iphone Samsung Oppo...",
    img: "../Images/home/bp3.png",
  },
  {
    title: "Headphone",
    dest: "JBL Sony, Apple...",
    img: "../Images/home/bp4.png",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let block_products = document.querySelector("#blcok-product"); 

  if (block_products) {
    block_prodcuts_array.forEach(function(block_product) { 
      block_products.innerHTML += `
        <div style="transition: 0.4s;" class="w-[100%] flex flex-col justify-between items-start border gap-2 rounded-[5px] hover:scale-105 hover:cursor-pointer">
              <img src="${block_product.img}" class="w-[100%] rounded-tl-[5px] rounded-tr-[5px]" alt="">
              <h3 class="text-accent-color text-[18px] ml-4">${block_product.title}</h3>
              <p class="text-[14px] text-gray-800 ml-4">${block_product.dest}</p>
              <a href="#"
                  class="px-2 mt-1 py-1 text-[14px] border border-primary-color rounded-md text-on-secondary bg-primary-color hover:bg-primary-hover ml-4 mb-4">Buy
                  Product</a>
        </div>
      `;
    });
  } else {
    console.log("#blcok-product not found");
  }
});

// laptop
document.addEventListener("DOMContentLoaded", function () {
  // Define an array of laptops for demonstration. Replace with your actual array
  let laptops_array = [
    {
      img: "../Images/product/s1.png",
      title: "Macbook",
      price: 2500
    },
    {
      img: "../Images/product/s1.png",
      title: "Macbook Pro",
      price: 2700
    },
    {
      img: "../Images/product/s1.png",
      title: "Macbook air",
      price: 2200
    },
    {
      img: "../Images/product/s1.png",
      title: "Macbook air 14 inches",
      price: 1900
    },
    // Add more laptop objects here
  ];

  let laptop_cart = document.querySelector("#laptop");

if (laptop_cart && laptops_array.length > 0) {
    laptops_array.forEach(function(laptop) {
      laptop_cart.innerHTML += `
<div class="w-full bg-white border border-gray-200 rounded-[5px] shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img class="p-8 rounded-t-lg" src="${laptop.img}" alt="product image" />
  </a>
  <div class="px-5 pb-5">
    <a href="#">
      <h5 class="text-[20px] font-semibold tracking-tight text-gray-900 dark:text-white">${laptop.title}</h5>
    </a>
    <div class="flex items-center mt-2.5 mb-5">
      <!-- Star ratings could be added here if needed -->
    </div>
    <div class="flex items-center justify-between">
      <span class="text-3xl font-bold text-primary-color">$${laptop.price}</span>
      <a href="#" class="text-white bg-primary-color hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[5px] text-sm px-5 py-2.5 text-center">Add to cart</a>
    </div>
  </div>
</div>
`;
    });
  } else {
    console.log("#laptop element not found or laptops_array is empty");
  }
});


// phone
document.addEventListener("DOMContentLoaded", function () {
  // Define an array of laptops for demonstration. Replace with your actual array
  let phone_array = [
    {
      img: "../Images/product/s3.png",
      title: "Iphone 15 pro mac",
      price: 1500
    },
    {
      img: "../Images/product/s3.png",
      title: "Iphone 15",
      price: 1099
    },
    {
      img: "../Images/product/s3.png",
      title: "Iphone 14 pro mac",
      price: 1200
    },
    {
      img: "../Images/product/s3.png",
      title: "Iphone 14",
      price: 899
    },
  ];

  let phone_cart = document.querySelector("#phone");

if (phone_cart && phone_array.length > 0) {
    phone_array.forEach(function(phone) {
      phone_cart.innerHTML += `
<div class="w-full bg-white border border-gray-200 rounded-[5px] shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img class="p-8 rounded-t-lg" src="${phone.img}" alt="product image" />
  </a>
  <div class="px-5 pb-5">
    <a href="#">
      <h5 class="text-[20px] font-semibold tracking-tight text-gray-900 dark:text-white">${phone.title}</h5>
    </a>
    <div class="flex items-center mt-2.5 mb-5">
      <!-- Star ratings could be added here if needed -->
    </div>
    <div class="flex items-center justify-between">
      <span class="text-3xl font-bold text-primary-color">$${phone.price}</span>
      <a href="#" class="text-white bg-primary-color hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[5px] text-sm px-5 py-2.5 text-center">Add to cart</a>
    </div>
  </div>
</div>
`;
    });
  } else {
    console.log("#phone element not found or laptops_array is empty");
  }
});
let cart = []; // initially cart is empty
let quantity = 1; // initial quantity is 1
let size = "S"; // initial size is S
let brandColor = "purple"; // initial brand color is "purple"
let finalPrice = 0; // initial final price is 0
let finalQuantity = 0; // initial final quantity is 0

// function to change the watch photo
function changeWatchPhoto(color) {
  const thumbnail = document.getElementById("product_thumbnail"); // get the thumbnail

  const images = {
    purple: "./assets/purple.png",
    black: "./assets/black.png",
    blue: "./assets/blue.png",
    cyan: "./assets/cyan.png",
  };

  brandColor = color; // update the brand color

  thumbnail.src = images[color];
}

// function to change the quantity
function changeQuantity(amount) {
  const quantityValue = document.getElementById("product_quantity"); // get the quantity

  quantity = Math.max(1, quantity + amount); // get the new quantity

  quantityValue.innerHTML = quantity; // update the quantity
}

// function to change the size
function changeSize(sizeValue) {
  size = sizeValue; // get the new size
}

// function to add item to cart
function addToCart() {
  const priceMap = {
    S: 69,
    M: 79,
    L: 89,
    XL: 99,
  };

  const totalPrice = quantity * priceMap[size]; // get the latest price
  const thumbnail = document.getElementById("product_thumbnail").src; // get the latest thumbnail

  finalPrice += totalPrice; // update the final price
  finalQuantity += quantity; // update the final quantity

  const product = {
    thumbnail,
    brandColor,
    size,
    quantity,
    totalPrice,
  };

  cart.push(product); // add the product
  const checkoutButton = document.getElementById("checkoutButton");

  checkoutButton.classList.remove("hidden");
  checkoutButton.classList.add("flex"); // show the checkout button

  const totalCart = document.getElementById("totalCart");

  totalCart.innerHTML = cart.length; // update the total cart items
}

// function to checkout
function checkout() {
  const modal = document.getElementById("modal"); // get the modal

  modal.classList.remove("hidden"); 
  modal.classList.add("flex"); 

  const cartDetails = document.getElementById("cart_details");

  cartDetails.innerHTML = ""; // clear the cart details

  // show cart data
  cart.reverse().map(
    (item) =>
      (cartDetails.innerHTML += `
              <li class="flex items-center border-b border-[#DBDFEA] py-4">
                <div class="w-[278px] flex items-center gap-[7.36px]">
                  <img
                    src="${item.thumbnail}"
                    alt="watvh image"
                    width="36.643px"
                    height="41.786px"
                    class="rounded-[3px]"
                  />

                  <p
                    class="text-[#364A63] font-[roboto] text-[14px] leading-[165%]"
                  >
                    Classy Modern Smart watch
                  </p>
                </div>

                <p
                  class="text-[#364A63] font-[roboto] text-[14px] leading-[165%] w-[62px] text-center"
                >
                  ${
                    item.brandColor.charAt(0).toUpperCase() +
                    item.brandColor.slice(1)
                  }
                </p>

                <p
                  class="text-[#364A63] font-[roboto] text-[14px] leading-[165%] w-[69px] text-center"
                >
                  ${item.size}
                </p>

                <p
                  class="text-[#364A63] font-[roboto] text-[14px] leading-[165%] w-[59px] text-center"
                >
                  ${item.quantity}
                </p>

                <p
                  class="text-[#364A63] font-[roboto] text-[14px] leading-[165%] w-[91px] text-right"
                >
                  $${item.totalPrice}
                </p>
              </li>
    `)
  );

  // set the final price on ui
  document.getElementById("finalPrice").innerText = "$" + finalPrice.toString();

  // set the final quantity on ui
  document.getElementById("finalQuantity").innerText = finalQuantity.toString();
}

// funciton continue shoping
function continueShopping() {
  const modal = document.getElementById("modal"); // get the modal

  modal.classList.remove("flex"); // hide the modal
  modal.classList.add("hidden"); // show the modal
}

// function to close modal
function closeModal() {
  const modal = document.getElementById("modal"); // get the modal

  modal.classList.remove("flex"); // hide the modal
  modal.classList.add("hidden"); // show the modal

  const checkoutButton = document.getElementById("checkoutButton");

  checkoutButton.classList.remove("flex"); // hide the checkout button
  checkoutButton.classList.add("hidden"); // show the checkout button

  cart = []; // empty the cart
}

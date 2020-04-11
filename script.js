document.addEventListener("DOMContentLoaded", (e) => {
  // all js code goes here

  /* --- 1. Let's create our cards array which we'll be using in our game --- */

  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
  ];

  // let's create our card borad first

  const grid = document.querySelector(".grid");

  const createboard = () => {
    // adding blank.png image everywhere on our board. For that we'll create an img element
    console.log(cardArray.length);
    cardArray.forEach((card, index) => {
      var card = document.createElement("img");
      card.setAttribute("src", "./images/blank.png");
      card.setAttribute("data-id", index);

      card.addEventListener("click", flipcard);

      grid.appendChild(card);
    });
  };

  createboard();
});

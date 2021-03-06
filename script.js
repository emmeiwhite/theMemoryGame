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
  let cardsChosen = []; // Idea is to keep checking how many cards have been chosen
  let cardsChosenId = [];
  let cardsWon = [];

  // here for a callback function, the 'this' variable points to the element being clicked

  function createboard() {
    // adding blank.png image everywhere on our board. For that we'll create an img element
    cardArray.forEach((card, index) => {
      var card = document.createElement("img");
      card.setAttribute("src", "./images/blank.png");
      card.setAttribute("id", index);

      // flipping the card once it is clicked !!!
      card.addEventListener("click", flipcard);

      grid.appendChild(card);
    });
  }

  /* --- checkforMatch --- */
  function checkforMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    console.log(Array.from(cards));
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You have found a match");
      cards[optionOneId].setAttribute("src", "./images/white.png");
      cards[optionTwoId].setAttribute("src", "./images/white.png");

      cardsWon.push(cardsChosen);
      console.log("CardsWon says :");
      console.dir(cardsWon); // Array of paired array ... chosenCards pairs
    } else {
      cards[optionOneId].setAttribute("src", "./images/blank.png");
      cards[optionTwoId].setAttribute("src", "./images/blank.png");
      alert("Sorry, Try again");
    }

    cardsChosen = [];
    cardsChosenId = [];
  }

  /* --- flipcard Function--- */
  function flipcard() {
    console.log(this);
    var cardId = this.getAttribute("id");
    this.setAttribute("src", cardArray[cardId].img);
    cardsChosen.push(cardArray[cardId].name);

    cardsChosenId.push(cardId);

    if (cardsChosen.length == 2) {
      // We want to match after every two cards are flipped
      setTimeout(checkforMatch, 500);
    }
  }
  createboard();
});

const cards = document.querySelectorAll(".card");
let cardOne, cardTwo;
let matched = 0;
function flipcard(e) {
  let clickedCard = e.target;
  if (clickedCard !== cardOne) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return (cardOne = clickedCard);
    }

    cardTwo = clickedCard;
    console.log(cardOne, cardTwo);
    let cardOneImg = cardOne.querySelector("img").src,
      cardTwoImg = cardTwo.querySelector("img").src;
    matchedCards(cardOneImg, cardTwoImg);
  }
  if (matched === 8) {
  }
}
function matchedCards(img1, img2) {
  if (img1 === img2) {
    matched++;
    console.log(matched);
    cardOne.removeEventListener("click", flipcard);
    cardTwo.removeEventListener("click", flipcard);
    cardOne = cardTwo = "";
    return;
  }
  //if two cards are not matched
  setTimeout(() => {
    //adding shake effect to cards after 400ms
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 400);
  setTimeout(() => {
    //removing shake , flip effect  cards after 1200
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = "";
  }, 1200);
}
cards.forEach((card) => {
  card.addEventListener("click", flipcard);
});

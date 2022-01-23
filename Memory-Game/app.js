const cards = document.querySelectorAll(".card");
let cardOne, cardTwo;
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
}
function matchedCards(img1, img2) {
  if (img1 === img2) {
    return console.log("cards matched");
  }
  cardOne.classList.add("shake");
  cardTwo.classList.add("shake");
}
cards.forEach((card) => {
  card.addEventListener("click", flipcard);
});

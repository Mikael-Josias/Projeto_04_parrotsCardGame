
const containerCard = document.querySelector(".container__cards");

const createCard = () => {
    let card = document.createElement("div");
    let cardParrot = document.createElement("img");

    card.classList.add("card");
    cardParrot.classList.add("card__parrot");
    cardParrot.src = "./assets/img/green_parrot_emoji.png";

    card.appendChild(cardParrot);
    containerCard.appendChild(card);
}

const setCards = (num) => {
    for (let i = 0; i < num; i++) {
        createCard();
    }
}
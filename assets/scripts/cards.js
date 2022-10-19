
const createCards = (cardValues, size = numCards) => {
    let containerCards = document.querySelector(".container__cards");

    cardValues = [...cardValues, ...cardValues];
    cardValues.sort(() => Math.random() - 0.5);

    for (let i = 0; i < size; i++) {
        let card = document.createElement("div");
        let cardParrot = document.createElement("img");
        
        card.classList.add("card");
        card.setAttribute("data-card-value", cardValues[i].name);
        cardParrot.classList.add("card__parrot");
        cardParrot.src = "./assets/img/green_parrot_emoji.png";

        card.appendChild(cardParrot);
        containerCards.appendChild(card);        
    }

}

const initializer = () => {
    
    let cardValues = generateRandomParrots(numCards);
    createCards(cardValues);
}
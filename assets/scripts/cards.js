
const createCards = (cardValues, size = numCards) => {
    let containerCards = document.querySelector(".container__cards");

    cardValues = [...cardValues, ...cardValues];
    cardValues.sort(() => Math.random() - 0.5);

    for (let i = 0; i < size; i++) {
        let card = document.createElement("div");
        let cardBackParrot = document.createElement("img");
        let cardValueParrot = document.createElement("img");
        
        card.classList.add("card");
        card.setAttribute("data-card-value", cardValues[i].name);
        
        cardBackParrot.classList.add("card__parrot--before");
        cardBackParrot.src = "./assets/img/green_parrot_emoji.png";

        cardValueParrot.classList.add("card__parrot--after");
        cardValueParrot.src = cardValues[i].image;

        card.appendChild(cardBackParrot);
        card.appendChild(cardValueParrot);
        containerCards.appendChild(card);        
    }

}

const initializer = () => {
    
    let cardValues = generateRandomParrots(numCards);
    createCards(cardValues);
}
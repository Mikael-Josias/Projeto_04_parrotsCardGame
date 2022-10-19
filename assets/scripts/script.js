
let promptMsg = "Digite o número de cartas com que gostaria de jogar:";
let numCards = 0;
let firstCard = false, firstCardValue, secondCard;

while(numCards === 0){
    let num = Number(prompt(promptMsg));
    if (num%2 === 0 && 4 <= num && num <= 14) {

        numCards = num;        
    }

    promptMsg = "O número de cartas deve ser par, entre 4 e 14:"
}

initializer();

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        
        if (!card.classList.contains("matched")) {
            card.classList.remove("card")
            card.classList.add("card--flipped");

            if (!firstCard) {
                firstCard = card;
                firstCardValue = card.getAttribute("data-card-value");
                
            }else{
                //moves ++
    
                secondCard = card;
                let secondCardValue = card.getAttribute("data-card-value");
            
                if (firstCardValue === secondCardValue) {
                    
                    firstCard.classList.add("matched");
                    secondCard.classList.add("matched");
    
                    firstCard = false;
                }else{
                    let [tempFirst, tempSecond] = [firstCard, secondCard];
                    firstCard = false;
                    secondCard = false;
    
                    let delay = setTimeout(() => {
                        tempFirst.classList.add("card");
                        tempSecond.classList.add("card");
                        
                        tempFirst.classList.remove("card--flipped");
                        tempSecond.classList.remove("card--flipped");
                    }, 1000)
                }
            }
        }
    })
});
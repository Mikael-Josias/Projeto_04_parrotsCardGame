
let promptMsg = "Digite o número de cartas com que gostaria de jogar:";
let numCards = 0;
let firstCard = false, firstCardValue, secondCard;
let moves = 0;

while(numCards === 0){
    let num = Number(prompt(promptMsg));
    if (num%2 === 0 && 4 <= num && num <= 14) {

        numCards = num;      
        interval = setInterval(timeGenerator, 1000);
        
        initializer();
    }

    promptMsg = "O número de cartas deve ser par, entre 4 e 14:"
}


const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        
        if (!card.classList.contains("matched")) {
            card.classList.remove("card")
            card.classList.add("card--flipped");

            moves++;

            if (!firstCard) {
                firstCard = card;
                firstCardValue = card.getAttribute("data-card-value");
                
            }else{
    
                secondCard = card;
                let secondCardValue = card.getAttribute("data-card-value");
            
                if (firstCardValue === secondCardValue) {
                    
                    firstCard.classList.add("matched");
                    secondCard.classList.add("matched");
    
                    firstCard = false;

                    verifyWin();
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

const verifyWin = (size = numCards) => {
    let matchedCards = document.querySelectorAll(".matched");

    if (matchedCards.length === size) {
        setTimeout(() => {
            alert(`Você ganhou em ${moves} jogadas! Com um tempo de ${minutes < 10? "0" + minutes: minutes} minutos e ${seconds < 10? "0" + seconds: seconds} segundos!`);
            let res = prompt(`Deseja jogar novamente? Digite "sim" ou "não" respectivamente.`);

            if (res === "sim") {
                
            }else if (res === "não") {
                clearInterval(interval)
                return;
            }

        }, 1000);
    }
}

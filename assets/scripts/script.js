
let promptMsg = "Digite o número de cartas com que gostaria de jogar:";
let numCards = 0;

while(numCards === 0){
    let num = Number(prompt(promptMsg));
    if (num%2 === 0 && 4 <= num && num <= 14) {

        numCards = num;        
    }

    promptMsg = "O número de cartas deve ser par, entre 4 e 14:"
}

initializer();
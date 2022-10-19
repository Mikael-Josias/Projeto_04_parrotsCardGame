
let parrots = [
    {name: "bob-ross-parrot", image: "./assets/img/bob_ross_parrot.gif"},
    {name: "explody-parrot", image: "./assets/img/explody_parrot.gif"},
    {name: "fiesta-parrot", image: "./assets/img/fiesta_parrot.gif"},
    {name: "metal-parrot", image: "./assets/img/metal_parrot.gif"},
    {name: "revert-it-parrot", image: "./assets/img/revert_it_parrot.gif"},
    {name: "triplets-parrot", image: "./assets/img/triplets_parrot.gif"},
    {name: "unicorn-parrot", image: "./assets/img/unicorn_parrot.gif"},
];

const generateRandomParrots = (size = numCards) => {
    let tempArray = [...parrots];

    let cardValues = [];

    size = size / 2;

    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        cardValues.push(tempArray[randomIndex]);

        tempArray.splice(randomIndex, 1);
        
    }

    return cardValues;
}


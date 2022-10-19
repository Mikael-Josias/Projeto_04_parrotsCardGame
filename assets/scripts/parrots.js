
let parrots = [
    {name: "bob-ross-parrot", image: "../img/bob_ross_parrot.gif"},
    {name: "explody-parrot", image: "../img/explody_parrot.gif"},
    {name: "fiesta-parrot", image: "../img/fiesta_parrot.gif"},
    {name: "metal-parrot", image: "../img/metal_parrot.gif"},
    {name: "revert-it-parrot", image: "../img/revert_it_parrot.gif"},
    {name: "triplets-parrot", image: "../img/triplets_parrot.gif"},
    {name: "unicorn-parrot", image: "../img/unicorn_parrot.gif"},
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


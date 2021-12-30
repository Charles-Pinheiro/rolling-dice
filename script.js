const container = document.getElementById("container");
const button = document.getElementById("btn");
const dice = document.getElementById("dice");
const list = document.getElementById("list");
const graphic = document.getElementById("graphic");


const randonNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const addTimesInArray = (array, number) => {
    array[number - 2] += 1;
}

const rollDice = () => {

    list.innerHTML = "";
    graphic.innerHTML = "";

    let times = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 1; i <= 1000; i++) {

        let firstDice = randonNumber();
        let secondDice = randonNumber();

        let some = firstDice + secondDice;

        addTimesInArray(times, some);
    }

    let diceNumbers = 2;

    for (let i = 0; i < times.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerText = `${diceNumbers} : ${times[i]}`;
        list.appendChild(listItem);
        diceNumbers++;
    }

    for (let i = 0; i < times.length; i++) {
        const graphicItem = document.createElement("p");
        graphicItem.style.width = `${times[i]}px`;
        graphic.appendChild(graphicItem);
    }
}

button.addEventListener("click", rollDice);
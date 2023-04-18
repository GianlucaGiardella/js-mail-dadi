// create an user div
const userDiv = document.createElement("div");
document.querySelector(".user_box").appendChild(userDiv);

// create a computer div
const compDiv = document.createElement("div");
document.querySelector(".computer_box").appendChild(compDiv);

// create a result div
const resultDiv = document.createElement("h2");
resultDiv.className = "result"
document.querySelector(".container").appendChild(resultDiv);

function generate() {
    // random number generator
    const userNum = Math.floor(Math.random() * 6) + 1;
    const compNum = Math.floor(Math.random() * 6) + 1;
    let result;

    // result message
    if (userNum == compNum) {
        result = "I numeri sono uguali, parità."
    } else if (userNum > compNum) {
        result = `${userNum} è maggiore, vince l'utente.`
    } else {
        result = `${compNum} è maggiore, vince il computer.`
    }

    // add variables in div
    userDiv.innerHTML = `${userNum}`;
    compDiv.innerHTML = `${compNum}`;
    resultDiv.innerHTML = `${result}`;
}




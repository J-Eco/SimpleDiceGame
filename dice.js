let diceNumber;
let response;
let score = 0;
const inputSent = document.querySelector('#uSubmit');
const appendHtml = document.querySelector("section");
inputSent.addEventListener("click", executeThem);
inputSent.addEventListener("click", uScore);


const upUserScore = document.querySelector("p");

function executeThem() {
    DiceGame();
    dice(document.getElementById('uNumber').value);

    appendHtml.classList.add('fade-in');


    setTimeout(function () {
        appendHtml.classList.remove('fade-in');
    }, 1000);
}



//plays the dice
DiceGame = () => {
    const dice = (Math.random() * 6) + 1;
    const fl = Math.floor(dice);
    diceNumber = fl.toString();
    console.log(diceNumber);
    return diceNumber;
}


//takes users input, and compared to dice throw
dice = (uNumber) => {
    let x = uNumber;

    if (diceNumber === x) { 
        response = "Your guess, " + x + " , is correct!";
    }  
    if (diceNumber !== x) {
        response = "Your guess, " + x + " , was not Correct.";
    }

    //append shows up again, and is equaled to the response.
    appendHtml.textContent = response;
    console.log(response);
    return response;
    }

//takes users input and compares it to the dice, if match, gets +1, -1 otherwise
function uScore() {

      const num = response.slice(12, 13);

    if (diceNumber === num) {
        score++;
    } 
    if (diceNumber !== num) {
        score--;
    };
    console.log("user score currently: " + score);
    console.log(num + " is the userNumber" + " & " + diceNumber + " is the dice's Number");

    //Updates the user score, and sends it to get put on the frontend.
    upUserScore.textContent = "score: " + score;
    return score;
}

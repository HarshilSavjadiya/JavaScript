const game = () => {

const playMatch = () => {
  const options = document.querySelectorAll("button");
  const playerHand = document.querySelector(".user-choice");
  const computerHand = document.querySelector(".computer-choice");
  const hands = document.querySelectorAll(".img-box img");
 
  const computerOptions = ["Stone", "Paper", "Scrissors"];
 
  options.forEach(option => {
    option.addEventListener("click", function() {
 
      const computerNumber = Math.floor(Math.random() * 3);
      console.log(computerNumber);
      const computerChoice = computerOptions[computerNumber];
 
        compareHands(this.textContent, computerChoice);
        console.log("kbuds")
        console.log(this.textContent)
        playerHand.src = `./assests/${this.textContent}.png`;
        computerHand.src = `./assests/${computerChoice}.png`;
    });
  });
 };
 
 const compareHands = (playerChoice, computerChoice) => {
 
  const result = document.querySelector(".result");
  console.log(playerChoice)
  console.log(computerChoice)
  if (playerChoice === computerChoice) {
   result.textContent = "It is a tie";
    return;
  }
 
  if (playerChoice === "Stone") {
    if (computerChoice === "Scrissors") {
     result.textContent = "Player Wins";
      return;
    } else {
     result.textContent = "Computer Wins";
      return;
    }
  }
 
  if (playerChoice === "Paper") {
    if (computerChoice === "Scrissors") {
     result.textContent = "Computer Wins";
      return;
    } else {
     result.textContent = "Player Wins";
      return;
    }
  }
 
  if (playerChoice === "Scrissors") {
    if (computerChoice === "Stone") {
     result.textContent = "Computer Wins";
      return;
    } else {
     result.textContent = "Player Wins";
      return;
    }
  }
 };

 playMatch();

}

game();
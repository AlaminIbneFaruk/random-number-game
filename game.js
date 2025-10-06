let randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);
let Ans = Number(prompt("Enter a number"));
while (Ans !== randomNum) {
  Ans = Number(prompt("You Lost!! Try again; Enter a number"));
}
console.log("You win!!");

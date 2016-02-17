confirm("I'm ready!")
var age = prompt("What's your age?")
if(age < 13)
{
    console.log("You've selected that you're under 13. By continuing, you assume full responsibility for your actions.")
}
else
{
    console.log("Congratulations! You're old enough to responsibly play this silly game!")
}
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'")
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'")
var userAnswer = prompt("Do you want to race Bieber on stage?")
if(userAnswer === "yes")
{
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!")
}
else
{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")
}
var feedback = prompt("How do you like this game? Please enter a rating between 0 and 10.")
if(feedback > 8)
{
    console.log("Thank you! We should race at the next concert!")
}
else
{
    console.log("I'll keep practicing coding and racing.")
}

var user = prompt("Do you want to play the game of life?").toLowerCase();

switch(user) {
    case 'yes':
        var school = prompt("You are very adventurous! Here goes.... Do you choose to go to school?").toLowerCase();
        if(school === 'yes') {
            var job = prompt("Excellent! You become educated. After you graduate, do you get a job?").toLowerCase();
            if(job === 'yes') {
                var marriage = prompt("Nice! Would you like to get married?").toLowerCase();
                var kids = prompt("Do you want to have kids?").toLowerCase();
                if(marriage === 'yes' && kids === 'yes') {
                    console.log("Well done! You've made all the right choices and won the game of life. You die happy.");
                } else {
                    console.log("Well, they say you can't have everything. You die with some regrets.");
                }
            } else {
                console.log("What a lazy bastard! You die poor and alone.");
            }
        } else {
            var genius = prompt("Damn. Well I hope you're a genius.... Are you?").toLowerCase();
            var rich = prompt("How about rich? Do you come from money?").toLowerCase();
            if(genius === 'yes' || rich === 'yes') {
                console.log("Ohhhh, don't worry, then. You don't need school to succeed. You die never having worked a day in your life!");
            } else {
                console.log("Awwww. Poor you. You die dumb and poor.");
            }
        }
        break;
    case 'no':
        console.log("Booo. How lame.");
        break;
    case 'maybe':
        console.log("C'mon now! Make a decision!");
        break;
    default:
        console.log("It's a yes or no question....");
        break;
}

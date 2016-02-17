var outcome = function() {
    var slaying = true;
    var youHit = Math.floor(Math.random()*2);
    var damageThisRound = Math.floor(Math.random()*5 + 1);
    var totalDamage = 0;
    while (slaying) {
        if(youHit = 1) {
            console.log("Awesome! You hit the dragon and did " + damageThisRound + " damage!");
            totalDamage += damageThisRound;
            if(totalDamage >= 4) {
                console.log("You killed the dragon!");
                slaying = false;
            } else {
                youHit = Math.floor(Math.random()*2);
            };
        } else {
            console.log("Booo! You've been burnt to a crisp.");
        };
        slaying = false;
    };
};
outcome()

/*jshint multistr:true */

var text = "Michael and Lida rock. They're great together, and one day, there will be little Mike & Lidas."
var myName = "Lida"
var hits = []
for (var i = 0; i < text.length; i++) {
    if(text[i] === "L") {
        for (var j = i; j < i + myName.length; j++) {
            hits.push(text[j]);
        };
    };
};
if(hits.length === 0) {
    console.log("Your name does not appear!")
} else {
    console.log(hits)
}

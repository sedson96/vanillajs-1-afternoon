let grab = document.getElementById("grab");
let assign = document.getElementById("assign");

console.log(grab)
console.log(assign)

function setCard() {
    let card = document.getElementById(grab.value)
    console.log(card);
    card.style.color = assign.value;
    
}

function reset() {
    document.getElementById("spade").style.color = "grey";
    document.getElementById("heart").style.color = "grey";
    document.getElementById("club").style.color = "grey";
    document.getElementById("diamond").style.color = "grey";
    }

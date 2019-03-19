let arr = [];


function play(play) {
    let player = document.getElementById("player");
    let clicked = document.getElementById(play);
    if (clicked.innerText === "X" || clicked.innerText === "O") {
        return null
    } else if (player.innerText === "X") {
        player.innerText = "O";
        clicked.innerText = "X";
        arr[play] = "X";
    } else {
        player.innerText = "X";
        clicked.innerText = "O";
        arr[play] = "O";
    }
    console.log(arr)


    if(arr[0] !== undefined && arr[0] === arr[4] && arr[0] === arr[8]){alert(arr[0] + ' is the Winner!!');return}
    else if(arr[0] !== undefined && arr[0] === arr[3] && arr[0] === arr[6]){alert(arr[0] + ' is the Winner!!');return}
    else if(arr[0] !== undefined && arr[0] === arr[1] && arr[0] === arr[2]){alert(arr[0] + ' is the Winner!!');return}
    else if(arr[1] !== undefined && arr[1] === arr[4] && arr[1] === arr[7]){alert(arr[1] + ' is the Winner!!');return}
    else if(arr[2] !== undefined && arr[2] === arr[5] && arr[2] === arr[8]){alert(arr[2] + ' is the Winner!!');return}
    else if(arr[3] !== undefined && arr[3] === arr[4] && arr[3] === arr[5]){alert(arr[3] + ' is the Winner!!');return}
    else if(arr[6] !== undefined && arr[6] === arr[7] && arr[6] === arr[8]){alert(arr[6] + ' is the Winner!!');return}
    else if(arr[2] !== undefined && arr[2] === arr[4] && arr[2] === arr[6]){alert(arr[2] + ' is the Winner!!');return}



    // let fullBoard = true

    // if (arr.includes(undefined)){
    //       fullBoard = false
    // } 
    // if (fullBoard === true ){
    //     alert("Cat's game")
    // }
   
   let fullBoard = true;
    for (let i = 0; i <= 8; i++) {
        if (arr[i] === undefined){
            fullBoard = false;
        }
    }
    if (fullBoard === true){
        alert("Cat's game");
    }
}
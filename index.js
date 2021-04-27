

// function superbowlWin(record){
//     return(record === "W");
// }
// superbowlWin(record);


// function superbowlWin(recordArray){
//     const result = recordArray.find(isWin)
//     if (result) {
//         return result.year
//     } else {
//         return result
//     }
// }


// function isWin(gameObject){
//      return gameObject.result === "w"
// }

function superbowlWin(recordArray) {
    const result = recordArray.find(gameObject => gameObject.result === "W")
    return (result ? result.year : result)
}


// code your solution here

/*
Write a function called superbowlWin() in index.js:

-The function should receive 1 argument, an Array of JavaScript Objects
-Each object has two properties: year and result
-It should use find() to test each Object to see if the result is "W" — a win!
-It should return the year when the win occurred (if it occurred at all!)
-If no win is found, it should return, sadly, undefined
*/


function superbowlWin(arrayOfObjects){
    for(const x of arrayOfObjects)
       if(x.result === "W" )
        return x.year;
} 

record.find(superbowlWin);


/* Another Solution 
function superbowlWin(arrayOfObjects){
    let winningObject = arrayOfObjects.find((object) => object.result === 'W');
    if (winningObject) {
        return winningObject.year;
    }

    return undefined;
} */

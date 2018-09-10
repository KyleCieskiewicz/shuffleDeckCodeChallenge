function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffleDeck(array) {
    
    if (array.length <= 1) return;

    for (var at = 0;
            at < array.length - 1; at++) {

        
        var randomChoice = getRandom(at, array.length - 1);

        
        if (randomChoice !== at) {
            var valueAtIndexWeChoseFor = array[at];
            array[at] = array[randomChoice];
            array[randomChoice] = valueAtIndexWeChoseFor;
        }
    }
    
    // return array;
    console.log(array[0]);
}




shuffleDeck([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

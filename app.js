
var arrangeCoins = function(n) {
    let row = 1
    let exit = false
    while(!exit){
        if(n - row > 0){
            n-=row
            row++
        } else {
            exit = true
        }
    }

    return n === row ? row : row -1
};
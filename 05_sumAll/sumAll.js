const sumAll = function(y, z) {
    let i = 0;
    if (typeof(y) && typeof(z) === 'number' && (y>0) && (z>0)) {
        if (y<z) {
            for (y; y <= z; y++) {
                i+=y;
            }
            return i;
        } else {
            for (z; z <= y; z++) {
                i+=z;
            }
            return i;
        }
        
    } else {
        return "ERROR"
    }
    

};

// Do not edit below this line
module.exports = sumAll;

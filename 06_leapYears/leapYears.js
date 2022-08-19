const leapYears = function(year) {
    if (year%4 == 0) {
        if (year%100 == 0) {
            if (year%400 == 0) {
                return true;
            } return false;
        } return true;
    }
    return false;
};

/*
1. divisble by 4
2.  divisible by 100 is not, unless divisible by 400
*/
// Do not edit below this line
module.exports = leapYears;

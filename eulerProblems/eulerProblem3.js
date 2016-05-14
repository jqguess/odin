/**
 * Created by jqgue on 5/14/2016.
 */
/** The prime factors of 13195 are 5, 7, 13 and 29.

 What is the largest prime factor of the number 600851475143 ? **/

var pfactor = function(varFactor, number) {
    if(varFactor % number == 0) {
        varFactor /= number;
        return pfactor(varFactor, number);
    } else {
        return varFactor;
    };
};

var largestPrimeFactor = function(number) {
    var root = Math.floor(Math.sqrt(number));
    var temp = 2
    while(number > 1) {
        number = pfactor(number, temp);
        if(number === 1) {
            return temp;
        } else if(temp >= root) {
            temp = number;
        } else {
            temp++;
        };
    };
};
console.log(largestPrimeFactor(600851475143));
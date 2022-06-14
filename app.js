const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const { JPY, USD, GBP} = oneEuroIs;

const fromDollarToYen = (valueInDollar) => {
    let valueInEuro = valueInDollar / USD;
    let valueInYen = valueInEuro * JPY;
    return valueInYen;
}
const fromEuroToDollar = (valueInEuro) => {
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * USD;
    //return the dollar value
    return valueInDollar;
}
const fromYenToPound = (valueInYen) => {
    let valueInEuro = valueInYen / JPY;
    let valueInPound = valueInEuro * GBP;
    return valueInPound;
}

module.exports = { 
    sum, 
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound 
};
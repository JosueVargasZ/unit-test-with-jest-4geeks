// import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// // start your first test
// test('adds 14 + 9 to equal 23', () => {
//     //inside the test we call our sum function with 2 numbers
//     let total = sum(14, 9);

//     // we expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });

test("One euro should be 1.2 dollars", function(){
    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBeCloseTo(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

test("One dollar should be 1065.83 Yens", function(){
    // use the function like its suppoed to be used
    const yens = fromDollarToYen(10);
    const expected = 10 * 106.583; 
    
    // this is the comparison for the unit test
     expect(yens).toBeCloseTo(expected);
});

test("One yen should be 0.15632 pounds", function(){
    // use the function like its suppoed to be used
    const pounds = fromYenToPound(25);
    const expected =  25 * 0.0062; 
    
    // this is the comparison for the unit test
     expect(pounds).toBeCloseTo(expected);
});
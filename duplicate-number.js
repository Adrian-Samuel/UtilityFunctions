//Write a function to check for duplicate numbers

const checkArrayforDup = (array) => {
    let myMap = new Map();
    array.map(num => {
        if (myMap.has(num)) {
            let curr = myMap.get(num); /* ? */
            myMap.set(num, curr + 1);
        } else {
            myMap.set(num, 1);
        }
    });
    
    let dupList = [...myMap].filter(x =>Array.from(x)[1] > 1); /* ? */
    const report = dupList.map(x=>{ return {duplicatedNumber: x[0], appears: `${x[1]} times`}}); /* ? */
    return report;
};

//check

let list = [1, 2, 4, 76, 5, 5, 6, 76, 6];
checkArrayforDup(list); /* ? */





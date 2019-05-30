Functions that takes in two parameters, the araay of objects and the key you want to check data by and returns a unique list of filtered objects

//ReadableFunction

const uniqueList = (array, checkBy) => {
    return [...new Set(array
        .map(info => info[checkBy]))]
        .sort()
        .map(filteredData => array.find(item => item[checkBy] == filteredData))
}

//One Line function
const uniqueList = (array, checkBy) => [...new Set(array.map(info => info[checkBy]))].sort().map(filteredData => array.find(item => item[checkBy] == filteredData))

/*
Step 1: Take the input array of objects and map it by the key you want to be unique
Step 2: Get a unique array by combining new Set to get a unique list and use the spread parameter to return an array of that same list.
Step 3: Use the default sort() function to sort the numbers in order. A custom sort function could be inserted here if necessary
Step 4: We then take the filtered unique value from the keys and we iterate them through a find() function (via a map) to get a single object return value.
Step 5: We return this function and we have an array of sorted, unique objects
*/

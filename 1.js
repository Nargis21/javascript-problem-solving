const arr = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9, 13];

// Q: How to remove duplicate elements from this array ?

//solution-1
// const uniqueArray = [... new Set(arr)]

//solution-2
// const uniqueArray = arr.filter((value, index, self) => {
//     return self.indexOf(value) === index;
// })

//solution-3
// const uniqueArray = arr.reduce((accumulator, currentValue) => {
//     if (!accumulator.includes(currentValue)) {
//         accumulator.push(currentValue)
//     }
//     return accumulator
// }, [])

// console.log(uniqueArray);

// How to find out the largest / lowest elements from this array ?



// How to slice(22, 48) from this array
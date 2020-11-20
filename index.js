const matrix = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
]

const summary = function(number){
    let indexOfPayload = 0;
    let indexOfContainingArray = 0;
    let sum = 0;
    let surroundingElements = [];

    // iterating though all arrays in order to
    // find index of array that contains number
    // passed to function, and to find index of
    // number itself.

    let doesMatrixContainsNumber = false

    matrix.forEach(array =>{
        if(array.indexOf(number) > -1){
            indexOfContainingArray = matrix.indexOf(array)
            indexOfPayload = array.indexOf(number)
            doesMatrixContainsNumber = true
        }
    });

    // handling the case when passed number does not exist in matrix 
    if(!doesMatrixContainsNumber){
        console.log(`Given parameter does not exist in matrix, and total is ${number}`)
        return number
    }

    // pupulating the array that contains numbers that
    // needs to be calculated

    if(matrix[indexOfContainingArray -1] && matrix[indexOfContainingArray +1]){
        surroundingElements.push(matrix[indexOfContainingArray - 1][indexOfPayload - 1])
        surroundingElements.push(matrix[indexOfContainingArray - 1][indexOfPayload])
        surroundingElements.push(matrix[indexOfContainingArray - 1][indexOfPayload + 1])
        surroundingElements.push(matrix[indexOfContainingArray][indexOfPayload - 1])
        surroundingElements.push(matrix[indexOfContainingArray][indexOfPayload + 1])
        surroundingElements.push(matrix[indexOfContainingArray + 1][indexOfPayload - 1])
        surroundingElements.push(matrix[indexOfContainingArray + 1][indexOfPayload])
        surroundingElements.push(matrix[indexOfContainingArray + 1][indexOfPayload + 1])
        
    } else if(matrix[indexOfContainingArray +1] && !matrix[indexOfContainingArray -1]){

        surroundingElements.push(matrix[indexOfContainingArray + 1][indexOfPayload - 1])
        surroundingElements.push(matrix[indexOfContainingArray + 1][indexOfPayload])
        surroundingElements.push(matrix[indexOfContainingArray + 1][indexOfPayload +1])
        surroundingElements.push(matrix[indexOfContainingArray][indexOfPayload - 1])
        surroundingElements.push(matrix[indexOfContainingArray][indexOfPayload + 1])

    } else if(!matrix[indexOfContainingArray +1] && matrix[indexOfContainingArray -1]){

        surroundingElements.push(matrix[indexOfContainingArray - 1][indexOfPayload - 1])
        surroundingElements.push(matrix[indexOfContainingArray - 1][indexOfPayload])
        surroundingElements.push(matrix[indexOfContainingArray - 1][indexOfPayload +1])
        surroundingElements.push(matrix[indexOfContainingArray][indexOfPayload - 1])
        surroundingElements.push(matrix[indexOfContainingArray][indexOfPayload + 1])
    }

    // calculation of values of surrounding numbers 
    surroundingElements.forEach(matrixValue =>{
       if(matrixValue){
           sum += matrixValue
       }
    })

    // adding passed number to previously calculated value
    sum += number

    console.log(`Total sum is: ${sum}`)
    return sum
}

summary(45)
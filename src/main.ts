/*--- 1. Write a ts program to read and print elements of array. --- */


/*---2. Write a ts program to print all negative elements in an array.--- */
function negtElemInArray() {
    let iArray: number[] = [1, -8, 5, -3, 4, -5, 6, -4]
    let negtArray: number[] = iArray.filter(x => x < 0)

    console.log(negtArray)
}
console.log(`
--------------------
    Problem No. 02
--------------------
Negative Element in the Array`)
negtElemInArray()
/*---3. Write a ts program to find sum of all array elements.--- */
function sumOfElem() {
    let iArray: number[] = [1, 8, 5, 3, 4, 5, 6, 4]
    let sum: number = iArray.reduce((x, y) => x + y, 0)

    let joinArry: string = iArray.join(' + ')
    console.log(`${joinArry} = ${sum}`)
}
console.log(`
--------------------
    Problem No. 03
--------------------
Sum of Element in the Array`)
sumOfElem()
/*---4. Write a ts program to find maximum and minimum element in an array.--- */
function elemMaxMin() {
    let iArray: number[] = [2, 8, 5, 3, 4, 11, 6, 9]
    let maxElem:number = Math.max(...iArray)
    let minElem:number = Math.min(...iArray)

    console.log(`Array's Element = ${iArray}
Max Number in the Array = ${maxElem}
Min Number in the Array = ${minElem}`)
}
console.log(`
--------------------
    Problem No. 04
--------------------
Maximum and Minimum element in array`)
elemMaxMin()
/*---5. Write a ts program to find second largest element in an array.--- */
function secLargElem() {
    let iArray: number[] = [2, 25, 12, 56, 8, 5, 3, 4, 6, 9]
    let sortedArray:number[] = iArray.sort((a,b) => {return a-b})
    let secLargNum:number = sortedArray[sortedArray.length-2]

    console.log(`Array's Element = ${iArray}
Second Large Number in the Array = ${secLargNum}`)
}
console.log(`
--------------------
    Problem No. 04
--------------------
Maximum and Minimum element in array`)
secLargElem()
/*---6. Write a ts program to count total number of even and odd elements in an array.--- */
function totalNumEvenOddInArray() {
    let iArray: number[] = [1, 7, 5, 3, 4, 12, 6, 10, 9]
    let evenArray: number[] = iArray.filter(x => {return x % 2 == 0})
    let oddArray: number[] = iArray.filter(x => {return x % 2 == 1})

    console.log(`Array,s Element = ${iArray}
Even Elements in Array = ${evenArray}
Total Even Num in Array = ${evenArray.length}
Even Elements in Array = ${oddArray}
Total Odd Num in Array = ${oddArray.length}`)
}
console.log(`
--------------------
    Problem No. 06
--------------------
Even and Odd elements in Array`)
totalNumEvenOddInArray()
/*---7. Write a ts program to count total number of negative elements in an array. */
function totalnegtElemInArray() {
    let iArray: number[] = [1, -8, 5, -3, 4, -5, 6, -4]
    let negtArray: number[] = iArray.filter(x => x < 0)

    console.log(`Array's Elements = [${iArray}]
Negative Elements in Array = [${negtArray}]
Total Negative Elements    = ${negtArray.length}`)
}
console.log(`
--------------------
    Problem No. 07
--------------------
Negative Element in the Array`)
totalnegtElemInArray()
/*---8. Write a ts program to copy all elements from an array to another array.--- */
function copyElemInArray() {
    let iArray: number[] = [1, -8, 5, -3, 4, -5, 6, -4]
    let copyOfiArray:number[] = iArray

    console.log(`Original Array = [${iArray}]
Copy of Array  = [${copyOfiArray}]`)
}
console.log(`
--------------------
    Problem No. 08
--------------------
Negative Element in the Array`)
copyElemInArray()

/*---9. Write a ts program to insert an element in an array.--- */
function insertElemInArray() {
    let iArray: number[] = [1, -8, 5, -3, 4, -5, 6, -4]
    console.log(`Original Array's Elements = [${iArray}]`)

    iArray.push(1000)

    console.log(`New Array's Elements = [${iArray}]`)
}
console.log(`
--------------------
    Problem No. 09
--------------------
insert an element in array`)
insertElemInArray()
/*---10. Write a ts program to delete an element from an array at specified position.--- */
function deletElemInArray() {
    let iArray: number[] = [1, -8, 5, -3, 4, -5, 6, -4]
    console.log(`Original Array's Elements = [${iArray}]`)

    iArray.splice(5, 1)

    console.log(`New Array's Elements = [${iArray}]
element is delete from inex 5`)
}
console.log(`
--------------------
    Problem No. 10
--------------------
delete an element from an array at specified position`)
deletElemInArray()
/*---11. Write a ts program to count frequency of each element in an array.--- */
/*---12. Write a ts program to print all unique elements in the array.--- */
/*---13. Write a ts program to count total number of duplicate elements in an array.--- */
/*---14. Write a ts program to delete all duplicate elements from an array.--- */
/*---15. Write a ts program to merge two array to third array.--- */
/*---16. Write a ts program to find reverse of an array.--- */
/*---17. Write a ts program to put even and odd elements of array in two separate array.--- */
/*---18. Write a ts program to search an element in an array.--- */
/*---19. Write a ts program to sort array elements in ascending or descending order.--- */
/*---20. Write a ts program to sort even and odd elements of array separately.--- */
/*---21. Write a ts program to left rotate an array.
/*---22. Write a ts program to right rotate an array.--- */
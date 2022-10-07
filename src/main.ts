/*--- 1. Write a ts program to read and print elements of array. --- */
function readElemInArray() {
    let iArray: number[] = [1, 8, 5, 3, 4, 5, 6, 4]
    console.log(`The Array = [${iArray}]
    
Elements of the Array`)

    iArray.forEach(el => {
        console.log(el)
    })

}
console.log(`
--------------------
    Problem No. 01
--------------------
read and print elements of array.`)
readElemInArray()

/*---2. Write a ts program to print all negative elements in an array.--- */
function negtElemInArray() {
    let iArray: number[] = [1, -8, 5, -3, 4, -5, 6, -4]
    console.log(`The Array = [${iArray}]`)

    let negtArray: number[] = iArray.filter(x => x < 0)

    console.log(`Array with Negative Elements = [${negtArray}]`)
}
console.log(`
--------------------
    Problem No. 02
--------------------
Negative Elements in the Array`)
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
    let maxElem: number = Math.max(...iArray)
    let minElem: number = Math.min(...iArray)

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
    let sortedArray: number[] = iArray.sort((a, b) => { return a - b })
    let secLargNum: number = sortedArray[sortedArray.length - 2]

    console.log(`Array's Element = ${iArray}
Second Large Number in the Array = ${secLargNum}`)
}
console.log(`
--------------------
    Problem No. 05
--------------------
Maximum and Minimum element in array`)
secLargElem()

/*---6. Write a ts program to count total number of even and odd elements in an array.--- */
function totalNumEvenOddInArray() {
    let iArray: number[] = [1, 7, 5, 3, 4, 12, 6, 10, 9]
    let evenArray: number[] = iArray.filter(x => { return x % 2 == 0 })
    let oddArray: number[] = iArray.filter(x => { return x % 2 == 1 })

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
    let copyOfiArray: number[] = iArray

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
    let iArray: number[] = [1, 8, 5, 3, 4, 5, 6, 4]
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
function countFrqInArray() {
    let iArray: number[] = [1, 8, 5, 8, 4, 5, 8, 4]
    let obj = {}

    for (let i: number = 0; i < iArray.length; i++) {
        let char: number = iArray[i]

        if (obj[char] == undefined) {
            obj[char] = 1
        }
        else {
            obj[char]++
        }
    }

    console.log(`Array's Elements = ${iArray}`)

    for (let key in obj) {
        console.log(`Frequency of "${key}" = ${obj[key]}`)
    }
}
console.log(`
--------------------
    Problem No. 11
--------------------
count frequency of each element`)
countFrqInArray()
/*---12. Write a ts program to print all unique elements in the array.--- */
function uniqElemInArray() {
    let iArray: number[] = [1, 8, 3, 5, 8, 5, 4]
    let obj = {}

    for (let i: number = 0; i < iArray.length; i++) {
        let char: number = iArray[i]

        if (obj[char] == undefined) {
            obj[char] = 1
        }
        else {
            obj[char]++
        }
    }

    console.log(`Array's Elements = ${iArray}`)

    let uniqElem = []

    for (let key in obj) {
        if (obj[key] == 1) {
            uniqElem.push(key)
        }
    }

    let uniqElemToNum: number[] = uniqElem.map(element => parseInt(element)) // Convert string to number

    console.log(`all unique elements = ${uniqElemToNum}`)
    // console.log(`all unique elements = ${uniqElemToNum[0] + uniqElemToNum[1]}`)
}
console.log(`
--------------------
    Problem No. 12
--------------------
all unique elements in array`)
uniqElemInArray()

/*---13. Write a ts program to count total number of duplicate elements in an array.--- */
function duplicatElemInArray() {
    let iArray: number[] = [1, 8, 5, 8, 4, 5, 8, 4]
    let obj = {}

    for (let i: number = 0; i < iArray.length; i++) {
        let char: number = iArray[i]

        if (obj[char] == undefined) {
            obj[char] = 1
        }
        else {
            obj[char]++
        }
    }

    console.log(`Array's Elements = ${iArray}`)

    let dublicatNumAsString: string[] = []

    for (let key in obj) {
        if (obj[key] > 1) {
            // console.log(`duplicate element "${key}" = ${obj[key]}`)
            dublicatNumAsString.push(key)
        }
    }

    let dublicatNumAsNumber: number[] = dublicatNumAsString.map(element => parseInt(element)) // Convert string to number

    console.log(`Total Dublicate Elements  [${dublicatNumAsNumber}] = ${dublicatNumAsNumber.length}`)
}
console.log(`
--------------------
    Problem No. 13
--------------------
duplicate elements in array`)
duplicatElemInArray()

/*---14. Write a ts program to delete all duplicate elements from an array.--- */
function deleteDuplicatElem() {
    let iArray: number[] = [1, 8, 5, 8, 4, 5, 3, 9]
    let obj = {}

    for (let i: number = 0; i < iArray.length; i++) {
        let char: number = iArray[i]

        if (obj[char] == undefined) {
            obj[char] = 1
        }
        else {
            obj[char]++
        }
    }

    console.log(`Array's Elements = [${iArray}]`)

    let deleteDublicatNumAsString: string[] = []

    for (let key in obj) {
        if (obj[key] < 2) {
            deleteDublicatNumAsString.push(key)
        }
    }

    let dublicatNumAsNumber: number[] = deleteDublicatNumAsString.map(element => parseInt(element)) // Convert string to number

    console.log(`After delete Elements  = [${dublicatNumAsNumber}]`)
}
console.log(`
--------------------
    Problem No. 14
--------------------
delete all duplicate elements from an array`)
deleteDuplicatElem()

/*---15. Write a ts program to merge two array to third array.--- */
function merge2Array() {
    let iArray01: number[] = [1, 8, 5, 3, 4, 5, 6, 4]
    let iArray02: number[] = [19, 98, 85, 43, 54, 35, 26, 15]

    let iArray03: number[] = iArray01.concat(iArray02)

    console.log(`1st Array = [${iArray01}]
2nd Array = [${iArray02}]
Merged Array = [${iArray03}]`)

}
console.log(`
--------------------
    Problem No. 15
--------------------
merge two array to third array`)
merge2Array()
/*---16. Write a ts program to find reverse of an array.--- */
function reverseArray() {
    let iArray01: number[] = [1, 8, 5, 3, 4, 7, 6, 9]
    console.log(`Original Array = [${iArray01}]`)

    let iArray02: number[] = iArray01.reverse()
    console.log(`Reversed Array = [${iArray02}]`)

}
console.log(`
--------------------
    Problem No. 16
--------------------
reverse of an array`)
reverseArray()

/*---17. Write a ts program to put even and odd elements of array in two separate array.--- */
function separateEvenOddArray() {
    let iArray: number[] = [1, 8, 5, 3, 4, 7, 6, 10]
    console.log(`Original Array = [${iArray}]`)

    let evenArray: number[] = []
    let oddArray: number[] = []

    iArray.forEach(e => {
        if (e % 2 == 0) {
            evenArray.push(e)
        }
        else {
            oddArray.push(e)
        }
    })

    console.log(`Even Array = [${evenArray}]`)
    console.log(`Odd Array = [${oddArray}]`)
}
console.log(`
--------------------
    Problem No. 17
--------------------
even and odd elements of array in two separate array`)
separateEvenOddArray()

/*---18. Write a ts program to search an element in an array.--- */
function searchElemInArray() {
    let iArray: number[] = [1, 8, 5, 3, 7, 9, 6, 4]
    console.log(`The Array = [${iArray}]`)

    let searchElem: number = 8
    console.log(`Search Element = ${searchElem}`)

        for (let char in iArray) {
            if (iArray[char] == searchElem) {
                var present:number = iArray[char]
                console.log(`The Element (${searchElem}) is "Present"`);
                break;
            }
        }
        if (!(present)) {
            console.log(`The Element (${searchElem}) is "Not Present"`)
        }
        // console.log(typeof(present))
}
console.log(`
--------------------
    Problem No. 18
--------------------
search an element in the Array`)
searchElemInArray()

/*---19. Write a ts program to sort array elements in ascending or descending order.--- */
function sortElemInArray() {
    let iArray: number[] = [1, 8, 5, 3, 7, 9, 6, 4, 2, 10]
    console.log(`The Array [${iArray}]`)
    console.log(`The Array in Ascending order  [${iArray.sort((a , b) => {return a-b})}]`)
    console.log(`The Array in Descending order [${iArray.sort((a , b) => {return b-a})}]`)
}
console.log(`
--------------------
    Problem No. 19
--------------------
search an element in the Array`)
sortElemInArray()

/*---20. Write a ts program to sort even and odd elements of array separately.--- */
function sortedEvenOddArray() {
    let iArray: number[] = [1, 8, 5, 3, 4, 7, 6, 10, 11, 2]
    console.log(`Original Array = [${iArray}]`)

    let evenArray: number[] = []
    let oddArray: number[] = []

    iArray.forEach(e => {
        if (e % 2 == 0) {
            evenArray.push(e)
        }
        else {
            oddArray.push(e)
        }
    })

    console.log(`Even Array = [${evenArray}]`)
    console.log(`Sorted Even Array = [${evenArray.sort((a , b) => {return a-b})}]`)

    console.log(`Odd Array = [${oddArray}]`)
    console.log(`Sorted Odd Array = [${oddArray.sort((a , b) => {return a-b})}]`)
}
console.log(`
--------------------
    Problem No. 20
--------------------
sort even and odd elements of array`)
sortedEvenOddArray()

/*---21. Write a ts program to left rotate an array.*/
function leftRotateArray() {
    let iArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
    console.log(`Original Array = [${iArray}]`)

    let shiftElem = iArray.shift()

    iArray.push(shiftElem)

    console.log(`Left Rotated Array = [${iArray}]`)
}
console.log(`
--------------------
    Problem No. 21
--------------------
left rotate an array`)
leftRotateArray()

/*---22. Write a ts program to right rotate an array.--- */
function rightRotateArray() {
    let iArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
    console.log(`Original Array = [${iArray}]`)

    let shiftElem = iArray.pop()

    iArray.unshift(shiftElem)

    console.log(`Right Rotated Array = [${iArray}]`)
}
console.log(`
--------------------
    Problem No. 22
--------------------
left rotate an array`)
rightRotateArray()

console.log(`

--------------------------------------
AL-HAMDU LILLAH Assignment has completed
--------------------------------------`)
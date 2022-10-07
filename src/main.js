/*--- 1. Write a ts program to read and print elements of array. --- */
function readElemInArray() {
    var iArray = [1, 8, 5, 3, 4, 5, 6, 4];
    console.log("The Array = [".concat(iArray, "]\n    \nElements of the Array"));
    iArray.forEach(function (el) {
        console.log(el);
    });
}
console.log("\n--------------------\n    Problem No. 01\n--------------------\nread and print elements of array.");
readElemInArray();
/*---2. Write a ts program to print all negative elements in an array.--- */
function negtElemInArray() {
    var iArray = [1, -8, 5, -3, 4, -5, 6, -4];
    console.log("The Array = [".concat(iArray, "]"));
    var negtArray = iArray.filter(function (x) { return x < 0; });
    console.log("Array with Negative Elements = [".concat(negtArray, "]"));
}
console.log("\n--------------------\n    Problem No. 02\n--------------------\nNegative Elements in the Array");
negtElemInArray();
/*---3. Write a ts program to find sum of all array elements.--- */
function sumOfElem() {
    var iArray = [1, 8, 5, 3, 4, 5, 6, 4];
    var sum = iArray.reduce(function (x, y) { return x + y; }, 0);
    var joinArry = iArray.join(' + ');
    console.log("".concat(joinArry, " = ").concat(sum));
}
console.log("\n--------------------\n    Problem No. 03\n--------------------\nSum of Element in the Array");
sumOfElem();
/*---4. Write a ts program to find maximum and minimum element in an array.--- */
function elemMaxMin() {
    var iArray = [2, 8, 5, 3, 4, 11, 6, 9];
    var maxElem = Math.max.apply(Math, iArray);
    var minElem = Math.min.apply(Math, iArray);
    console.log("Array's Element = ".concat(iArray, "\nMax Number in the Array = ").concat(maxElem, "\nMin Number in the Array = ").concat(minElem));
}
console.log("\n--------------------\n    Problem No. 04\n--------------------\nMaximum and Minimum element in array");
elemMaxMin();
/*---5. Write a ts program to find second largest element in an array.--- */
function secLargElem() {
    var iArray = [2, 25, 12, 56, 8, 5, 3, 4, 6, 9];
    var sortedArray = iArray.sort(function (a, b) { return a - b; });
    var secLargNum = sortedArray[sortedArray.length - 2];
    console.log("Array's Element = ".concat(iArray, "\nSecond Large Number in the Array = ").concat(secLargNum));
}
console.log("\n--------------------\n    Problem No. 05\n--------------------\nMaximum and Minimum element in array");
secLargElem();
/*---6. Write a ts program to count total number of even and odd elements in an array.--- */
function totalNumEvenOddInArray() {
    var iArray = [1, 7, 5, 3, 4, 12, 6, 10, 9];
    var evenArray = iArray.filter(function (x) { return x % 2 == 0; });
    var oddArray = iArray.filter(function (x) { return x % 2 == 1; });
    console.log("Array,s Element = ".concat(iArray, "\nEven Elements in Array = ").concat(evenArray, "\nTotal Even Num in Array = ").concat(evenArray.length, "\nEven Elements in Array = ").concat(oddArray, "\nTotal Odd Num in Array = ").concat(oddArray.length));
}
console.log("\n--------------------\n    Problem No. 06\n--------------------\nEven and Odd elements in Array");
totalNumEvenOddInArray();
/*---7. Write a ts program to count total number of negative elements in an array. */
function totalnegtElemInArray() {
    var iArray = [1, -8, 5, -3, 4, -5, 6, -4];
    var negtArray = iArray.filter(function (x) { return x < 0; });
    console.log("Array's Elements = [".concat(iArray, "]\nNegative Elements in Array = [").concat(negtArray, "]\nTotal Negative Elements    = ").concat(negtArray.length));
}
console.log("\n--------------------\n    Problem No. 07\n--------------------\nNegative Element in the Array");
totalnegtElemInArray();
/*---8. Write a ts program to copy all elements from an array to another array.--- */
function copyElemInArray() {
    var iArray = [1, -8, 5, -3, 4, -5, 6, -4];
    var copyOfiArray = iArray;
    console.log("Original Array = [".concat(iArray, "]\nCopy of Array  = [").concat(copyOfiArray, "]"));
}
console.log("\n--------------------\n    Problem No. 08\n--------------------\nNegative Element in the Array");
copyElemInArray();
/*---9. Write a ts program to insert an element in an array.--- */
function insertElemInArray() {
    var iArray = [1, -8, 5, -3, 4, -5, 6, -4];
    console.log("Original Array's Elements = [".concat(iArray, "]"));
    iArray.push(1000);
    console.log("New Array's Elements = [".concat(iArray, "]"));
}
console.log("\n--------------------\n    Problem No. 09\n--------------------\ninsert an element in array");
insertElemInArray();
/*---10. Write a ts program to delete an element from an array at specified position.--- */
function deletElemInArray() {
    var iArray = [1, 8, 5, 3, 4, 5, 6, 4];
    console.log("Original Array's Elements = [".concat(iArray, "]"));
    iArray.splice(5, 1);
    console.log("New Array's Elements = [".concat(iArray, "]\nelement is delete from inex 5"));
}
console.log("\n--------------------\n    Problem No. 10\n--------------------\ndelete an element from an array at specified position");
deletElemInArray();
/*---11. Write a ts program to count frequency of each element in an array.--- */
function countFrqInArray() {
    var iArray = [1, 8, 5, 8, 4, 5, 8, 4];
    var obj = {};
    for (var i = 0; i < iArray.length; i++) {
        var char = iArray[i];
        if (obj[char] == undefined) {
            obj[char] = 1;
        }
        else {
            obj[char]++;
        }
    }
    console.log("Array's Elements = ".concat(iArray));
    for (var key in obj) {
        console.log("Frequency of \"".concat(key, "\" = ").concat(obj[key]));
    }
}
console.log("\n--------------------\n    Problem No. 11\n--------------------\ncount frequency of each element");
countFrqInArray();
/*---12. Write a ts program to print all unique elements in the array.--- */
function uniqElemInArray() {
    var iArray = [1, 8, 3, 5, 8, 5, 4];
    var obj = {};
    for (var i = 0; i < iArray.length; i++) {
        var char = iArray[i];
        if (obj[char] == undefined) {
            obj[char] = 1;
        }
        else {
            obj[char]++;
        }
    }
    console.log("Array's Elements = ".concat(iArray));
    var uniqElem = [];
    for (var key in obj) {
        if (obj[key] == 1) {
            uniqElem.push(key);
        }
    }
    var uniqElemToNum = uniqElem.map(function (element) { return parseInt(element); }); // Convert string to number
    console.log("all unique elements = ".concat(uniqElemToNum));
    // console.log(`all unique elements = ${uniqElemToNum[0] + uniqElemToNum[1]}`)
}
console.log("\n--------------------\n    Problem No. 12\n--------------------\nall unique elements in array");
uniqElemInArray();
/*---13. Write a ts program to count total number of duplicate elements in an array.--- */
function duplicatElemInArray() {
    var iArray = [1, 8, 5, 8, 4, 5, 8, 4];
    var obj = {};
    for (var i = 0; i < iArray.length; i++) {
        var char = iArray[i];
        if (obj[char] == undefined) {
            obj[char] = 1;
        }
        else {
            obj[char]++;
        }
    }
    console.log("Array's Elements = ".concat(iArray));
    var dublicatNumAsString = [];
    for (var key in obj) {
        if (obj[key] > 1) {
            // console.log(`duplicate element "${key}" = ${obj[key]}`)
            dublicatNumAsString.push(key);
        }
    }
    var dublicatNumAsNumber = dublicatNumAsString.map(function (element) { return parseInt(element); }); // Convert string to number
    console.log("Total Dublicate Elements  [".concat(dublicatNumAsNumber, "] = ").concat(dublicatNumAsNumber.length));
}
console.log("\n--------------------\n    Problem No. 13\n--------------------\nduplicate elements in array");
duplicatElemInArray();
/*---14. Write a ts program to delete all duplicate elements from an array.--- */
function deleteDuplicatElem() {
    var iArray = [1, 8, 5, 8, 4, 5, 3, 9];
    var obj = {};
    for (var i = 0; i < iArray.length; i++) {
        var char = iArray[i];
        if (obj[char] == undefined) {
            obj[char] = 1;
        }
        else {
            obj[char]++;
        }
    }
    console.log("Array's Elements = [".concat(iArray, "]"));
    var deleteDublicatNumAsString = [];
    for (var key in obj) {
        if (obj[key] < 2) {
            deleteDublicatNumAsString.push(key);
        }
    }
    var dublicatNumAsNumber = deleteDublicatNumAsString.map(function (element) { return parseInt(element); }); // Convert string to number
    console.log("After delete Elements  = [".concat(dublicatNumAsNumber, "]"));
}
console.log("\n--------------------\n    Problem No. 14\n--------------------\ndelete all duplicate elements from an array");
deleteDuplicatElem();
/*---15. Write a ts program to merge two array to third array.--- */
function merge2Array() {
    var iArray01 = [1, 8, 5, 3, 4, 5, 6, 4];
    var iArray02 = [19, 98, 85, 43, 54, 35, 26, 15];
    var iArray03 = iArray01.concat(iArray02);
    console.log("1st Array = [".concat(iArray01, "]\n2nd Array = [").concat(iArray02, "]\nMerged Array = [").concat(iArray03, "]"));
}
console.log("\n--------------------\n    Problem No. 15\n--------------------\nmerge two array to third array");
merge2Array();
/*---16. Write a ts program to find reverse of an array.--- */
function reverseArray() {
    var iArray01 = [1, 8, 5, 3, 4, 7, 6, 9];
    console.log("Original Array = [".concat(iArray01, "]"));
    var iArray02 = iArray01.reverse();
    console.log("Reversed Array = [".concat(iArray02, "]"));
}
console.log("\n--------------------\n    Problem No. 16\n--------------------\nreverse of an array");
reverseArray();
/*---17. Write a ts program to put even and odd elements of array in two separate array.--- */
function separateEvenOddArray() {
    var iArray = [1, 8, 5, 3, 4, 7, 6, 10];
    console.log("Original Array = [".concat(iArray, "]"));
    var evenArray = [];
    var oddArray = [];
    iArray.forEach(function (e) {
        if (e % 2 == 0) {
            evenArray.push(e);
        }
        else {
            oddArray.push(e);
        }
    });
    console.log("Even Array = [".concat(evenArray, "]"));
    console.log("Odd Array = [".concat(oddArray, "]"));
}
console.log("\n--------------------\n    Problem No. 17\n--------------------\neven and odd elements of array in two separate array");
separateEvenOddArray();
/*---18. Write a ts program to search an element in an array.--- */
function searchElemInArray() {
    var iArray = [1, 8, 5, 3, 7, 9, 6, 4];
    console.log("The Array = [".concat(iArray, "]"));
    var searchElem = 8;
    console.log("Search Element = ".concat(searchElem));
    for (var char in iArray) {
        if (iArray[char] == searchElem) {
            var present = iArray[char];
            console.log("The Element (".concat(searchElem, ") is \"Present\""));
            break;
        }
    }
    if (!(present)) {
        console.log("The Element (".concat(searchElem, ") is \"Not Present\""));
    }
    // console.log(typeof(present))
}
console.log("\n--------------------\n    Problem No. 18\n--------------------\nsearch an element in the Array");
searchElemInArray();
/*---19. Write a ts program to sort array elements in ascending or descending order.--- */
function sortElemInArray() {
    var iArray = [1, 8, 5, 3, 7, 9, 6, 4, 2, 10];
    console.log("The Array [".concat(iArray, "]"));
    console.log("The Array in Ascending order  [".concat(iArray.sort(function (a, b) { return a - b; }), "]"));
    console.log("The Array in Descending order [".concat(iArray.sort(function (a, b) { return b - a; }), "]"));
}
console.log("\n--------------------\n    Problem No. 19\n--------------------\nsearch an element in the Array");
sortElemInArray();
/*---20. Write a ts program to sort even and odd elements of array separately.--- */
function sortedEvenOddArray() {
    var iArray = [1, 8, 5, 3, 4, 7, 6, 10, 11, 2];
    console.log("Original Array = [".concat(iArray, "]"));
    var evenArray = [];
    var oddArray = [];
    iArray.forEach(function (e) {
        if (e % 2 == 0) {
            evenArray.push(e);
        }
        else {
            oddArray.push(e);
        }
    });
    console.log("Even Array = [".concat(evenArray, "]"));
    console.log("Sorted Even Array = [".concat(evenArray.sort(function (a, b) { return a - b; }), "]"));
    console.log("Odd Array = [".concat(oddArray, "]"));
    console.log("Sorted Odd Array = [".concat(oddArray.sort(function (a, b) { return a - b; }), "]"));
}
console.log("\n--------------------\n    Problem No. 20\n--------------------\nsort even and odd elements of array");
sortedEvenOddArray();
/*---21. Write a ts program to left rotate an array.*/
function leftRotateArray() {
    var iArray = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log("Original Array = [".concat(iArray, "]"));
    var shiftElem = iArray.shift();
    iArray.push(shiftElem);
    console.log("Left Rotated Array = [".concat(iArray, "]"));
}
console.log("\n--------------------\n    Problem No. 21\n--------------------\nleft rotate an array");
leftRotateArray();
/*---22. Write a ts program to right rotate an array.--- */
function rightRotateArray() {
    var iArray = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log("Original Array = [".concat(iArray, "]"));
    var shiftElem = iArray.pop();
    iArray.unshift(shiftElem);
    console.log("Right Rotated Array = [".concat(iArray, "]"));
}
console.log("\n--------------------\n    Problem No. 22\n--------------------\nleft rotate an array");
rightRotateArray();
console.log("\n\n--------------------------------------\nAL-HAMDU LILLAH Assignment has completed\n--------------------------------------");

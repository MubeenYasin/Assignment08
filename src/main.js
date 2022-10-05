/*--- 1. Write a ts program to read and print elements of array. --- */
/*---2. Write a ts program to print all negative elements in an array.--- */
function negtElemInArray() {
    var iArray = [1, -8, 5, -3, 4, -5, 6, -4];
    var negtArray = iArray.filter(function (x) { return x < 0; });
    console.log(negtArray);
}
console.log("\n--------------------\n    Problem No. 02\n--------------------\nNegative Element in the Array");
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
console.log("\n--------------------\n    Problem No. 04\n--------------------\nMaximum and Minimum element in array");
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
    var iArray = [1, -8, 5, -3, 4, -5, 6, -4];
    console.log("Original Array's Elements = [".concat(iArray, "]"));
    iArray.splice(5, 1);
    console.log("New Array's Elements = [".concat(iArray, "]\nelement is delete from inex 5"));
}
console.log("\n--------------------\n    Problem No. 10\n--------------------\ndelete an element from an array at specified position");
deletElemInArray();
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

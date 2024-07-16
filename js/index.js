// 1 misol

// let text = "Hello World"
// function countCase(str) {
//     let lowerCases = 0
//     let upperCases = 0
//     let arr = text.split("")
//     arr.forEach(item => {
//         if ('a' <= item && item <= 'z') {
//             lowerCases++
//         } else if ('A' <= item && item <= 'Z') {
//             upperCases++
//         }
//     })
//     return { upperCases, lowerCases }
// }
// console.log(countCase(text));

// 2 misol

// let arr = [1,2,3,4,5,6,7,8,9]
// function evenOddIndexSums(arr = []){
//     let toqIndexs = 0
//     let juftIndexs = 0
//     arr.forEach((item, index) => {
//         if(item % 2 == 0){
//             juftIndexs += index
//         } else {
//             toqIndexs += index
//         }
//     })
//     return {juftIndexs, toqIndexs}
// }
// console.log(evenOddIndexSums(arr))

// 3 misol(Buoutputdan sal boshqacha chiqdi)

// function rotateMatrix(matrix) {
//     const n = matrix.length;
//     let rotated = [];
//     for (let i = 0; i < n; i++) {
//         rotated[i] = [];
//     }

//     matrix.forEach((row, i) => {
//         row.forEach((val, j) => {
//             rotated[j][n - 1 - i] = val;
//         });
//     });

//     return rotated;
// }

// console.log(rotateMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]));


// 4 misol

// function removeSpaces(str = "") {
//     let result = str.replace(/\s/g, '');
//     console.log(result)
// }

// console.log(removeSpaces("Hello World! How are you?"));

// 5 misol (Ustoz annagramma nimaligini tushunmadim)

// 6 misol

// function mostFrequentElement(arr) {
//     let nums = {};
//     let engKopNums = -1;
//     let result;

//     arr.forEach(element => {
//         nums[element] = (nums[element] || 0) + 1;
//         if (nums[element] > engKopNums) {
//             engKopNums = nums[element];
//             result = element;
//         }
//     });

//     return result;
// }

// console.log(mostFrequentElement([1, 3, 2, 1, 4, 1, 3, 1, 5, 1]));

// 7 misol

// function sumOfDigits(str = "") {
//     let sum = 0
//     for(let i = 0; i < str.length; i++){
//         if(!isNaN(parseInt(str[i])))
//         sum += parseInt(str[i])
//     }
//     return sum;
// }

// console.log(sumOfDigits("abc123def45")); 
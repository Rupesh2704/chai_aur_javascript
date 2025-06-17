// Note -> Map is use for transformation & it return the arr of same size  and filter is used for Filteration & length of the arr may or may not be change 

// const Mynum = [1, 2, 3, 4, 5]

// const newMynum = Mynum.map((num) => {
//     return num + 1;
// })
// console.log(newMynum)


// // Same thing using ForEach loop 
// const newArr = [];
//  Mynum.forEach((item)=>{
//     newArr.push(item+1)
//  } 
// )
// console.log(newArr)



// ◘ Chaining

const Mynum = [1, 2, 3, 4, 5]

const arr2 = Mynum.map((num)=> num*10).map((num)=> num + 1).filter((num)=> num>=50)
console.log(arr2)

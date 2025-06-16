// foreach loop 

const coding = ['js', 'cpp', 'java', 'Ruby']


// TYPE 1 
// coding.forEach(function (item) {
//     console.log(item)
// })


// TYPE 2
coding.forEach((item) => {
    console.log(item)
})


// TYPE 3
// coding.forEach((item , index , arr)=>{
//     console.log(item , index , arr)
// })

const myCoding = [
    {
        lang: "Java",
        lev: "1"
    },
    {
        lang: "Python",
        lev: "2"
    },
    {
        lang: "Cpp",
        lev: "3"
    }

]

console.log(myCoding)

myCoding.forEach((item) => {

    console.log(item.lang)
    console.log(item.lev)

})
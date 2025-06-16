const myObject = {
    js: "JavaScript",
    cpp: " c plus plus",
    rb: "Ruby"
};


for(const key in myObject){
    // console.log(`key ${key} and ${myObject[key]}`)

}

const arr = ['js' , 'java' , 'python' , 'cpp']

for(const i in arr){
    // console.log(arr[i])
    
}


// Apply for in loop on MAP
const map = new Map();
map.set('IN', 'INDIA')
map.set('USA', 'AMERICA')

for (const key in map) {
    console.log(key)
}
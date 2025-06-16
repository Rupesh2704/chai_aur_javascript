const myObject = {
    js: "JavaScript",
    cpp: " c plus plus",
    rb: "Ruby"
};

for (const i in myObject) {
    // console.log(`${i} and vlaue is ${myObject[i]}`);
}

const prog = ["Rupesh", "Prachi", "Nilima", "Shekhar"]

for (const i in prog) {
    // console.log(`${i} -> ${prog[i]}`);
}

const map = new Map();
map.set('R', 'Rupesh');
map.set('P', 'Prachi');
map.set('s', 'Shekhar');
map.set('n', ' Nilima');

// console.log(map)
// maps are not itratable with forin loop    
for(const key in map){
    console.log(key);
}
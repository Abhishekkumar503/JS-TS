let marks = [20, 40, 35, 12, 37, 100];

console.log(marks[2]);

seperation()

marks[3] = 14;
console.log(marks);

seperation()

console.log(marks.length);

seperation()

// Append at end
marks.push(76);
console.log(marks);

seperation()

// Delete from end
marks.pop();
console.log(marks);

seperation()

// Insert at front
marks.unshift(12);
console.log(marks);

seperation()

// Fetch index
console.log(marks.indexOf(100));

seperation()

// Check if available
console.log(marks.includes(120));

seperation()

// Slice
let submark = marks.slice(2, 5);
console.log(submark);

seperation()

let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}

console.log(sum);
// Inhanaced version of sum with FOR loop
let total = marks.reduce((sum,mark) => sum+mark,0)

console.log(total)

seperation()

// Even and odd
var score  = [12,13,14,17]
var even = []
for(let i = 0; i < score.length; i++)
{
    if(score[i] % 2 == 0)
        even.push(score[i])
}
console.log(even)

seperation()

//filter
var even1 = []
even1 = score.filter(s=>s % 2 == 0)
console.log(even1)

seperation()

// map
var even2 = []
even2 = score.map(s=>s * 3)
console.log(even2)

let total1 = score.reduce((sum,mark) => sum+mark,0)
console.log(total1)

seperation()

// In Chain
let result  =  score.filter(s => s % 2 ==0).map(s => s*3).reduce((s,m) => s+m , 0)
console.log(result)

seperation()

// Sorting a number or String
let fruits = ["Banana","Mango","Apple"]
console.log(fruits)
fruits.sort()
console.log(fruits)

seperation()

var s = [12,0o3,19,16,14]
console.log(s.sort((a,b) => a-b))

seperation()

// Reverse ( desc )
fruits.reverse()
console.log(fruits)

function seperation()
{
    console.log("**************************")
}

/*

35
**************************
[ 20, 40, 35, 14, 37, 100 ]
**************************
6
**************************
[
  20,  40, 35, 14,
  37, 100, 76
]
**************************
[ 20, 40, 35, 14, 37, 100 ]
**************************
[
  12, 20,  40, 35,
  14, 37, 100
]
**************************
6
**************************
false
**************************
[ 40, 35, 14 ]
**************************
258
258
**************************
[ 12, 14 ]
**************************
[ 12, 14 ]
**************************
[ 36, 39, 42, 51 ]
56
**************************
78
**************************
[ 'Banana', 'Mango', 'Apple' ]
[ 'Apple', 'Banana', 'Mango' ]
**************************
[ 3, 12, 14, 16, 19 ]
**************************
[ 'Mango', 'Banana', 'Apple' ]
abhishekkumar~$

*/
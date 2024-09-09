
// Question 1
console.log(" Even numbers....")
for (let i =0; i <=25 ; i ++)
    if(i%2 ===0)
        console.log(i)


console.log(" Squaring numbers....")
for (let i =0; i <=10 ; i ++) console.log(i*i)

    console.log(" Odd numbers....")
    for (let i =0; i <=25 ; i ++)
        if((i%2)-1 ===0)
            console.log(i)
    
    
//Question 2

let sum = 2
let prev_sum=1
for (let i =0 ; i <=10; i ++){
    console.log( sum +prev_sum)
    let temp_prev = sum
    sum = sum +prev_sum

    prev_sum= temp_prev


}

// Question 3

for (let i = 0 ; i <10; i ++){
    console.log( i* i)
}


for (let i = 0; i <10; i ++){
    for(let j = 0; j < 10; j ++){
        console.log(i*j)
    }
}
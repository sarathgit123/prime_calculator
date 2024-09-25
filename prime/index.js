let form = document.getElementById("form1");
form.addEventListener("submit", (e)=> {
    e.preventDefault();
    let p = document.getElementById("p1");
    let q1 = document.getElementById("q1");
    var num = Number(q1.value);
    
    prime = true;
    if(num>1){
        for(i=2; i<num; i++) {
            // var result = number%i;
            // console.log(result);
            if(num%i == 0) {
              prime = false;
              break;
            }
        }
    
         if(prime){
           p.innerHTML = num + " is prime";
        }
        else{
           p.innerHTML = num + " is not a prime";
        }
    }
    else{
        p.innerHTML ="Neither prime nor composite";
    }

} )
let form2 = document.getElementById("form2")
form2.addEventListener("submit", (e)=>{
    e.preventDefault();
    let p2 = document.getElementById("p2");
    let q2 = document.getElementById("q2");
    var n = Number(q2.value);
    let arr = [];  
let arr2 = [];// Array to store prime digits
sum = 0;
while (n !== 0) {
  let prime = true;  // Reset the prime flag for each digit
  let num = n % 10;  // Get the last digit

  if (num > 1) {  // Check if digit is greater than 1
    for (let i = 2; i < num; i++) {  // Check for factors
      if (num % i === 0) {
        prime = false;  // Not a prime number
        break;
      }
   
    }
    
    if (prime) {
      arr.push(num);  // Push the prime digit to the array
    }
    else{
        arr2.push(num);
    }
  }

  n = Math.floor(n / 10);  // Use Math.floor to get the integer part
}

for(i=0; i<arr2.length; i++){
    sum = sum + arr2[i];
}

p2.innerHTML = "Sum of non prime digits: " + sum;
    
})
let form3 = document.getElementById("form3");
form3.addEventListener("submit", (e)=>{
    e.preventDefault();
    let p3 = document.getElementById("p3");
    let p4 = document.getElementById("p4");
    let q3 = document.getElementById("q3");
    let n = Number(q3.value);
    p3.innerHTML = n;
let arr = [];  
let arr2 = [];// Array to store prime digits
sum = 0;
sum2 =0;
while (n !== 0) {
  let prime = true;  // Reset the prime flag for each digit
  let num = n % 10;  // Get the last digit

  if (num > 1) {  // Check if digit is greater than 1
    for (let i = 2; i < num; i++) {  // Check for factors
      if (num % i === 0) {
        prime = false;  // Not a prime number
        break;
      }
   
    }
    
    if (prime) {
      arr.push(num);  // Push the prime digit to the array
    }
    else{
        arr2.push(num);
    }
  }

  n = Math.floor(n / 10);  // Use Math.floor to get the integer part
}

for(i=0; i<arr.length; i++){
    sum = sum + arr[i];
}
for(i=0; i<arr2.length; i++){
    sum2 = sum2 + arr2[i];
}
p3.innerHTML = "Sum of non prime numbers: " + sum;
p4.innerHTML = "Sum of prime numbers: " + sum2;
// console.log("sum of non prime numbers " +sum2)
})
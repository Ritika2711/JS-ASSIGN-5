/*Q1. Find the Product. Write a program that 
takes an array as input from the user and find
 out the product of the elements. Note: You have
  to complete Find_Prod. No need to take any input.
 */
//  let num1 = prompt(" enter your number with space  ");
// let arr = num1.split(' ');
//  let product =1;
//  console.log("Answer1",arr);
//  function find_product(){
//      for (let i=0;i< arr.length;i++){
// product = product* arr[i];
// }
// // console.log(product);
//     return product;
// }
// console.log(find_product());

/*Find the Sum. Write a program which takes an 
array as input from the user and find out the 
sum of the array elements. Note: You have to
 complete Find_Sum. No need to take any input.
 */

//  let num2 = prompt("enter number with space");
//  let arr2 = num2.split(" ");

//  console.log(arr2);
//   function find_sum(){
//     let sum =0;
//     for (let k=0 ;k<arr2.length; k++){
//         sum = sum + (arr2[k]);
//     }
//     // console.log(sum)
//     return sum;
//  }
//  console.log(find_sum());

 /*Q3. Count Occurrences You are given an array A
  containing N integer elements and an integer K,
   and your task is to return the count of
    occurrences of K in array A. */

    // let arr3=[1,2,2,3,4,5,2,4,2,2];
    // let k =2;
    // let count =0;
    // for( let i=0 ; i<arr3.length;i++){
    //     if(arr3[i]===k){
    //         count++
    //     }
    // }console.log(count);

    /*Q4. Even Odd You are given an array A 
    containing N integer elements, and your task
     is to return an array B ((having a size equal
      to 22)), where B[0] contains the sum of all 
      even elements of array A and B[1] has the sum 
      of all odd elements of the array A. Note:
      You have to complete findEvenOdd function.
       No need to take any input. */

    //    let A =[2,3,4,4,6,27,6,5,6,7,2,4,3,5,6,7,5,4,6,68];
    //    let count_odd_even =[0,1];
    //     let sum=[0,1];

    //     for(let i=0;i<A.length;i++){
    //         if(A[i]%2==0){
    //          count_odd_even [0]++;
    //         sum[0]= sum[0]+ A[i];
    //          console.log(A[i], "is EVEN");
    //         }
    //         else{
    //             count_odd_even [1]++;
    //             sum[1] =sum[1]+A[i];
    //             console.log(A[i], "is odd");
    //         }
            
        
    //     }
    //     console.log(count_odd_even [0], "numbers are even")
    //     console.log(count_odd_even [1], "numbers are odd")
    //     console.log("sum of all even number is",sum[0])
    //     console.log("sum of all odd number is",sum[1])
    //     console.log(sum);
    
/*Q5. Find whether the number is present or not Write a program which
 takes an array as input from the user and a number. Check whether 
 the number is present or not. Note: You have to complete Find_Num.
  No need to take any input. */
// let A1 = [2,3,5,6,7,8,9];
// // let B1 = prompt("enter your number");
// let B2 = Number(B1);
// function find_num(){
//         if(A1.includes(B2)){
//             console.log(B2,"is included in A1")
//             return Yes;
//         }
//         else {
//             console.log(B2,"is not include in A1")
//         return No;
//       }
//      }
//     console.log(find_num());

    /*Q6. Higher Age
     You are given an array A containing the age of
     persons in your locality, and your task is to find and return an
      array containing the age of persons that are over 1818 
      (18(18 included)). Note: Also, in the output array, 
      the age should be in the same order as in the input array.
       You have to complete highAge function. No need to take any input. */

       let A3 = [24,34,25,65,45,36,3,67,54,63,3,6,12,14,15,18,18,14]
       let above18 =[0];
       let age_above18 =[];
       function highAge(){
        for(let i of A3){
            if( i >=18){
            above18++; // to count the no of age above or equal to 18
            age_above18.push(i); //To add element to an array
        }
        
    }
    console.log(above18," People have age above 18");
    return age_above18;

    
}
       console.log(highAge());

/*Q7. Increment the Array Elements 
You are provided an array of integers
 and you have to increment all array elements by 1 and then print whole 
 array. You have to complete Inc_Arr. No need to take any input.*/

 let A4 =[2,3,4,5,6,7,8,9,3,4,54,56,56,34]
 function Inc_arr(){
    let inc_i =[];
for (i of A4){
    i++;
    inc_i.push(i);
}
return inc_i;
}
console.log("Original Array",A4)
console.log("Incremented array",Inc_arr())

// ________________0r________________________________

// function Inc_arr(){
//     let inc_i =[];
// for (let i=0; i<A4.length;i++){
//     A4[i]++;
//     inc_i.push(A4[i]);
// }
// return inc_i;
// }
// console.log("Original Array",A4)
// console.log("Incremented array",Inc_arr())


/*Q8. Pass or Fail
 You are given an array A containing the maths marks
 of students in your class, and your task is to determine if all the
  students pass in your class or not. A student is declared pass if his
   maths marks are greater than or equal to 32. If all the students 
   pass in your class, return "YES" (without quotes); otherwise, return
   "NO" (without quotes). Note: You have to complete isAllPass function.
    No need to take any input.
 */

let A5=[34,32,45,43,42,23,34,45,43,54,32,43,45]
function isAllPass(){
    for(let i=0; i<A5.length ; i++){
        if(A5[i]<32){
            return "NO";
        }
    }
    return "YES";
    }

console.log(isAllPass());



/*Q9. Unique Color Shirt
 Prepbuddy is very tasteful of clothes. He has N numbers of shirts
  hanging in the hanger in his wardrobe. Prepbuddy likes to wear different 
  colored clothes. So, whenever he see there are two or more shirts with 
  the same color, he removes all the shirt of that color from his
   wardrobe. Now, he wants to know how many M unique color shirts
    are left in the wardrobe. Prepbuddy wants you to find M.
     Note: As there are many shades of a color so consider integers
      as a color name. i.e, color of shirt is 0,1,2, … , N. */

let M = 10;
let N =[2,3,4,4,5,6,6,7,6,7,8];




/*Q10. Min and Max Congratulations on making up to this question.
  Let us give you a fairly simple array problem to solve. If you know 
how to iterate through the array, you will easily be able to solve this. 
The problem statement is simple- given N elements, find the minimum 
 and maximum numbers among those elements */

 let Arr =[45,34,56,23,12,67,77,767,53,76,45,88,34];
 let max = Arr[0];
 let min = Arr[0];
 function find_max_min(){
    for (let i=0; i<=Arr.length; i++){
       if(Arr[i]>max){
           max = Arr[i];
    }
    else if  (Arr[i] < min){
        min = Arr[i];
    }
}
return {max,min};
 }
 console.log(find_max_min())




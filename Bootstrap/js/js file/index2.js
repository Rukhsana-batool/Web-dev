

// let oper="-";
// switch (oper) {
//     case "+":
//     console.log("add");
    
//         break;
//     case "-":
//     console.log("sub");
//        break;
//     default:
//      console.log("invalid");
     
// }
// let age=29
// let a=age>=18?"can vote":"cannot cost vote"
// console.log(a);



// // Loop
// // type
// // for
// // while
// // do while
// // for each 
// // for in 
// // for at 
// // map 
// // reduce 
// // filter 


// // for(initilization , condition, incri/dec){
// //     block of code
// // }


// for(let i=1;i<0;i++){
//     console.log(`2 X ${i} = ${i*2}`);
//     console.log("2" +"");
    
    
// }
// let b=1
// let c=1
// let sum=c+ ++c
// console.log(sum);
// let sm=b+b++
// console.log(sm);



// // Array
// let arr1=["admin","teacher","student"];
// console.log(arr1[9]);
// console.log(arr1[1]);
// arr1.push("Editer")
// arr1.push("staff")
// console.log(arr1);
// arr1.pop()
// console.log(arr1);
// arr1.shift()
// console.log(arr1);
// arr1.unshift("id")
// console.log(arr1);

// Function
// function run(){
//     console.log("backend is runing");
    
// }
// run()
// let runing=()=>{


//       console.log("API is runing");
//       }
//       runing()
//       let sum=(a,b)=>{
// console.log(a+b);

//       }
//       sum(2,4)
//       let sums=(a,b)=> console.log(a+b);
//       sum(2,3)
//       let sm=(a,b)=>{
//         return a+b
//       }
      
//       console.log(sm=(2,3));
//       let sms=(a,b)=> a+b;
//       console.log(sms(1,1));

//       let sq=a=> a*a;
//       console.log(sq(2));
      
//       let arr=["iphone", "techno","opo","infinix ","redme"];
//       let product=arr.map(product=>product)
//       console.log(product);
//       let arr1=[1100,200,400,300,2000]
//       let  filt=arr1.filter(index=>index>400);
//       console.log(filt);
//       let search=arr.filter(search=>search.includes("opo"))
//       console.log(search);
//        let arr=["iphone", "techno","opo","infinix ","redme"];


//    let find=arr.find(find=>find=="Iphone")
//    console.log(find);




//    let arr1=[200 , 300 ,400,500]
// let reduce=arr1.reduce((sum ,price)=>sum+price,0)
// console.log(reduce);


//       Object
//     let obj={
//         name:"sara",
//         age:18,
//     location:{
//         zipcode:16100,
//         steet:"XYZ123",
//         Country:"Pakistan",
//         }
//     }
//     console.log(obj.name);
//     console.log(obj);
    
//     console.log(obj.location.country);
    
    
//     let obj2={
//         name:"Rukhsana",
//         age:"19",
//         country:["PK","IN","US","UK"],
//         province:{
//             state:[
//                 {
//                     state:{
//                         provinces:["Lahore","GB"],
//                         zipcode:[112200,16602],
//                         steet:"abcd1122"
//                     }
//                 }
//             ]
//         }
//     }
//     console.log(obj2);
//      let obj3={
//         name:"sara",
//         age:20,
//         address:"bcs",
//         zipcode:1234
//      }
//      console.log(obj3.name);
//       let {name, age, address, ...seprat}=obj3;
//       console.log(name);
//         console.log(age);
//           console.log(seprat);






// HOME TASK



// let obj={
//     name:"sara",
//      age:18,
//      location:{
//         zipcode:22443,
//         steet:"abc123",
//         country:"Pakistan"
//      }
// }
// console.log(obj.name);
// console.log(obj);
// console.log(obj.location.country);


// let num = 1234;
// let sum=0;
// while (num>0){
//     let digit =num %10;
//     sum=sum+digit;
//     num= Math.floor(num/10);
// }
// console.log("sum of digits:" ,sum);


// let num=5678;
// let sum=0;
// let str =num.toString();
// for (let i=0; i<str.length; i++){
//     sum+= Number(str[i]);
// }
// console.log("sum of digits:",sum);



// let num = Number(prompt("Enter a number:"));
// let sum = 0;
// while(num > 0){
//     let digit = num % 10;
//     sum += digit;
//     num = Math.floor(num / 10);

// } 
// console.log("sum of digits:" ,sum);


// let str ="racecar";
// let isPalindrome =true;
// for (let i=0; i<str.length / 2; i++){
//     if(str[i] !== str[str.length -1 -i]) {
//         isPalindrome =false;
//         break;
//     }
// }
// if(isPalindrome){
//     console.log(str + "is a palindrone");
    
// }
// else{
//     console.log(str + "is not palindrome");
    
// }


// const student = {
//     name: "sara",
//     age: 21,
//     course: "IT",
    
//     display: function(){
//     console.log(this.name + " is studying " + this.course);
    
// }
// };
// student.display(); 



// function add (x){
//     return x+2
// }

// function mul (x){
//     return x * 3
// }
// function compose(add, mul){
//     return function(x){
//      return add(mul(x));
//     };
// }
// var res = compose(add, mul)(4)
// console.log(res);

//    setTimeout(function, 1000)
// setTimeout(()=>{
// console.log("setting out function run");

// },1000)
// console.log("outer function run");

// function logout(){
//     console.log("logout");
    
// }
// setTimeout(logout,2000);





function logout1(){
    console.log("logout1");
    
}
setTimeout(logout1,6000);

function logout2(){
    console.log("logout2");
    
}
setTimeout(logout2,3000);

function logout3(){
    console.log("logout3");
    
}
setTimeout(logout3,5000);

function logout4(){
    console.log("logout4");
    
}
setTimeout(logout4,2000);

function logout5(){
    console.log("logout5");
    
}
setTimeout(logout5,4000);
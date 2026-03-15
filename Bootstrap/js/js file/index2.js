

let oper="-";
switch (oper) {
    case "+":
    console.log("add");
    
        break;
    case "-":
    console.log("sub");
       break;
    default:
     console.log("invalid");
     
}
let age=29
let a=age>=18?"can vote":"cannot cost vote"
console.log(a);



// Loop
// type
// for
// while
// do while
// for each 
// for in 
// for at 
// map 
// reduce 
// filter 


// for(initilization , condition, incri/dec){
//     block of code
// }


for(let i=1;i<0;i++){
    console.log(`2 X ${i} = ${i*2}`);
    console.log("2" +"");
    
    
}
let b=1
let c=1
let sum=c+ ++c
console.log(sum);
let sm=b+b++
console.log(sm);



// Array
let arr1=["admin","teacher","student"];
console.log(arr1[9]);
console.log(arr1[1]);
arr1.push("Editer")
arr1.push("staff")
console.log(arr1);
arr1.pop()
console.log(arr1);
arr1.shift()
console.log(arr1);
arr1.unshift("id")
console.log(arr1);

Function
function run(){
    console.log("backend is runing");
    
}
run()
let runing=()=>{


      console.log("API is runing");
      }
      runing()
      let sum=(a,b)=>{
console.log(a+b);

      }
      sum(2,4)
      let sums=(a,b)=> console.log(a+b);
      sum(2,3)
      let sm=(a,b)=>{
        return a+b
      }
      
      console.log(sm=(2,3));
      let sms=(a,b)=> a+b;
      console.log(sms(1,1));

      let sq=a=> a*a;
      console.log(sq(2));
      
      let arr=["iphone", "techno","opo","infinix ","redme"];
      let product=arr.map(product=>product)
      console.log(product);
      let arr1=[1100,200,400,300,2000]
      let  filt=arr1.filter(index=>index>400);
      console.log(filt);
      let search=arr.filter(search=>search.includes("opo"))
      console.log(search);
       let arr=["iphone", "techno","opo","infinix ","redme"];
   let find=arr.find(find=>find=="Iphone")
   console.log(find);




   let arr1=[200 , 300 ,400,500]
let reduce=arr1.reduce((sum ,price)=>sum+price,0)
console.log(reduce);


      
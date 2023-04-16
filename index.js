// //function pow(x, n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;//


1.
// function printFullName (){
//     let firstName = 'Gulnar'
//     let lastName = 'Mammadova'
//     
//     let fullName = firstName  + lastName;
//     return fullName;
// }
// console.log(printFullName());


// function perimeterRectangle(a, b) {
//     let perimeter = 2 * (a + b);
//     return perimeter;
//   }
console.log(perimeterOfRectangle());
const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }
  
  console.log(printFullName('Asabeneh', 'Yetayeh'))

  let weight =70
let height = 174

function bodyMassIndex (){
    let weight =70
    let height = 174
    
   return  (weight/((height/100)*(height/100)))
};
console.log(bodyMassIndex(weight,height));

let BMI = bodyMassIndex(weight,height);

if(BMI<18.5){
    console.log("Underweight")}
else if (BMI>=18.5 & BMI<=24.9){
    console.log("Normal Weight")
}
else if (BMI>=25 & BMI<=29.9){
    console.log("Normal Weight")
}
else  {
    console.log("Obese")
}



function findMax(numbers){
   let max=numbers[0]

   for( let i=0;i< numbers.length;i++){ 
       if (numbers[i]>max){
           max=numbers[i];
       }

else if (numbers[i]<min){

    min=numbers[i];
}
   
   Console.log("Max:${max}")
}
  
























}

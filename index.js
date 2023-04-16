 function printFullName (){
    let firstName = 'Gulnar'
    let lastName = 'Mammadova'
   
   let fullName = firstName  + lastName;
  return fullName;
 }
 console.log(printFullName())







  const printFullNamewithparam = (firstName, lastName) => {
      return `${firstName} ${lastName}`;
    }

  
    console.log(printFullNamewithparam('Gulnar', 'Mammadova'))





  function perimeterRectangle(a, b) {
     let perimeter = 2 * (a + b);
     return perimeter;
 }
  console.log(perimeterOfRectangle(3,4));






  function bodyMassIndex (weight,height){
          let weight =a
          let height = b
        
        return  weight/(height*height);
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





 function findMax(a,b,c){

 if (a>=b && a>=c){

     Console.log("a maximumdur")
 }
else if (b>=a && b>=c){

         Console.log("b maximumdur")
     }
     else{
      Console.log( "c maximumdur")
     }

 
    }
  

  function pow(x, n) {
       let result = x**n;
      return result;
 }
 console.log(pow(3,2))


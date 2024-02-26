//a.Get all the countries from the Asia continent /region using the Filter function

// const req = new XMLHttpRequest();
// req.open("GET","https://restcountries.com/v3.1/all");
// req.send();
// req.onload = function() {
//     const result = JSON.parse(this.response);
//      result.filter((countries) => {
//            return countries.region ==="Asia";
//      })
//      console.log(result);
// }

//b.Get all the countries with a population of less than 2 lakhs using Filter function

// var request1 = new XMLHttpRequest();
// request1.open("GET","https://restcountries.com/v2/all");
// request1.send();
// request1.onload=function(){
//     var result1=JSON.parse(request1.response);
//     const population = result1.filter((element)=>{
//         return element.population<200000;
//     })
// console.log(population);
// }

//c.Print the following details name, capital, flag using forEach function

// var requestt = new XMLHttpRequest();
// requestt.open("GET","https://restcountries.com/v2/all");
// requestt.send();
// requestt.onload=function(){
//     var result2=JSON.parse(requestt.response);
//     result2.forEach(element => {
//     console.log(element.name);
//         console.log(element.capital);
//         console.log(element.flag); 

//    });
// }

//d.Print the total population of countries using reduce function

// var reques = new XMLHttpRequest();
// reques.open("GET","https://restcountries.com/v2/all");
// reques.send();
// reques.onload=function(){
//     var result3=JSON.parse(reques.response);
//     var total = result3.reduce((acc,curr) =>{
//         return acc+curr.population;
//     } ,0);

//     console.log(total);
 
// }


//e.Print the country which uses US Dollars as currency

var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v2/all");
req.send();
req.onload=function(){
    var result4=JSON.parse(req.response);
   var currency = result4.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
        console.log(currency);
    }

    

 
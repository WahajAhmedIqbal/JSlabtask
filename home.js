// var sumnum = parseInt(prompt("Enter number 1 : "));
// var sumnum2 = parseInt(prompt("Enter number 2 : "));
// var sumresult = (sumnum + sumnum2);
// if (sumresult === 5050)
// {
//     console.log("try again");
// }
// else
// {
//     console.log(sumresult);
// }
// ///////////////////////////////////////// ASSIGNMENT # 2 
// var numSeries = prompt("Enter C for counting \n R for Revers count \n E for Even number \n O for odd \n S for series : ");
// var numSer = numSeries.toLowerCase();
// if (numSer === "c")
// {
//     for ( i = 1; i <= 15; i++) {
//         console.log(i);
//     }
// }
// else if (numSer === "r" )
// {
//     for ( i = 10; i >= 1; --i) {
//         console.log(i);
        
//     }
// }
// else if (numSer === "e" )
// {
//     for (let i = 0; i <= 20; i++) {
//         if ( i % 2 == 0)
//         {
//             console.log(i);
//         }
//     }
// }
// else if (numSer === "o" )
// {
//     for (let i = 1; i <= 20; i++) {
//         if (i % 2 != 0)
//         {
//             console.log(i);
//         }
//     }
// }
// else if (numSer === "s" )
// {
//     for (let i = 1; i <= 20; i++) {
//         if ( i % 2 == 0)
//         {
//             console.log(i+"K");
//         }
//     }
// }

//////////////////////////////////////////////// ASSIGNMENT # 3
// var i,j;
// for ( i = 1; i <= 5; i++) {
//     for ( j = i; j <= 5; j++) {
//         document.write( j +" ");
//     }
//         document.write("<br/>");
// }

//////////////////////////////////////////////// ASSIGNMENT # 4
// var word = prompt("enter ");
// var wrd = word.toLocaleLowerCase();
// console.log(wrd)

/////////////////////////////////////////////// ASSIGNMENT # 5
// function mainfun(num1 , num2 , operator) {
//     if (operator === "+") {
//         console.log(num1 + num2);        
//     }
//     else if (operator === "-") {
//         console.log(num1 - num2);
//     }
//     else if (operator === "*") {
//         console.log(num1 * num2);
//     }
//     else if (operator === "/") {
//         console.log(num1 / num2);
//     }
// }
// var nm1 = parseInt(prompt("Enter Number 1 "));
// var nm2 = parseInt(prompt("Enter Number 2 "));
// var rslt = prompt("Operator");

// var result = mainfun( nm1 , nm2 , rslt);
// console.log(result);

/////////////////////////////////////////////// ASSIGNMENT # 6

var sweetlist = ["cake”, “apple pie”, “cookie”, “chips”, “patties"];
var sweetsearch = prompt(`Search from 'cake', “apple pie”, “cookie”, “chips”, “patties" `);
var ssearch = sweetsearch.toLocaleLowerCase();
var fnd = ssearch.indexOf(sweetlist);
if(sweetlist ===  fnd )
    {
        console.log("testing");
    }
else
    {
        console.log("test");
    }
//   Current day and time//


setInterval(this.check1, 1000)

function check1() {
    let date = new Date();

    let arr = [
        "Sunday",
        "monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    var hours = date.getHours();

    var format = hours >= 12 ? "pm" : "am";

    hours = hours % 12;

    let weekday = arr[date.getDay()];

    let aa = `${"Today is:"} ${weekday}<br />${"Current Time is"} 
    ${":"} ${hours}${format} ${":"} ${date.getMinutes()}m 
    ${":"} ${date.getSeconds()}s`;

    var a = (document.getElementById("1").innerHTML = aa);

}


// /Current Date//

setInterval(check2, 1000)

function check2() {
    let newDate = new Date();

    document.getElementById(
        "4"
    ).innerHTML = `${newDate.getMonth()} ${"/"} ${newDate.getDate()}  ${"/"}  ${newDate.getFullYear()}`;
    document.getElementById(
        "3"
    ).innerHTML = `${newDate.getDate()}  ${"-"} ${newDate.getMonth()} ${"-"} ${newDate.getFullYear()}`;
};


//////Area of the Traingle////


const cal = () => {
    a = Number(document.getElementById("area1").value);
    b = Number(document.getElementById("area2").value);
    c = Number(document.getElementById("area3").value);


    let s = (a + b + c) / 2

    let A = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));

    document.getElementById("resultArea").innerHTML = A.toFixed(2)

}


//Rotatate the String ///////

let word = "Saylani";

let arr = word.split('');


function rotate() {

    let word1 = arr.pop();
    let word2 = arr.unshift(word1);
    let word3 = arr.join('');

    document.getElementById("rotate").innerHTML = word3;



}

setInterval(rotate, 1000)




/////Leap Year////

function LeapYear() {
    var year = document.getElementById("leapYear").value



    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        document.getElementById("leap").innerHTML = year + ' is a leap year';
    } else {
        document.getElementById("leap").innerHTML = year + ' is not a leap year';;
    }
}

// const year = prompt('Enter a year:');




////Find Sunday between 2014 to 2050////



function findSunday() {
    for (var year = 2014; year <= 2050; year++) {
        var date = new Date(year, 0, 1);

        var d = date.getDay()
        if (date.getDay() === 0)
            document.getElementById("sunday").innerHTML = "1st January is being a Sunday  " + year;

    }
}





//////Random Number/////


function random() {
    var a = Math.floor((Math.random() * 10) + 1);
    var b = document.getElementById('RandomNumber').value;
    var result = document.getElementById('random');

    if (b == a) {
        result.innerHTML = '😃 yaaahoo Matched';
    } else {
        result.innerHTML = ' 🥺 Better Luck next Time';
    }

}




////Day Left until next Aug 2014///






////// Multipication and Division//////

function calculate() {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value

    let mod = document.getElementById("operation").value

    document.getElementById('result').innerHTML = eval(num1 + mod + num2);
}






///////////// Convert Temperatures//////



function degree() {

    let degree = document.getElementById("degree").value
    let select = document.getElementById("selectDegree").value

    let c = degree * (9 / 5) + 32;

    let f = (degree - 32) * 5 / 9;


    if (select == "c") {

        document.getElementById("degreeResult").innerHTML = c

    } else {
        document.getElementById("degreeResult").innerHTML = f

    }


}


////// Sum of two Number/////




function sumOf() {
    let sum1 = Number(document.getElementById("sum1").value);
    let sum2 = Number(document.getElementById("sum2").value);


    let values = sum1 + sum2

    if (sum1 == sum2) {
        let sumResult = values * 3
        document.getElementById("sumResult").innerHTML = sumResult
    } else {
        sumResult = sum1 + sum2

        document.getElementById("sumResult").innerHTML = values


    }



}








///// <!-- Given Number Within 20 of 400 -->////





function number() {
    let givenNumber = document.getElementById("givenNumber").value;


    if (givenNumber >= 20 && givenNumber <= 100) {
        console.log("true")
    } else { console.log("false") }

}



////Largest of three given numbers////


function largestOf() {
    let L1 = document.getElementById("L1").value
    let L2 = document.getElementById("L2").value
    let L3 = document.getElementById("L3").value

    if (L1 > L2 || L1 > L3) {
        console.log(L1)
    } else if (L2 > L1 || L2 > L3) {
        console.log(L2)
    } else {
        console.log(L3)
    }

}



/////Capitilized Each Word/////



function capilize() {

    let text = document.getElementById("text").value
    let words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    document.getElementById("capilizeResult").innerHTML = words.join(" ");


}




///////////// convert a given days to hours and minutes.//////////




function givenDays() {

    let givenDays = Number(document.getElementById("givenDays").value)


    let days = givenDays * 24 + `${" hours"}`


    document.getElementById("daysReslut").innerHTML = days

}


///////////// reverse Array //////////

function reverseArray() {
    arr = [1, 2, 3, 4];
    arr12 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr12.push(arr[i]);
    }
    document.getElementById("ReverseResult").innerHTML = arr12;

}



//// find the larger value///

let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(numbers);






/////////// kth greatest element /////////

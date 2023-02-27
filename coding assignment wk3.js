// 1
     const ages = [3, 9, 23, 64, 2, 8, 28, 93];
    console.log(ages);

    ages[ages.length - 1] = ages[ages.length - ages.length]; //1a.

    ages.push(58); // added new number 58 to array, 1b.
    console.log(ages);
    //1c.adding loop to calculate average
    function average(array) {
     var sum = 0;
    for (let i = 0; i < array.length; i++) {
       sum += array[i];
     }
      return sum / array.length;
    }
    console.log(average([3, 9, 23, 64, 2, 8, 28, 3, 58]));

    //2
     var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
    console.log(names);
    //2a.
    avg = ages.join("").length / ages.length;
    console.log(avg);
    //2b.
    var allTheNamesTogether = "";
    for (let i = 0; i < names.length; i++) {
    allTheNamesTogether += names[i] + " ";
    }
    console.log(allTheNamesTogether);
    3
     let lastElement = array[array.length - 1];

    4
    alert(array[0]);
    5
    let nameLengths = new let[names.length]();
     for (let i = 0; i < names.length; i++) {
     nameLengths[i] = names[i].length();
     }

    //6
     sum = 0;
     for (let i = 0; i < nameLengths.length; i++) {
       sum += nameLengths[i];
      }
     console.log("The sum of all lengths in nameLength[] = " + sum);
    7
    console.log("Hello, Hello, Hello");
    //8
     let firstName = "Francisco";
     let lastName = "Zuniga";
     console.log(firstName + " " + lastName);
    //9
     function arrayOfNumbers(number) {
      if (number > 100) {
        return true;
      }
     }
    10
    const myArray = [4, 8, 15, 16, 32, 42];
    const arrAvg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

    //11
  const myOtherArray = [2, 4, 6, 8, 10];
    const myotherOtherArray = [1, 3, 5, 7, 9];

    function calculateAverageOfArray(myOtherArray) {
     var total = 0;
    var count = 0;
    jQuery.each(arry, function (index, value) {
    total = +value;
     count++;
    });

    return total / count;
    }

    //12

    function willBuyDrink(isHotOutside)

    //13 I need to know what my current temp is to Celsius.
    //i will have to convert from Fahrenheit to Celsius.
    // formula is (Farenheit temp - 32) * 5/9

    function convertToCelsius(fahrenheitNumber) {
      return (fahrenheitNumber - 32) * (5 / 9);
    }

    var theTemp = convertToCelsius(60);
    console.log(theTemp);
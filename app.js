// Chapter 31 (DATE METHODS)
// Q1
// var date = new Date()
// console.log(date)
// Q2
// var mounth = new Date().getMonth()
// var mounthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
// console.log("curent mounth is:",mounthName[mounth]);
// Q3
// var day = new Date().getDay()
// var dayName=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// console.log(dayName[day]);
// Q4
// var today = new Date();
// var dayofWeek = today.getDay()
// if(dayofWeek===0 || dayofWeek===6){
//     alert("Today is fun day")
// }
// else{
//     alert("Today is not fun day")
// }
// Q5
// var date = new Date()
// var dateofMounth = date.getDate()
// if (dateofMounth<16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last fifteen days of the month")
// }
// Q6
// var time = new Date()
// var miliSecund = time.getTime()
// var minutes = miliSecund/1000*60
// document.write(`Current Date: ${time} <br>`)
// document.write (`Elapsed milisecund since Jan. 1, 1970 ${miliSecund}<br>`)
// document.write (`Elapsed minutes since Jan. 1, 1970 ${minutes}`)
// Q7
// var hours = new Date()
// var hoursIn12Format = hours.getHours()
// if(hoursIn12Format<12){
//     alert("its PM")
// }
// else{
//     alert("its AM")
// }
// Q8
// const laterDate = new Date("31/12/2020"); 
// console.log(laterDate);

// Q9
// var ramadanStart = new Date("18 June 2015"); 
// var today = new Date();
// var timeDifference = today - ramadanStart;
// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert("Number of days passed since 1st Ramadan: " + daysPassed);
// Q10
// var  referenceDate = new Date(2015, 0, 1); 
// var  today = new Date();
// var  timeDifference = today - referenceDate;
// var  secondsElapsed = Math.floor(timeDifference / 1000);
// document.write("Seconds that have elapsed since the beginning of 2015: " + secondsElapsed);
// Q11
// var  currentDate = new Date();
// var  currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// document.write("Updated date and time (one hour ahead): " + currentDate);
// Q12
// var  currentDate = new Date();
// var  currentYear = currentDate.getFullYear();
// currentDate.setFullYear(currentYear - 100);
// alert("Date 100 years back: " + currentDate);
// Q13
// var userAge= +prompt("Enter your age")
// var current = new Date().getFullYear()
// var userBirthYear = current - userAge
// alert("Your birth year is: " + userBirthYear)
// Q14
// var  customerName = "John Doe"; 
// var  currentMonth = new Date().toLocaleString('default', { month: 'long' });
// var  numberOfUnits = 350;
// var  chargesPerUnit = 12.5; 
// var  latePaymentSurcharge = 200; 

// var  netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
// var  grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);

// document.write("<h2>K-Electric Bill</h2>");
// document.write("<p><b>Customer Name:</b> " + customerName + "</p>");
// document.write("<p><b>Month:</b> " + currentMonth + "</p>");
// document.write("<p><b>Number of Units:</b> " + numberOfUnits + "</p>");
// document.write("<p><b>Charges per Unit:</b> " + chargesPerUnit + "</p>");
// document.write("<p><b>Net Amount Payable (within Due Date):</b> " + netAmountPayable + "</p>");
// document.write("<p><b>Late Payment Surcharge:</b> " + latePaymentSurcharge + "</p>");
// document.write("<p><b>Gross Amount Payable (after Due Date):</b> " + grossAmountPayable + "</p>");

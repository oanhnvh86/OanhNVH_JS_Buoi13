/**
 * CALCULATE EMPLOYEE'S SALARY
 * 
 * Block 1: Input
 *  + salaryPerDay
 *  + workingDays
 * --------------
 * Block 2:
 *  B1: Create UI
 *  B2: Create Function, Initialize Event
 *  B3: Get Form Values
 *  B4: Set a Formula
 *      totalSalary = salaryPerDay * workingDays
 *  B5: Display the result to UI
 * --------------
 * Block 3: 
 *  + totalSalary
 * 
 */
// C1
function calEmployeeSalary(){
    // console.log("Hello World");
    var salaryPerDay = 100000;

    var workingDays = Number(document.getElementById("inpWorkingDay").value);
    
    var totalSalary = salaryPerDay * workingDays
    
    document.getElementById("txtCalSalary").innerHTML = "Salary Per Day: " + salaryPerDay.toLocaleString()+ "<br>Your Working Days: "+workingDays.toLocaleString() +"<br> Your Total Salary: " +totalSalary.toLocaleString();
}

document.getElementById("btnCalSalary").onclick = calEmployeeSalary;

// C2
function calEmployeeSalary2(){
    // console.log("Hello World");
    var salaryPerDay = Number(document.getElementById("inpsalaryPerDay2").value);

    var workingDays = Number(document.getElementById("inpWorkingDay2").value);
    
    var totalSalary = salaryPerDay * workingDays
    
    document.getElementById("txtCalSalary2").innerHTML = "Salary Per Day: " + salaryPerDay.toLocaleString()+ "<br>Your Working Days: "+workingDays.toLocaleString() +"<br> Your Total Salary: " +totalSalary.toLocaleString();
}

document.getElementById("btnCalSalary2").onclick = calEmployeeSalary2;
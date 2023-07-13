/**
 * CALCULATE AREA AND PERIMETER OF RECTANGLE
 * 
 * Block 1: Input
 *  + inpLength
 *  + inpWidth
 * --------------
 * Block 2:
 *  B1: Create UI
 *  B2: Create Function, Initialize Event
 *  B3: Get Form Values
 *  B4: Set a Formula
 *      area = salaryPerDay * workingDays
 *      perimeter = (salaryPerDay + workingDays)*2
 *  B5: Display the result to UI
 * --------------
 * Block 3: 
 *  + area
 *  + perimeter
 * 
 */

function calAreaPeri(){
    var inpLength = Number(document.getElementById('inpLength').value);
    var inpWidth = Number(document.getElementById('inpWidth').value);
    var area = inpLength * inpWidth;
    var perimeter = (inpLength + inpWidth)*2;
    document.getElementById('txtAreaPeri').innerHTML = 'Area: ' + area.toLocaleString()+'<br>'
                        +'Perimeter: '+ perimeter.toLocaleString();
}

document.getElementById('btnAreaPeri').onclick = calMath;


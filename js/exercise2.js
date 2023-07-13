/**
 * CALCULATE THE MEAN
 * 
 * Block 1: Input
 *  + inpNumber1
 *  + inpNumber2
 *  + inpNumber3
 *  + inpNumber4
 *  + inpNumber5
 * --------------
 * Block 2:
 *  B1: Create UI
 *  B2: Create Function, Initialize Event
 *  B3: Get Form Values
 *  B4: Set a Formula
 *      meanNumber = (inpNumber1+inpNumber2+inpNumber3+inpNumber4+inpNumber5)/5
 *  B5: Display the result to UI
 * --------------
 * Block 3: 
 *  + meanNumber
 * 
 */

function calMean(){
    var inpNumber1 = Number(document.getElementById('inpNumber1').value);
    var inpNumber2 = Number(document.getElementById('inpNumber2').value);
    var inpNumber3 = Number(document.getElementById('inpNumber3').value);
    var inpNumber4 = Number(document.getElementById('inpNumber4').value);
    var inpNumber5 = Number(document.getElementById('inpNumber5').value);
    
    var meanNumber = (inpNumber1+inpNumber2+inpNumber3+inpNumber4+inpNumber5)/5;
    document.getElementById('txtMean').innerHTML = 'Mean : '+meanNumber.toLocaleString();
}

document.getElementById('btnMean').onclick = calMean;

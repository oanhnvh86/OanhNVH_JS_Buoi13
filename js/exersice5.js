/**
 * SUM THE NUMBER WITH 2 DIGITS
 * 
 * Block 1: Input 
 *  + inpNumber
 * --------------
 * Block 2:
 *  B1: Create UI
 *  B2: Create Function, Initialize Event
 *  B3: Get Form Values
 *  B4: Set a Formula
 *      ten = Math.floor(inpNumber/10)
 *      unit = inpNumber%10
 *  B5: Display the result to UI
 * --------------
 * Block 3: 
 *  + sumNumber
 * 
 */
function calSum2digits(){
    // console.log('Hello World')
    var inpNumber = Number(document.getElementById('inpNumberSum').value);
    var ten = Math.floor(inpNumber/10) ; 
    var unit = inpNumber%10  ; 
    var sumNumber = (ten+unit);
    document.getElementById('txtSum').innerHTML = 'Sum: '+sumNumber.toLocaleString();
}

document.getElementById("btnSum").addEventListener("click", calSum2digits);

/*Extra: Sum the number with 5 digits
function calSum5digits(){
    var inpNumber = Number(document.getElementById('inpNumber').value);
    var t1 = Math.floor(inpNumber/10000) ; //5
    var temp1 = inpNumber%10000 ;//5670
    var t2 = Math.floor(temp1/1000)  ; //5
    var temp2 = temp1%1000 ; //670
    var t3= Math.floor(temp2/100) ;//6
    var temp3 = temp2%100  ;//70
    var t4 = Math.floor(temp3/10) ; //7
    var t5 = temp3%10 ;//0

    var averageNumber = 0
    averageNumber = t1+t2+t3+t4+t5;
    document.getElementById('txtSum').innerHTML = 'Sum: '+averageNumber.toLocaleString();
}

document.getElementById('btnSum').onclick = calSum5digits;
*/
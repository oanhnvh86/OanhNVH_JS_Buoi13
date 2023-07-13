/**
 * CURRENCY EXCHANGE
 * 
 * Block 1: Input
 *  + inpMoney
 * --------------
 * Block 2:
 *  B1: Create UI
 *  B2: Create Function, Initialize Event
 *  B3: Get Form Values
 *  B4: Set a Formula
 *      changeMoney = inpMoney * 23500
 *  B5: Display the result to UI
 * --------------
 * Block 3: 
 *  + averageNumber
 * 
 */

function calCurrencyChange(){
    var inpMoney = Number(document.getElementById('inpMoney').value);
    var changeMoney = inpMoney * 23500
    // changeMoney = new Intl.NumberFormat('en-IN',{ style: 'currency', currency: 'VND' }).format(number)
    document.getElementById('txtCurrencyChange').innerHTML = 'USD - VND: '
                        +changeMoney.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}

document.getElementById('btnCurrencyChange').onclick = calCurrencyChange;

// console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number));
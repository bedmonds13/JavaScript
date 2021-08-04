window.onload = function()
{
    var btn = document.getElementById('calculatebutton');
    btn.onclick = calculateTip;
}
function calculateTip()
{
    var mealTotal = document.getElementById("mealtotal");
    var tipAmount = document.getElementById("tipamount");
    
    var newTip = calculate(+mealTotal.value, +tipAmount.value).toFixed(2);
    console.log(newTip);
    if(newTip != null)
     document.getElementById("calculation-display").innerHTML ="$" + newTip;
    else
    {
        document.getElementById("calculation-display").innerHTML = "Sorry! Couldn't calculate tip for you.";
    }
}

function calculate(total, tip)
{
    var computed_tip = total * tip;
    return computed_tip;
}
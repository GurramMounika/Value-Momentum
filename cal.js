function dis(val)
{
console.log(val)
document.getElementById("result").value+=val
}
function solve()
{

var x = document.getElementById("result").value
var y = eval(x)
console.log(y)
document.getElementById("result").value = y
}
function clr(){
document.getElementById("result").value = ""
}
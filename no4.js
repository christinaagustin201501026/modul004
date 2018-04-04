var heightJohn = 190;
var heightJesie = 157;
var ageJohn = 26;
var ageJesie = 29;

function calculate(Age,height)
{
    
    var score = 5*Age+height;
    return score;
    
}
var John = calculate(26,190);
var Jesie = calculate(29,157);

if (John > Jesie)
{
console.log('John Menang dengan nilai' +  + John);
}
else
{
console.log('Jesie Menang dengan nilai' +  + Jesie);
}

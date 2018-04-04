var heightJohn = 190;
var heightJesie = 157;
var heightMoana = 160;
var ageJohn = 26;
var ageJesie = 29;
var ageMoana = 28;

function calculate(Age,height)
{
    
    var score = 5*Age+height;
    return score;
    
}
var John = calculate(26,190);
var Jesie = calculate(29,157);
var Moana = calculate(28,160);

if (John  > Moana)
{
    if (John > Jesie)
    {
   console.log('John Menang dengan nilai' +  + John);
    }
    else
    {
    console.log('Jesie Menang dengan nilai' +  + Jesie);
    }
}
else if (John  > Jesie)
{
    if (John > Moana)
    {
    console.log('John Menang dengan nilai' +  + John);
    }
    else
    {
    console.log('Moana Menang dengan nilai' +  + Moana);
    }
}
else if (Moana > John)
{
    if (Moana > Jesie)
    {
    console.log('Moana Menang dengan nilai' +  + Moana);
    }
    else
    {
    console.log('Jesie Menang dengan nilai' +  + Jesie);
    }
}
else if ( John == Jesie)
{
    console.log('Seri dengan nilai' +  + John);
}
else if (John == Moana)
{
    console.log('Seri ' +  + John);
}
else
{
console.log('seri dengan nilai' +  + Moana);
}

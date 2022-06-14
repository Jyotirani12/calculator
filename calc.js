let output=document.getElementById("displayscreen");
function display(num){
  
    
    displayscreen.value+=num;
    
}
function result()
{
    try{
        document.getElementById('displayscreen').value=eval(document.getElementById('displayscreen').value);
    }
    catch(err){
        document.getElementById('displayscreen').value="Invalid Input";
    }
    
}
function clearscreen1()
{
    document.getElementById('displayscreen').value=" ";
}
function d1()
{
    document.getElementById('displayscreen').value=document.getElementById('displayscreen').value.slice(0,-1);
}
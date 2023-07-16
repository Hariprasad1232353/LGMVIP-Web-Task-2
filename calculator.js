let result=document.getElementById('result');
function appendValue(value){
    result.value+=value;
}
function backspace(){
    result.value=result.value.slice(0,-1);
}
function clearResult(){
    result.value='';
}
function calculateResult(){
    try{
        result.value=eval(result.value);
    }catch(error){
        result.value='Error';
    }
}
let expression="";
let input=document.getElementById("input");

function appendValue(value){
  expression+=value;
  if(value==='C'){
    input.value="";
    expression="";
  }
  else{
    input.value=expression;
  }
}

function calculate(){
  const result=eval(expression);
  input.value=result;
}
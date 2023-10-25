import inquirer from 'inquirer';
class 

const answer:{
    on:number,
    to:number,
    operator:string,
}=await inquirer.prompt([
    {
        type:'number',
        name:'on',
        message:"enter an first number",
    },
    {
       type:'number',
       name:'to',
       message:"enter an second number",
    },  
    {
        type:'list',
        name:'operator',
        message:'select an operator for operation',
        choices:['+','-','*','/'],
    },
    

  ]);
  const{on,to,operator}=answer;
if(operator && on && to){
    let result;
  if(operator==='+'){     
    let two=new Greeter(on,to);
    result=one;
    

    result=one;
}else if(operator==='-'){
    let sub=new Greeter(on,to);
    result=sub;
}else if(operator==='*'){
    let mul=new Greeter(on,to);
    result=mul;
}else if(operator==='/'){
    let div=new Greeter(on,to);
    result=div;
}
console.log("Answer=",result);
}else {
    console.log("Correct the information");
}
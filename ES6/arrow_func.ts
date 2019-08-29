var getRegValue=function(){
    return 10;
}

console.log(getRegValue());


//ommit function key word
const getArrowValue = () =>{
    return 20;
}
console.log(getArrowValue());

const getArrowValue1 = () => 30;// only one value can be return this way
console.log(getArrowValue1());



const getArrowValue2 = (m:any) => 10*m;
console.log(getArrowValue2(10));

const getArrowValue3 = (m:any,bonus:any) => m * bonus;
console.log(getArrowValue3(10,2));
console.log(typeof getArrowValue3);

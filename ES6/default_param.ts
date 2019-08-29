let getValue= function(value:any = 10,bonus = 5){
    console.log(value + bonus);
}
getValue();
getValue(20);
getValue(20,30);
getValue(undefined,30);
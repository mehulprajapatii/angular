let displayColor=function(message:any, ...colors:any){//rest prameters
    console.log(message);
    console.log(colors);
    for(let i in colors){
        console.log(colors[i]);
    }
}
let message="List of Color : ";
displayColor(message,'Red');
displayColor(message,'Red',"blue");
displayColor(message,'Red',"blue","Green");
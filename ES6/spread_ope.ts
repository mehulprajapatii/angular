let displayColors=function(message:any, ...colors:any){//spread prameters
    console.log(message);
    // console.log(colors);
    for(let i in colors){
        console.log(colors[i]);
    }
}
let message="List of Color : ";
let colorarray = ['Orange',"Yellow","Indigo"];
displayColors(message,...colorarray)
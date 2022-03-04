let pets = ["dogs", "cats", "parrots"] ;
pets [3]= "fish";
pets ["species"]="squirrel";

for (petid in pets) {
    console.log(petid);
    console.log(pets[petid]);
}

// PS C:\Users\Lenovo\Desktop\GUVI ASSIGNMENT\task-3> node .\forIn.js
// 0
// dogs   
// 1      
// cats   
// 2      
// parrots
// 3
// fish
// species
// squirrel
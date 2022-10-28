let obj = {
name : "Johnny",
surname : "Stracchino",
}

function fullName(){
    let i = obj.name + " " + obj.surname;
return i;
}

let completeName = fullName()

console.log(completeName)
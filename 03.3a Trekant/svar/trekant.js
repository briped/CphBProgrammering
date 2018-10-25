/**
 * Created by Christian on 06-02-2018.
 */

let height = Number(prompt("Hvor høj skal trekanten være?"));

for (let i = 1; i <= height; i++) {
    console.log('o'.repeat(i));
    documentLog('o'.repeat(i))
}

//Christians hjemmebryggede log-funktion til hjemmsiden
function documentLog(string){
    document.getElementById("pyramide").innerHTML += string + "<BR>";
}
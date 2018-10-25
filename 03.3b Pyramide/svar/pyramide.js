/**
 * Created by Christian on 06-02-2018.
 */
let pyramidHeight = Number(prompt("Hvor høj skal pyramiden være?"));

// Beregn bredden på pyramidens base.
let pyramidWidth = (pyramidHeight * 2) - 1;

// Loop gennem hvert lag af pyramiden.
for (let l = 1; l <= pyramidHeight; l++) {
    // Sørg for at at padding og bricks altid starter med intet, så hvert lag beregnes/bygges påny.
    let padding = '';
    let bricks = '';

    // Beregn antal bricks nødvendigt i pyramidelaget.
    let numBricks = (l * 2) - 1;

    // Beregn padding/luft der skal være på hver side af pyramidens lag.
    let numPadding = ((pyramidWidth - numBricks) === 0) ? 0 : (pyramidWidth - numBricks) / 2;

    // Lav padding/luften på hver side af pyramiden.
    for (let p = 0; p < numPadding; p++) {
        padding += ' '; // Er faktisk lidt overrasket over at den skriver mellemrum korrekt i HTML, havde troet det var nødvendigt med en &nbsp;
    }
    // Lav selve pyramidens lag.
    for (let b = 0; b < (l * 2) - 1; b++) {
        bricks += 'A';
    }
    // Sammensæt pyramidens lag med padding/luft.
    let layer = padding + bricks + padding;
    // Skriv til konsollen
    console.log(layer);
    // Brug den eksisterende funktion til at skrive til websiden
    documentLog(layer);
}

//Christians hjemmebryggede log-funktion til hjemmsiden
function documentLog(string){
    document.getElementById("pyramide").innerHTML += string + "<BR>";
}
/**
 * Created by Christian on 14-02-2018.
 */
let solskin = prompt("Skinner solen?");
if (solskin.toLowerCase() === "ja" || solskin.toLowerCase() ==="j"){
    solskin = true;
} else {
    solskin = false;
}

let tidspunkt = Number(prompt("Hvad er klokken (i hele timer)"));

if ((tidspunkt > 12 && tidspunkt < 15) || solskin) {
    document.write("Du har brug for din paraply!");
}
else {
    document.write("Du har ikke brug for din paraply!");
}
function get2DContext(id){

    let canvas = document.getElementById(id);
    let context = canvas.getContext("2d");

    return context;
}

function canvasApp(){

    let cercleJaune = get2DContext("Smiley");
    let oeilGauche = get2DContext("Smiley");
    let oeilDroit = get2DContext("Smiley");
    let bouche = get2DContext("Smiley");
    let completeBouche = get2DContext("Smiley");
    let texte = get2DContext("Smiley");

    let pi = Math.PI;
    let deuxPi = 2*pi;

    cercleJaune.beginPath();
    cercleJaune.arc(100, 100, 75, 0, deuxPi);
    cercleJaune.fillStyle = "yellow";
    cercleJaune.lineWidth = 3;
    cercleJaune.closePath();
    cercleJaune.fill();
    

    oeilGauche.beginPath();
    oeilGauche.arc(65, 70, 10, 0, deuxPi);
    oeilGauche.fillStyle = "black"
    oeilGauche.closePath();
    oeilGauche.fill();

    oeilDroit.beginPath();
    oeilDroit.arc(135, 70, 10, 0, deuxPi);
    oeilDroit.fillStyle = "black";
    oeilDroit.closePath();
    oeilDroit.fill();

    bouche.beginPath();
    bouche.arc(99, 120, 35, 0, pi);
    bouche.fillStyle = "black";
    bouche.closePath();
    bouche.fill();

    completeBouche.beginPath();
    completeBouche.arc(99, 120, 29, 0, pi);
    completeBouche.fillStyle = "yellow";
    completeBouche.closePath();
    completeBouche.fill();

    texte.beginPath();
    texte.textBaseLine = "middle";
    texte.font = "20px sans serif";
    texte.fillStyle = "black";
    texte.fillText("Hello Canvas!", 45, 200);
    texte.closePath();
    texte.fill();

}

function displayDateTime(){
    let date = get2DContext("Date");
    let heure = get2DContext("Date");
    date.toLocaleDateString();
    heure.toLocaleTimeString();

}

function main(){
    canvasApp();
}

main();
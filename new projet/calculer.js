alert("Écrivez les coefficients de l'équation du second degré : a : b : c :");
// app.ts
function sol2degre(a, b, c) {
    var delta = b * b - 4 * a * c;
    // Vérifier le type de solution
    if (delta > 0) {
        // Deux solutions réelles distinctes
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return " x1 = ".concat(x1.toFixed(2), " et x2 = ").concat(x2.toFixed(2));
    }
    else if (delta === 0) {
        // Une solution réelle (solution double)
        var x = -b / (2 * a);
        return " x = ".concat(x.toFixed(2));
    }
    else {
        // Pas de solution réelle (solutions complexes)
        var r = -b / (2 * a);
        var imaginar = Math.sqrt(-delta) / (2 * a);
        return " x = ".concat(r.toFixed(2), " \u00B1 ").concat(imaginar.toFixed(2), "i");
    }
}
var a;
function getValidNumber() {
    var num;
    while (true) {
        num = Number(prompt("Entrez un nombre 'a' non nul :"));
        if (num !== 0) {
            return num;
        }
    }
}
a = getValidNumber();
var b;
b = Number(prompt("Entrez un  nombre 'b' "));
var c;
c = Number(prompt("Entrez un nombre 'c'"));
var msg = "alore lequation s'ecrit comme suite:  ".concat(a, "x^2 +").concat(b, "x+").concat(c, "=0");
var msgt = document.getElementById('msg');
if (msgt) {
    msgt.textContent = msg;
}
var result = sol2degre(a, b, c);
var resultDisplayElement = document.getElementById('result');
// Vérifier que l'élément a bien été trouvé
if (resultDisplayElement) {
    // Afficher le résultat dans l'élément HTML
    resultDisplayElement.textContent = result;
}
console.log(result);

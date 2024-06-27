alert("Écrivez les coefficients de l'équation du second degré : a : b : c :");
// app.ts
function sol2degre(a: number, b: number, c: number): string {
    
    const delta = b * b - 4 * a * c;
  
    // Vérifier le type de solution
    if (delta > 0) {
      // Deux solutions réelles distinctes
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return ` x1 = ${x1.toFixed(2)} et x2 = ${x2.toFixed(2)}`;
    } else if (delta === 0) {
      // Une solution réelle (solution double)
      const x = -b / (2 * a);
      return ` x = ${x.toFixed(2)}`;
    } else {
      // Pas de solution réelle (solutions complexes)
      const r = -b / (2 * a);
      const imaginar = Math.sqrt(-delta) / (2 * a);
      return ` x = ${r.toFixed(2)} ± ${imaginar.toFixed(2)}i`;
    }
  }
  
  
  let a :number ;
  function getValidNumber(): number {
    let num: number;
  
    while (true) {
      num = Number(prompt("Entrez un nombre 'a' non nul :"));
  
      if (num !== 0) {
        return num;
      }
    }
  }
      a= getValidNumber();
  let b :number;
  b=Number(prompt("Entrez un  nombre 'b' "));
  let c :number;

  c=Number(prompt("Entrez un nombre 'c'"));
 const  msg=`alore lequation s'ecrit comme suite:  ${a}x^2 +${b}x+${c}=0` ;
 const msgt=document.getElementById('msg');
 if (msgt) {
  msgt.textContent=msg;
 }
  const result = sol2degre(a, b, c);
  
  
  const resultDisplayElement = document.getElementById('result');

  // Vérifier que l'élément a bien été trouvé
  if (resultDisplayElement) {
    // Afficher le résultat dans l'élément HTML
    resultDisplayElement.textContent = result;
  }
  
  console.log(result);
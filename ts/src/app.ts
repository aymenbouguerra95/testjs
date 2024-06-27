/*console.log("say hii aymen");
let num1 = 5;
while (true) {
  if (num1 < 8) {
    alert("nice one ");
    num1++;
  } else {
    break;
  }
}
let num2 = prompt("enter num2");
function add(num1: number, num2: number) {
  console.log(num1 + num2);

  return num1 + num2;
}
add(9, 8);*/
// ***********string*********

/*let text = "  hi aymen say -good morrning ";
let resultat: string;
//length
console.log(text.length);
//toupperCAse
resultat = text.toUpperCase();
console.log(resultat);
//tolowercase
resultat = text.toLocaleLowerCase();
console.log(resultat);
//concat
let resultat = text.concat(" XD 9887sjeu ");
console.log(text);
//trim
resultat = text.trim();
console.log(resultat);
//replace
resultat = text.replace("hi", "hello");
console.log(resultat);
//chartat
resultat=text.charAt(2);
console.log(resultat);
//split
console.log(text.split("-"));*/

/*********template literals ((``)) */
/*let firstname='bouguerra';
let lastename='aymennnnnnnn'

let example= `hi  ${firstname} ${lastename} ${5+5} ${text('karim')}
aymen
byby
`;
function text(name:string) {
    return 'hi '+ name+ ' !!';
    
}
console.log(example);*/

/* ******* Array *******/
/*let names = ["aymen", "bouguerra", "majdy",'az'];
let cars: string[] = [];

//let result = names.push("omar"); ajout a fin e array
//const result= names.pop(); supprime a fin de array
//const result=names.shift(); supp a debut de array
//const result=names.unshift("aaaaa"); ajout a debut de array 
//const result=names.splice(1,2); supp 2 element dans array a index 1 
//const result=names.sort(); sort array
//const result=names.reverse(); reverse array
//const result=names.indexOf('az')
console.log(result);
console.log(names); */

/* ***** tuple**** */
/*let names = ["aymen", "bouguerra", 4];
names[0] = 5;

let usernames: [string, number][];
usernames = [["ahmed", 1],['amine',8]];
usernames[0] = ['ali',88]
console.log(usernames);*/

/* ****enum type **** */
/*enum devloper{
  frontend ='front',
  backend='back',
  fullstack='full'
}

function checktype(type: devloper) {
  if (type === devloper.frontend || type === devloper.backend || type === devloper.fullstack) {
    return true;
  } else {
    return false;
  }
}
console.log(checktype(devloper.frontend));*/

/* ***** Union ***** */
/*let role:string |number;
role='admin';
role=5;

function hi(msg:string|number|boolean) {
  console.log('bonjour '+ msg);
  
  
}
hi(8);
type mathtype='add'|'multiple';*/

/* ***Any ,Unknown, Never****** */
//any
/*let user:any;
user =1;
user ='aer';
user= true;

//unknown
let car:unknown;
let names:string;
names=user;
//names=car;

//never
function throwerror():never {
  while (true) {
    
  };
}*/

/* ********** Anonymous & Arrow********/
/*function display(msg: string) {
  console.log(msg);
}
display("hi king");

let welcomemsg = function (msg:strinf) {
  console.log(msg);
};
welcomemsg('welcome');*/
// Arrow function
/*let sum = (num1: number, num2: number) => {
  console.log(num1 + num2);
};
sum(9, 7);

let mult = (num1: number, num2: number) => console.log(num1 * num2);
mult(5, 5);

let sum2 = (num1: number, num2: number) => num1 + num2;
let x = sum2(99 , 11);
console.log(x);*/

/* **** optionnel paramettre **** */

/*function welcome(name?:string) {
  console.log('welcome ' + name);
}
welcome();

/* ****** default parametre**** */

/*function welcome1(name:string='world') {
  console.log('welcome ' + name);
}
welcome1();

/* ******** reste parametre******* */
/*function printName(msg:string,...names:string[]) {
  console.log(msg+names.join(' , '));
}
printName('welcome ','aymen','mohame','mondhir','salah');*/

/* **** returne function **** */
/*function sum(num1: number, num2: number): number | string {
  return num1 + num2;
}

function printmsg() {
  console.log("hi");
}

let multy = (num3: number, num4: number) => console.log(num3*num4);

multy(9,8);*/

/* ********* Callback ******** */

/* function add(x:number,y:number):number {
  return x+y;
 }
 function multy(x:number,y:number):number {
  return x*y;
 }
 let resultat = add(3,2);
 console.log(resultat);
function print(a:number,b:number,collback:any) {
  let resultat =collback(a,b);
  console.log(resultat);
}
print(5,5,multy);*/

/* ********** ************* */
let lasteName='bouguerra';


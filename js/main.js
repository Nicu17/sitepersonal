//let ;
//name="Ion"; //string


//let age=20; //variabila numerica
let isMarried=false; //variabila boolean
let a=5;
let b=5;
//console.log(a+b); 


let hobby=['pescuit', 'citit', 'sport']; //variabila de tip array
let examene=[2010, 2011, 2012];


//console.log('numele este ' + name);
//console.log('varsta este ' + age);
//console.log('e casatorit ' + isMarried);
//console.log('hobbi-urile sunt ' + hobby);
//console.log('al dilea hobby este ' + hobby[1]);

let car = { //object
    brand: 'Audi',
    production: 2010,
    extraOptions: ['aer conditionat', 'servo directie'],
} 
//console.log(car);

let name= 'Mihai';
let age= 34;
let stareCivila= true;
let culoriPreferate= ['verde', 'albastru', 'galben', 'rosu'];

//console.log('Sunt ' + name, 'si am varsta de ' + age, 'dar sunt stare civila ' + stareCivila);
//console.log('A doua culoare preferata este ' + culoriPreferate[2]);

let animal={
    tip: 'caine',
    greutate: 10,
    nume: ['Bruno', 'Jack', 'Igor']
}
//console.log(animal.nume[1]);


//let x = 10;
//let y = 5;

//if(x < y){
  // console.log('x este mai mic decat y');
//}
//else if(x > y){
   // console.log('x este mai mare decat y');
//}
//else{
   // console.log('x egal cu y');
//}


//for(i = 0; i < 4; i++){
    // console.log(culoriPreferate[i]);
//}


/*let x = 2;
let y = 15;

let numerePrime = [2, 3, 5, 7, 11, 13];

if(x > y){
    console.log('x este mai mare decat y');
}
else if(x < y){
    console.log('x este mai mic decat y');
}
else{
    console.log('x este egal cu y');
}


/*if(x > 0 && x < y){
    console.log('numarul 12 este mai mare decat 0 si mai mic decat numarul 15');
}

if(x > 0 || x < y){
    console.log('numarul 12 este mai mare decat 0 si mai mic decat numarul 15');
}*/


/*for(i=0; i<6; i++){
    if(x == numerePrime[i]){
        console.log('numarul ' + x + 'exista in sirul de numere prime')
    }
}*/

/*function adunare(a, b){
    console.log(a + b);
}

adunare(5, 7);

adunare(12, 16);

function verificare(numar, sir){
    for(i=0; i< sir.length; i++){
        if(numar == sir[i]){
            console.log('numarul ' + numar + ' exista in sirul de numere prime')
        }
    }
}
verificare(13, [2, 3, 5, 7, 11, 13]);
verificare(2, [1, 5, 8, 9, 15, 20, 26, 2]);*/

            //tema
function calcule(p1, p2){
    console.log(p1 + p2);
    console.log(p1 * p2);
}
calcule(5, 8);

function nume(){
    n = prompt('Cum te numesti');
    console.log('Salut ' + n);
}
//nume();


function verificare(a, b){
    for(i=0; i < a.length; i++){
        for(j=0; j < b.length; j++){
            if(a[i] == b[j]){
                console.log('numarul ' + a[i] + ' este si in al doilea array');
            }
        }
        
    }
}
verificare([7, 10, 13, 14, 4, 9, 20], [0, 7, 20, 11, 13]);









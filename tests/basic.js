// var zodis = "Hi Hi Hi "
// var simbolis = 'q';
// var bool = true; 
// var skaiciusKeiciamas = 5;
// const nekeiciamas = 15;
// suma = skaiciusKeiciamas +10; 
// // komentaras
// /* komentaras nuo>iki  */

// var zodis1 = "Mano vardas Julija :) ";
// var suma = 5 + 10 +20;
// var manYraMetu = "Man yra 40+ :D";

// /*
// console.log(zodis1);
// console.log(suma);
// console.log(manYraMetu); */

// var pirmasSkaicius = 5;
// var antrasSkaicius = 7;
// /*console.log(daugyba());

// /*
// function daugyba() {
//     /* arba return 5 * 7 
// veiksmas = pirmasSkaicius * antrasSkaicius;
// return veiksmas; 
// } */ 

// var kiausiniaiVnt = 2
// var pienasKiekis = 450
// var miltaiKiekis = 450
// console.log("Receptas blynams: " );
// console.log (kiausiniaiVnt + " kiaušiniai po 50g");
// console.log (pienasKiekis + " ml pieno" );
// console.log (miltaiKiekis + " g miltų");
// console.log (blynuSuma());

// function blynuSuma (){
//    var kiausiniuBendrasKiekis= kiausiniaiVnt * 50
//    var vienasBlynas = 50

//     veiksmas = (kiausiniuBendrasKiekis + pienasKiekis + miltaiKiekis) / vienasBlynas

//     return "Viską sudėjus turėsime " + veiksmas + " blynų";
// }
// salyga nuo, iki ko, salyga ka i++ =i+1

// for (let i = 1; i<=6; i++){
//     console.log("Iteracija: " +i);
//     console.log(i+10);
// }


let vabalai = ["Boružė", "Drugelis", "Bitė"]

// vabalai.pop();
vabalai.unshift("Žiogas");
vabalai.push("Skruzdelė");
// vabalai.sort();
// console.log(vabalai);
// console.log("vabalų skačius/ilgis array - " + vabalai.length)
// console.log(vabalai.indexOf("Drugelis"))

for (let i = 0; i < vabalai.length; i++) {
    console.log("įprastas būdas - " + vabalai[i]);
}

for(vabalas of vabalai){
console.log("naujas būdas - " + vabalas);
}
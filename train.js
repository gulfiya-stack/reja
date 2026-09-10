                                                //Task-E
function getReverse(text) {
    let reversed = text
    .split("")
    .reverse()
    .join("");
    console.log(reversed);
    
}                                                
getReverse("hello");
getReverse("guli-stack");
getReverse('Hello World');

                                                
                                                //Task-D
// Ikkita parametra ega function tuzing, va functioning berilgan birinchi va ikkinchi parametr qiymatlari o'zaro 
// to'liq mos kelsa true qiymat qaytarsin.

// Masalan: checkContent("mitgroup", "gmtiprou") return true

// function checkContent(a, b) {
//     const wordA = a.split("");
//     const wordB = b.split("");

//     arrayA = wordA.sort();
//     arrayB = wordB.sort();
//     console.log(arrayA.toString()===arrayB.toString());
// }


// checkContent("mitgroup", "gmtiprou");
// checkContent("rejalar", "rlaejar");
// checkContent("adventures", "adventure");



                                                
                                                // Task-C
// const moment = require("moment");
// const prompt = require("prompt-sync")();
// class Shop {
//     constructor(a, b, c){
//         this.non = a;
//         this.lagmon = b;
//         this.cola = c;
//     }
//     qoldiq(){
//         console.log(`Hozir ${moment().format("HH:mm")}da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola} cola mavjud`);
//     }
//     sotish(product, d){
//         // const product = prompt("Sotish:mahsulot nomini kiriting: ");
//         if (product === "lagmon") {
//             this.lagmon = this.lagmon-d;
//         }
//         if (product === "non") {
//             this.non = this.non-d;
//         }
//         if (product === "cola") {
//             this.cola = this.cola-d;
//         }
//     }
//     qabul(prod, e){
//         // const prod = prompt("Qabul: mahsulot nomini kiriting: ");
//         if (prod === "lagmon") {
//             this.lagmon = this.lagmon+e;
//         }
//         if (prod === "non") {
//             this.non = this.non+e;
//         }
//         if (prod === "cola") {
//             this.cola = this.cola+e;
//         }
//     }
// }
// const shop = new Shop(4,5,2);
// shop.qoldiq();
// shop.sotish("non", 3); 
// shop.qabul("cola", 4);
// shop.qoldiq();


                                                 
                                                 
                                                 
                                                 // TASK-A
// const prompt = require("prompt-sync")();
// function countLetters() {
//     let char = prompt("Harf kiriting: ").toLowerCase();
//     function checkChar () {
//         char.length;
//         while (char.length !==1) {
//             console.log("Sizga 1 harfdan ko'p kiritdingiz, qaytadan kiriting!");
//             char = prompt("Harf kiriting: ").toLowerCase();
//         } 
        
//     }
//     checkChar();
    
//     const input = prompt("So'z kiriting: ").toLowerCase();;
//     console.log(`Harf va so'z: ${char} va ${input}`);
//     const lst = input.split("");
    
//     let count = 0;
//     lst.forEach((item) => {
        
//             if (item  === char) {
//                 count ++;
//             }
//         });
//     if (count===0) {
//             console.log(`Siz kiritgan harf '${char}' bu '${input}' so'zida yo'q`);
//         }
//     else {console.log(`${char} '${input}'so'zida ${count} harf bor`);}
    
// }
    
    
// countLetters();


// Task B
// function countDigits(str) {
//     let count = 0;

//     str.split("").forEach((char) => {
//         if (!isNaN(char) && char !== " ") {
//             count++;
//         }
//     });

//     return count;
// }

// console.log(countDigits("fdijj583vdf9dsd90sd022g0djj4jv9s")); 
// console.log(countDigits("guli-stack-1995")); 

// for (let i = 0; i<arrayA.length; i++) {
//     if (arrayA[i] !== arrayB[i]) {
//         return false;
//     }
// }
// return true;
    // console.log(wordA);
    // console.log(wordB);

    // for (let i=0; i<wordA.length; i++) {
    //     let letter = wordA[i];
    //     for (let j=0; j < wordB.length; j++) {
    //         if (letter === wordB[j]) {  
    //             break;
    //         }
    //     }
    // }
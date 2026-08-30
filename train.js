                                                 // TASK-A
const prompt = require("prompt-sync")();
function countLetters() {
    let char = prompt("Harf kiriting: ").toLowerCase();
    function checkChar () {
        char.length;
        while (char.length !==1) {
            console.log("Sizga 1 harfdan ko'p kiritdingiz, qaytadan kiriting!");
            char = prompt("Harf kiriting: ").toLowerCase();
        } 
        
    }
    checkChar();
    
    const input = prompt("So'z kiriting: ").toLowerCase();;
    console.log(`Harf va so'z: ${char} va ${input}`);
    const lst = input.split("");
    
    let count = 0;
    lst.forEach((item) => {
        
            if (item  === char) {
                count ++;
            }
        });
    if (count===0) {
            console.log(`Siz kiritgan harf '${char}' bu '${input}' so'zida yo'q`);
        }
    else {console.log(`${char} '${input}'so'zida ${count} harf bor`);}
    
}
    
    
countLetters();

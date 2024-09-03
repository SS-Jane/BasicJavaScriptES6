function processInput(input) {
    //เราต้องแยก input ด้วยเคร่ืองหมายขึ้นบันทัดใหม่ก่อน แยกคำ
    // Sample Input
    // S;M;plasticCup()
    // C;V;mobile phone
    // C;C;coffee machine
    // S;C;LargeSoftwareBook
    // C;M;white sheet of paper
    // S;V;pictureFrame

    let lines = input.split('/n');
    console.log(lines);
    
    // เราต้องแยกระหว่าง Operation, type, word ออกจากกันโดยใช้ ;
    
    lines.forEach(line => {
        const [operation, type, words] = line.split(';'); 
        console.log([operation, type, words]);       
    

    // ถ้า Operation = S split แปลงเป็น lower word case
    // ถ้า Operation = C Combine
        if (operation === 'S') {
            let splitWords;
            if (type === 'M') {
                splitWords = words.slice(0,-2);
                console.log(splitWords);
            } else {
                splitWords = words;
            }
            const result = splitWords.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
            console.log(result);
            
        } else if (operation === 'C') {
            //แยก word เป็นคำด้วย ' '
            const wordArray = words.split(' ');
            console.log(wordArray);
            let combined;
            if (type === 'M') {
                combined = wordArray.map((word, index) => index === 0 ? word.toLowerCase() : capitalize(word)).join('') + '()';
            } else if (type === 'C') {
                combined = wordArray.map(word => capitalize(word)).join('');
            } else if (type === 'V') {
                combined = wordArray.map((word, index) => index === 0 ? word.toLowerCase() : capitalize(word)).join('');
            }
            console.log(combined);
        }
    });

    function capitalize(word) {
        
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}

let input = 'C;M;mouse pad'

processInput(input);
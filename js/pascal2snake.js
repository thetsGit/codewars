function toUnderscore(string) {
    let currentWord = "";
    let words = [];
    string = string.toString();
    for (let char of string){
        console.log(char);
        if (/[A-Z]/.test(char)) {
            words.push(currentWord);
            currentWord = char.toLowerCase();
        }else {
            currentWord += char;
        }
    }
    words.push(currentWord);
    return words.length > 1 ? words.join("_").slice(1) : words.join("")
};

console.log(toUnderscore(5));
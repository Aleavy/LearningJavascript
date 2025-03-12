const isisogram = (word)=> {
    // Estudiar desde aca hasta el primer if

    let sanitazedWord = word.toLowerCase().normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
    sanitazedWord = sanitazedWord.replace(/\s+/g, '');
    if (!sanitazedWord){
        return true
    }
    const wordSet = new Set()
    for (let i = 0; i < sanitazedWord.length; i++){
        let letter = sanitazedWord[i];
        if (wordSet.has(letter)){
            return false;
        }
        wordSet.add(letter)
    }
    return true;
}

console.log(isisogram("  ga  to  "))
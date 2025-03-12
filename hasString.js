const hasSubString = (subString, string) =>{

    const regExString = new RegExp(subString);

    const match = regExString.exec(string);

    if (!match){
        return false;
    }
    return match
}

console.log(hasSubString("abc", "ppppabcppp"))
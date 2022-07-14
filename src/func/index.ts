export const cap = (str:string):string => {
    let newStr = str[0].toUpperCase();
    for (let index = 1; index < str.length; index++) {
        newStr += str[index];
    }
    return newStr;
};

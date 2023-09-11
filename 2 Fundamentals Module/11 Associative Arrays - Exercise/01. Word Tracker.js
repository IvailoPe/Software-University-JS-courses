function main(input) {
    let numberOfWords = input[0].split(" ")
    let obj = {}
    for (let i = 0; i < numberOfWords.length; i++) {
        obj[numberOfWords[i]] = 0
    }
    input.splice(0,1);
    for (let i = 0; i < input.length; i++) {
        if(obj.hasOwnProperty(input[i])){
            obj[input[i]]++;
        }
    }
    //console.log(obj);
    let arr = [];
    arr = Object.entries(obj).sort((a,b) => {
        return b[1] - a[1]
    })
    for (const iterator of arr) {
        console.log(`${iterator[0]} - ${obj[iterator[0]]}`);
       
    }
}
function main(input) {
    let arrOfObj = []
    for (let i = 0; i < input.length; i++) {
        if (input[i].split(" ")[0] == 'addMovie') {
            let obj = {};
            obj.name = input[i].split("addMovie ")[1];
            arrOfObj.push(obj);
        }
        else if (input[i].split(" ").includes("directedBy")) {
            for (let g = 0; g < arrOfObj.length; g++) {
                if (arrOfObj[g].name === input[i].split(" directedBy ")[0]) {
                    arrOfObj[g].director = input[i].split(" directedBy ")[1]
                }

            }
        }
        else if (input[i].split(" ").includes("onDate")) {
            for (let g = 0; g < arrOfObj.length; g++) {
                if (arrOfObj[g].name === input[i].split(" onDate ")[0]) {
                    arrOfObj[g].date = input[i].split(" onDate ")[1]
                }
            }
        }
    }
    arrOfObj = arrOfObj.filter(x => {
        if (x.name !== undefined && x.date !== undefined && x.director !== undefined) {
            return x;
        }
    }).map(x => JSON.stringify(x))
    console.log(arrOfObj.join("\n"));
}
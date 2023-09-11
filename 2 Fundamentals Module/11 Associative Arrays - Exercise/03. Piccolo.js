function main(input) {
    let parking = {}
    for (let iterator of input) {
        if (iterator.split(', ')[0] === 'IN') {
            parking[iterator.split(", ")[1]] = iterator.split(", ")[1]
        }
        else if (iterator.split(", ")[0] === 'OUT') {
            delete parking[iterator.split(", ")[1]]
        }
    }
    let arr = []
    for (let key in parking) {
        arr.push(key);
    }

    /*arr.sort((a,b) => {
        let forA = a.split("").filter(x => {
            x = Number(x)
            if(!isNaN(x) === true){
               return x
            }
        });
        let forB = b.split("").filter(x => {
            x = Number(x)
            if(!isNaN(x) === true){
               return x
            }
        })
        forA = forA.join("")
        forB = forB.join("")
        forA = Number(forA);
        forB = Number(forB);
        return forA - forB
    })
    */
    arr.sort()


    if (arr.length > 0) {
        console.log(arr.join("\n"));
        return
    }
    console.log(`Parking Lot is Empty`);
    return
}

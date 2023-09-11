function main(input) {
    let arrObj = [];
    for (let i = 0; i < input.length; i++) {
        let grade = Number(input[i].split(" ")[4].split(",")[0]) + 1
        if (Number(input[i].split(" ")[10]) < 3) {
            grade--
        }
        arrObj[i] = {
            name: input[i].split(" ")[2].split(",")[0],
            grade: grade,
            score: Number(input[i].split(" ")[10])
        }
    }
    arrObj.sort((x, c) => Number(x.grade) - Number(c.grade))
    arrObj = arrObj.filter(x => {
        if (x.score < 3) {
        } else {
            return x
        }
    })
    let grade = arrObj[0].grade;
    let finalArr = [];
    arrObj.forEach(x => {
        if (grade === x.grade) {
            finalArr.push(x.name)
        }
    })
    let broika = 0;
    let sreden = 0;
    console.log(`${grade} Grade`);
    console.log(`List of students: ${finalArr.join(", ")}`);
    arrObj.forEach(x => {
        if (x.grade === grade) {
            sreden += Number(x.score)
            broika++;;
        }
    });
    sreden = sreden / broika;
    console.log(`Average annual score from last year: ${sreden.toFixed(2)}`);
    console.log(' ');
    for (const key of arrObj) {
        if (grade !== key.grade) {
            grade = key.grade;
            finalArr = [];
            broika = 0;
            sreden = 0;
            arrObj.forEach(x => {
                if (grade === x.grade) {
                    finalArr.push(x.name)
                }
            })
            arrObj.forEach(x => {
                if (x.grade === grade) {
                    sreden += Number(x.score)
                    broika++;
                }
            });
            sreden = sreden / broika;
            console.log(`${grade} Grade`);
            console.log(`List of students: ${finalArr.join(", ")}`);
            console.log(`Average annual score from last year: ${sreden.toFixed(2)}`);
            console.log(' ');
        }
    }
}
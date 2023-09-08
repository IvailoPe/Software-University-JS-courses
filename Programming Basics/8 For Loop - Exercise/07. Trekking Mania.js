function main(input) {
    let a = Number(input[0])

    let musala = 0;
    let monblan = 0
    let kilimandzaro = 0
    let k2 = 0
    let everest = 0

    let index = 1
    let hora = 0

    for (let i = 1; i <= a; i++) {
        hora = hora + Number(input[i])
    }

    for (let i = 0; i <= a; i++) {
        if (Number(input[index]) <= 5) {
            musala = Number(input[index]) + musala
        }
        else if (Number(input[index]) >= 6 && Number(input[index]) <= 12) {
            monblan = Number(input[index]) + monblan
        }
        else if (Number(input[index]) >= 13 && Number(input[index]) <= 25) {
            kilimandzaro = Number(input[index]) + kilimandzaro
        }
        else if (Number(input[index]) >= 26 && Number(input[index]) <= 40) {
            k2 = Number(input[index]) + k2
        }
        else if (Number(input[index]) >= 41) {
            everest = Number(input[index]) + everest
        }
        index++
    }
    console.log(`${(musala / hora * 100).toFixed(2)}%`);
    console.log(`${(monblan / hora * 100).toFixed(2)}%`);
    console.log(`${(kilimandzaro / hora * 100).toFixed(2)}%`);
    console.log(`${(k2 / hora * 100).toFixed(2)}%`);
    console.log(`${(everest / hora * 100).toFixed(2)}%`);
}
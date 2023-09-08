function main(input) {
    let ra = ''
    let a = '';
    let b = ''
    let c = ''
    let g = ''
    let d = ''
    let p = ''
    let check;
    let check2;
    let result = ''
    for (let i = Number(input[1]); i >= Number(input[0]); i--) {
        ra = String(i)
        a = String(ra[0])
        b = String(ra[1])
        c = String(ra[2])
        g = String(ra[3])
        d = String(ra[4])
        p = String(ra[5])

        check = Number(a) + Number(c) + Number(d)
        check2 = Number(b) + Number(g) + Number(p)

        if (check === check2) {
            result = i + ' ' + result

        }
    }
    console.log(result);
}
function main(input) {
    let key = +input.shift()
    let str = ''
    for (const iterator of input) {
        str = ''
        if (iterator === 'end') { break; }
        for (const text of iterator) {
            str += (String.fromCharCode(text.charCodeAt() - key))
        }
        if (/@([A-Za-z]+)[^@\-!:>]+!(G|N)!/gm.exec(str) !== null && /@([A-Za-z]+)[^@\-!:>]+!(G|N)!/gm.exec(str)[2] === 'G') {
            console.log(/@([A-Za-z]+)[^@\-!:>]+!(G|N)!/gm.exec(str)[1]);
        }
    }
}
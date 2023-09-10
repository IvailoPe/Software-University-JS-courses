function main(a, b, c) {
    let s = 1 / 2 * (a + b + c);
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(area);
}
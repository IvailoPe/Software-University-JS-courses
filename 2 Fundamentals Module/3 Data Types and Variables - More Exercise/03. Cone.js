function main(radius, height) {
    let volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height
    let slant = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let lateral = Math.PI * radius * slant
    let base = Math.PI * Math.pow(radius, 2)
    console.log("volume = " + volume.toFixed(4));
    console.log("area = " + (lateral + base).toFixed(4));
}
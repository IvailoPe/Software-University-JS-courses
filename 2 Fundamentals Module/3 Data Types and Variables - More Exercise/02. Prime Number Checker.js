function main(num) {
    let test;
    let bool;
    if (num > 1) {
        test = Math.sqrt(num);
        for (let i = 2; i < test; i++) {
            bool = false;
            if (num % i !== 0) {
                bool = true;
            }
            if (bool == false) {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}
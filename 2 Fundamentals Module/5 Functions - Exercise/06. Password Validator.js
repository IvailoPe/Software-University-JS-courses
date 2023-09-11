function validationOfPassword(password) {
    let isPasswordValid = true;
    let numCounter = 0;
    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isPasswordValid = false;
    }
    for (let i = 0; i < password.length; i++) {
        if ((password.charCodeAt(i) < 65 || password.charCodeAt(i) > 90) && (password.charCodeAt(i) < 97 || password.charCodeAt(i) > 122) && (password.charCodeAt(i) < 48 || password.charCodeAt(i) > 57)) {
            console.log("Password must consist only of letters and digits");
            isPasswordValid = false;
            break;
        }
    }
    for (let i = 0; i < password.length; i++) {
        if (!(isNaN(password[i]))) {
            numCounter++;
        }
    }
    if (numCounter < 2) {
        isPasswordValid = false;
        console.log("Password must have at least 2 digits");
    }
    if (isPasswordValid) {
        console.log("Password is valid");
    }
}
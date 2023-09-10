function main(user) {
    let password = "";
    let counter = 0;
    for (let i = user[0].length - 1; i >= 0; i--) {
        password = password + user[0][i]
    }

    for (let i = 1; i < user.length; i++) {
        if (user[i] == password) {
            console.log(`User ${user[0]} logged in.`);
            break;
        }
        if (counter == 3) {
            console.log(`User ${user[0]} blocked!`);
            break;
        }
        console.log(`Incorrect password. Try again.`);
        counter++;
    }
}
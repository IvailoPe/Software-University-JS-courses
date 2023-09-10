function main(num) {
    let result = 0;
    let nums = num.toString();
    for (let i = 0; i < num.toString().length; i++) {
       result += Number(nums[i]);
    }
    console.log(result);
}
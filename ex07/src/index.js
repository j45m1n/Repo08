var sum = 0;

function addThree() {
    sum = sum + 3;

    console.log(3);
    return sum;
}
addThree();

function addFive() {
    sum = sum + 5;

    console.log(sum);
    return sum;
}
addFive();

module.exports = {
    addThree,
    addFive
};
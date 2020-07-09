let score = [10, 15, 20, 25];

console.log(score);

for (let y = 0; y < score.length; y++) {
    if (score[y] % 2 === 0) {
        console.log(score[y] + "は偶数です");
    }
}

let car = {gass: 20.5, num: 1234};

console.log(car);
console.log("ガソリンは" + car.gass + "です");
console.log("ナンバーは" + car.num + "です");
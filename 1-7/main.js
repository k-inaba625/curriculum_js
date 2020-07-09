class Taiyaki {
    constructor(nakami) {
        this.nakami = nakami;
    }

    menu() {
        console.log(`中身は${this.nakami}です`);
    }
}

let anko = new Taiyaki("あんこ");
let cream = new Taiyaki("クリーム");
let cheese = new Taiyaki("チーズ");
anko.menu();
cream.menu();
cheese.menu();




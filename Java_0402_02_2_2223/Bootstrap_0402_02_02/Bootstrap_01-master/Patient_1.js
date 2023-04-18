class Patient {
    constructor(f, i, o, d, s, sh) {
        this.F = f;
        this.I = i;
        this.O = o;
        this.Y = new Date(d);
        this.S = s;
        this.SH = sh;

    }
    setById() {
        document.getElementById("F").textContent = this.F;
        document.getElementById("I").textContent = this.I;
        document.getElementById("O").textContent = this.O;
        document.getElementById("Y").textContent = this.Y.getFullYear();
        document.getElementById("S").textContent = this.S;
        document.getElementById("SH").textContent = this.SH;

    }
}
let Ivanov = new Patient('Иванов', 'Иван', 'Иванович', new Date(1980, 6, 10), "м", "Назначено");
Ivanov.setById();
let Petrov = new Patient('Петров','Петр','Петрович', new Date(1974, 12, 12), "м", "Исполнено");
Petrov.setById();
let Sidorov = new Patient('Сидоров','Сидор','Сидорович', new Date(1970, 10, 9), "м", "Медотвод");
Sidorov.setById();

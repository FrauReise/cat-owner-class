const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {
    alert("Все данные выводятся в консоль, нажмите f12");
    createObjectCat();
    createObjectOwner();
});

class Cat {
    constructor(nickname, sex, breed, food) {
        this.nickname = nickname;
        this.sex = sex;
        this.breed = breed;
        this.food = food;
    }
}

function createObjectCat() {

    let cat = new Cat(nickname, sex, breed, food);
    console.log("Кот")
    console.log(`Кличка: ${cat.nickname}`);
    console.log(`Пол: ${cat.sex}`);
    console.log(`Порода: ${cat.breed}`);
    console.log(`Питание: ${cat.food}`);
}


let nickname = document.getElementById('nickname').value;

let sex = null;
let elementSex = document.getElementsByName('sex');
for (let i = 0; elementSex[i]; ++i) {
    if (elementSex[i].checked) {
        sex = elementSex[i].value;
        break;
    }
}

let breed = document.getElementById('breed').value;

let food = " ";
let elementFood = document.getElementsByName('food');
for (let i = 0; elementFood[i]; ++i) {
    if (elementFood[i].checked) {
        food = `${elementFood[i].value} ${food}`;
    }
}

class Owner {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}

function createObjectOwner() {
    let name = document.getElementById('firstname').value;
    let phone = document.getElementById('phone').value;

    let owner = new Owner(name, phone);
    console.log("Владелец кота")
    console.log(`Имя: ${owner.name}`);
    console.log(`Телефон: ${owner.phone}`);
}
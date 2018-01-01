//tworze tablice
var animalsArray = new Array();

class Animal {
    constructor(name, color, typ, czymaogon, dzwiek) {
        this.id = Math.floor(Math.random() * 10000);
        this.name = name;
        this.color = color;
        this.typ = typ;
        this.czymaogon = czymaogon;
        this.dzwiek = dzwiek;
        this.logInConsole();
        this.makeSound();
    }

    logInConsole() {
        console.log(this);
    }

    makeSound() {
        console.log(this.dzwiek);
    }
}

class Cat extends Animal {
    constructor(name, color, typ, czymaogon) {
        super(name, color, typ, czymaogon, "Miau");
    }
}

class Dog extends Animal {
    constructor(name, color, typ, czymaogon) {
        super(name, color, typ, czymaogon, "Hau");
    }
}


class Lew extends Animal {
    constructor(id, name, color, typ, czymaogon) {
        super(name, color, typ, czymaogon, "Roar");
    }
}

let addCell = (text, row) => {
    let komorka = document.createElement('td');
    let textNode1 = document.createTextNode(text);
    komorka.appendChild(textNode1);
    row.appendChild(komorka);
    return komorka;
};
let addButton = (text, handler, parent) => {
    let cell = addCell('', parent);
    let button = document.createElement('button');
    let textBtn = document.createTextNode(text);
    button.appendChild(textBtn);
    button.onclick = handler;
    cell.appendChild(button);
};

let addRow = (animal) => {
    //wiersz id
    let wiersz = document.createElement('tr');
    addCell(animal.id, wiersz);
    addCell(animal.name, wiersz);
    addCell(animal.color, wiersz);
    addCell(animal.typ, wiersz);
    addCell(animal.czymaogon ? "TAK" : "NIE", wiersz);
    addButton('Edytuj', () => {
        setInputs(animal);
    }, wiersz);
    addButton('Usuń', () => {
       
        renderTable();
    }, wiersz);
    document.getElementById('tabela1').appendChild(wiersz);
};

let renderTable = () => {
    let tbl = document.getElementById('tabela1');
    tbl.remove();

    let parent = document.getElementById('tabela');
    let newTable = document.createElement('table');
    newTable.setAttribute('id', 'tabela1');
    newTable.insertAdjacentHTML('beforeend', `<tr>
                <th>Id</th>
                <th>Imie</th>
                <th>Kolor</th>
                <th>Typ</th>
                <th>Ma ogon?</th>
                <th></th><th></th>
            </tr>`);
    parent.appendChild(newTable);
    for (let animal of animalsArray) {
        addRow(animal);
    }
};

//Event z function
document.getElementById('confirmbutton').addEventListener('click', function () {
    let name = document.getElementById('name').value;
    let color = document.getElementById('color').value;
    let typAnimals = document.getElementById('typ').value;
    let id = document.getElementById('id').value;

    if (!id) {
        if (typAnimals === 'pies') {
            let dog1 = new Dog(name, color, typAnimals, true);
            animalsArray.push(dog1);
        } else if (typAnimals === 'kot') {
            let cat1 = new Cat(name, color, typAnimals, true);
            animalsArray.push(cat1);
        } else if (typAnimals === 'lew') {
            let lew1 = new Lew(name, color, typAnimals, true);
            animalsArray.push(lew1);
        }
    } else {
        //znajdz element w tablicy po id
        let animal = animalsArray.find(x => x.id === id);
        //ustaw wartości na podstawie pól
        animal.color = color;
        
    }
    renderTable();
});


///////////////////////////////////////////////////////////////////////////////////JASON///////////////////JASON

//class DbManager
//add(anim);
//1pobierz JSONA
//Parsujemy JSONa;
//oblicz ID(petla która przeleci tablice i sprawdzi najwiekszy ID i doda o jeden maxID+1)
//Przypisz ID do animal;
//dodaj do tablicy;
//tablica stringity;
//7 dodaj do localstorage setItem("klucz",tablica);

//var afterParse=JSON.parse

//Funkcja max min z tablicy

/*var tablica = [1, 2, 3, 4, 5, 6, 0]

function funkcja() {
    var max = 0;


    for (i = 0; i <= tablica.length; i++) {
        var lewa = tablica[i];
        var prawa = tablica[i + 1];


        if (lewa > max) {
            max = lewa;
        } else if (prawa > max) {
            max = prawa
        } else max = max;

    }
    console.log(max);
}

document.getElementById('spr').addEventListener('click', funkcja)


/*funcktion usun value input type text and select*/ ///////////////////////////////////////////////////*/
function setInputs(animal) {
    console.log('ustawianie inputow.. todo..', animal);
    let nameClose = document.getElementById('name');
    let colorClose = document.getElementById('color');
    let selectClose = document.getElementById('typ');
    let hiddenId = document.getElementById('id');
    
    nameClose.value = animal.name;
    colorClose.value = animal.color;
    selectClose.value = animal.typ;
    hiddenId.value = animal.id;
}

function clearInput() {
    let nameClose = document.getElementById('name');
    let colorClose = document.getElementById('color');
    let selectClose = document.getElementById('typ');
    let hiddenId = document.getElementById('id');
    
    nameClose.value = "";
    colorClose.value = "";
    selectClose.value = "";
    hiddenId.value = "";
}

document.getElementById('delete').addEventListener('click', clearInput);
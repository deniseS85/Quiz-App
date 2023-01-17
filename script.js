let nameArray = [];

function render() {}

// Array füllen
function pushArray() {
    let item = document.getElementById('').value;
    nameArray.push(item);
}

// in localStorage speichern
function save() {
    localStorage.setItem('Key', JSON.stringify(nameArray));
}

// von localStorage laden
function load() {
    let name = localStorage.getItem('Key');

    if (name) {
        nameArray = JSON.parse(name);
    }
}

// Elemente löschen
function remove(position) {
    item.splice(position, 1);
}


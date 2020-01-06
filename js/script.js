function saveCookiesCheckBox() {

    for (let i = 1; i < 7; i++) {
        localStorage.setItem(i, document.getElementById(i).checked);
    }
}

function loadCookiesCheckBox(id) {
    var checked = JSON.parse(localStorage.getItem(id));
    document.getElementById(id).checked = checked;
};

function deleteCookiesCheckBox() {
    location.reload();
    localStorage.clear();
}

for (let i = 1; i < 7; i++) {
    loadCookiesCheckBox(i);
}

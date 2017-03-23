//Przykład na wykorzystanie localStorage :)

(function() {
//
// function FormSaver(form) {
//     this.form = form;
//     this.fields = this.form.querySelectorAll("input[name]:not([type='submit'])");
//     this.formId = this.form.getAttribute("id");
//     this.fieldsValues = {};
//
//     this.addSavingToFields();
//
// }
//
// FormSaver.prototype.addSavingToFields = function () {
//     for (var i = 0; i < this.fields.length; i++) {
//         this.fields[i].onchange = this.saveField.bind(this);
//     }
// };
//
// FormSaver.prototype.saveField = function (e) {
//     var that = e.target;
//     this.fieldsValues[that.getAttribute("name")] = that.value;
//
//     this.saveToLocalStorage();
//
// };
//
// FormSaver.prototype.saveToLocalStorage = function () {
//     window.localStorage.setItem( this.formId, JSON.stringify(this.fieldsValues) );
// };
//
// if( window.localStorage ) {
//     var formToSave = new FormSaver( document.querySelector("#form") );
// }
//







function LocalDB(dBase) {
    this.name = dBase;
}

LocalDB.prototype.save = function(key, value) {
      var keyName = this.name + "." + key;
      this.keyName = JSON.stringify(value);
      window.localStorage.setItem(keyName, JSON.stringify(value));
  };

LocalDB.prototype.get = function (key) {
    var keyName = this.name + "." + key;
    var wartosc = window.localStorage.getItem(keyName);
    var parsedObj = JSON.parse(wartosc);

    console.log(wartosc);
};

// ---------------------------------------------------------//
// Tworzona jest nowa instancja,
// w której należy zapamiętać nazwę "DB1"
var DB1 = new LocalDB("DB1");

// Jakiś obiekt do zapisania
var janek = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 32
};

// Na prototypie LocalDB znajdować się
// musi metoda save, która przyjmuje
// parę klucz-wartość, a wartość powinna
// być przed zapisaniem przepuszczona
// przez JSON.stringify
DB1.save("janek", janek);

// Prototyp LocalDB powinien również
// posiadać metodę get, która odczyta
// podany klucz, przepuszczając wartość
// przez JSON.parse
DB1.get("janek");

// Porada. Aby móżna było tworzyć bazy danych
// o różnych nazwach, przy zapisywaniu poszczególnych
// danych, do klucza dodawaj nazwę bazy danych,
// np. "DB1.janek"


})();

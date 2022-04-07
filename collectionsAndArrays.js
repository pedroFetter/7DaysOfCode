var fruits = [];
var milks = [];
var candys = [];
var fronzens = [];
var food = "";
var category = "";

let msg = 1;

while (msg != 2) {

    msg = prompt("Você deseja adicionar uma comida na lista de compras?", "Digite 1 para sim ou 2 para não.");

    while (msg != 1 && msg != 2) {

        alert("Opção Inválida!");
        msg = prompt("Você deseja adicionar uma comida na lista de compras?", "Digite 1 para sim ou 2 para não.");

    };

    if (msg == 2) {

        break;

    } else {

        food = prompt("Qual comida você deseja inserir?", "Digite aqui a comida...");
        category = prompt(`Em qual categoria de comida ${food} se encaixa? Digite 1 para frutas, 2 para laticínios, 3 para doces ou 4 para congelados`, "Digite aqui...");

        while (category != 1 && category != 2 && category != 3 && category != 4){

            alert("Categoria Inválida!");
            category = prompt(`Em qual categoria de comida ${food} se encaixa? Digite 1 para frutas, 2 para laticínios, 3 para doces ou 4 para congelados`, "Digite aqui...");

        };

        if (category == 1) {

            fruits.push(food);

        } else if (category == 2) {

            milks.push(food);

        } else if (category == 3) {

            candys.push(food);

        } else if (category == 4) {

            fronzens.push(food);

        };

    };

};

if (fruits.length < 1 && milks.length < 1 && candys.length < 1 && fronzens.length < 1){

    alert("Sua lista de compras está vazia!")

} else{

    alert(`Lista de compras:\n  Frutas: ${fruits}\n  Laticínios: ${milks}\n  Doces: ${candys}\n  Congelados: ${fronzens}`);

};

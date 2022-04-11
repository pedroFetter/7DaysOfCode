var fruits = [];
var milks = [];
var candys = [];
var fronzens = [];
var food = "";
var category = "";
var remove = "";
var pos = "";
var removeCategory = "";
var removefood = "";


let msg = 1;

while (msg != 2) {

    if (fruits.length < 1 && milks.length < 1 && candys.length < 1 && fronzens.length < 1) {

        msg = prompt("Você deseja adicionar uma comida na lista de compras?", "Digite 1 para sim ou 2 para não.");

        while (msg != 1 && msg != 2) {

            alert("Opção Inválida!");
            msg = prompt("Você deseja adicionar uma comida na lista de compras?", "Digite 1 para sim ou 2 para não.");

        };

    } else {

        msg = prompt("Você deseja adicionar ou remover uma comida; ou encerrar a lista de compras? Digite 1 para adicionar, 3 para remover ou 2 para encerrar.");

        while (msg != 1 && msg != 2 && msg != 3) {

            alert("Opção Inválida!");
            msg = prompt("Você deseja adicionar ou remover uma comida; ou encerrar a lista de compras? Digite 1 para adicionar, 3 para remover ou 2 para encerrar.");

        };

    };

    if (msg == 2) {

        break;

    } else if (msg == 1) {

        food = prompt("Qual comida você deseja inserir?", "Digite aqui a comida...");
        category = prompt(`Em qual categoria de comida ${food} se encaixa? Digite 1 para frutas, 2 para laticínios, 3 para doces ou 4 para congelados`, "Digite aqui...");

        while (category != 1 && category != 2 && category != 3 && category != 4) {

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

    } else {

        if (fruits.length < 1 && milks.length < 1 && candys.length < 1 && fronzens.length < 1) {

            alert("Sua lista de compras está vazia!")

        } else {

            remove = prompt(` Qual item você deseja excluir da lista de compras?\n  Frutas: ${fruits}\n  Laticínios: ${milks}\n  Doces: ${candys}\n  Congelados: ${fronzens}`);

            if (fruits.indexOf(remove) != -1) {

                fruits.splice(fruits.indexOf(remove), 1);
                alert(`${remove} foi excluído com sucesso!`);

            } else if (milks.indexOf(remove) != -1) {

                milks.splice(milks.indexOf(remove), 1);
                alert(`${remove} foi excluído com sucesso!`);

            } else if (candys.indexOf(remove) != -1) {

                candys.splice(candys.indexOf(remove), 1);
                alert(`${remove} foi excluído com sucesso!`);

            } else if (fronzens.indexOf(remove) != -1) {

                fronzens.splice(fronzens.indexOf(remove), 1);
                alert(`${remove} foi excluído com sucesso!`);

            } else {

                alert("Alimento não encontrado!")
                
            };

        };

    };

};

alert(`Lista de compras:\n  Frutas: ${fruits}\n  Laticínios: ${milks}\n  Doces: ${candys}\n  Congelados: ${fronzens}`);

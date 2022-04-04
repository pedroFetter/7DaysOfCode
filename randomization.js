var number = Math.floor(Math.random() * (10 - 0 + 1) + 0);
var chance = prompt("Adivinhe o número de 1 a 10", "Digite aqui o número...");

if (chance == null || chance == "") {

    alert("Pena não querer participar da brincadeira, até a próxima!");

} else {

    for (var i = 2; i <= 3; i++) {

        if (chance == number) {

            chance = true;
            break;

        } else {

            chance = prompt(`Pena, ainda não foi dessa vez. Tente novamente (Chance ${i} de 3)`, "Digite aqui um número de 1 a 10...");

        };

    };

    if (chance === true) {

        alert(`Parabéns! Você acertou é o número ${number}!`);

    } else {

        alert(`Pena, você não acertou. O número correto é ${number}. Mais sorte da próxima vez! ;)`)

    };

};

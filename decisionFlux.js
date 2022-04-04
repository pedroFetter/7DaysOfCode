var name = prompt("Como você prefere ser chamado?", "Digite o seu nome...");
var area = prompt(`Olá ${name}! Qual área de desenvolvimento de software você deseja seguir?`, "Digite 1 para Front-End ou 2 para Back-End");
var learn;
var special;
var know = [];
var valid = false;

while (valid === false) {

    if (area == 1) {

        area = "Front-End";
        learn = prompt(`Você escolheu Front-End, ${name}! Gostaria de aprender sobre?`, "Digite 1 para React ou 2 para Vue");

        if (learn == 1) {

            valid = true;
            alert(`Muito bem ${name}, você quer seguir ${area} e aprender sobre React Parabéns! Vamos seguir...`);

        } else if (learn == 2) {

            valid = true;
            alert(`Muito bem ${name}, você quer seguir ${area} e aprender sobre Vue Parabéns! Vamos seguir...`);

        } else {

            alert("Opção inválida!");
            learn = prompt(`Você escolheu Front-End, ${name}! Gostaria de aprender sobre?`, "Digite 1 para React ou 2 para Vue");

        }

    } else if (area == 2) {

        area = "Back-End";
        learn = prompt(`Você escolheu Back-End, ${name}! Gostaria de aprender sobre?`, "Digite 1 para C# ou 2 para Java");

        if (learn == 1) {

            valid = true;
            alert(`Muito bem ${name}, você quer seguir ${area} e aprender sobre C# Parabéns! Vamos seguir...`);

        } else if (learn == 2) {

            valid = true;
            alert(`Muito bem ${name}, você quer seguir ${area} e aprender sobre Java Parabéns! Vamos seguir...`);

        } else {

            alert("Opção inválida!");
            learn = prompt(`Você escolheu Back-End ${name}! Gostaria de aprender sobre`, "Digite 1 para C# ou 2 para Java");

        }

    } else {

        alert("Opção inválida!");
        area = prompt(`Olá ${name}! Qual área de desenvolvimento de software você deseja seguir?`, "Digite 1 para Front-End ou 2 para Back-End");

    };

};

valid = false;
special = prompt(`Parabéns por ter chegado até aqui ${name}! Agora, o que você deseja?`, `Digite 1 para continuar se specializando em ${area} ou 2 para se tornar Fullstack`);

while (valid === false) {

    if (special == 1) {

        valid = true;
        alert(`Muito bem ${name}! Continue assim! Sempre se aperfeiçoando em ${area}`);

    } else if (special == 2) {

        if (area === "Front-End") {

            valid = true;
            alert(`Muito bem ${name}! Continue assim! Estudando ${area} e já de olho no Back-End!`);

        } else if (area === "Back-End") {

            valid = true;
            alert(`Muito bem ${name}! Continue assim! Estudando ${area} e já de olho no Front-End!`);

        };

    } else {

        alert("Opção inválida!");
        special = prompt(`Parabéns por ter chegado até aqui ${name}! Agora, o que você deseja?`, `Digite 1 para continuar se specializando em ${area} ou 2 para se tornar Fullstack`);

    };

};

know[0] = prompt(`Por fim ${name}, quais tecnologias mais você gostaria de se especializar ou conhecer?`, "Digite uma tecnologia")

if (know[0] == null || know[0] == "") {

    alert(`Muito obrigado por sua participação ${name}! Quem sabe em uma próxima vamos aprender sobre outras tecnologias ;)`);

} else {

    for (var i = 0; ;) {

        if (know[i] == null || know[i] == "") {

            alert(`Muito obrigado por sua participação ${name}! Suas tecnologias foram: ${know}`);
            break;

        } else {

            i++;
            know[i] = prompt("Tem mais alguma tecnologia que você gostaria de aprender?", "Adicione uma tecnologia");

        }


    };

};

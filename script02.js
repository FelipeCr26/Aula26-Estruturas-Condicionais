//baseado no comando que for informado,
//mostrar a lampada ligada ou desligada.

const comando = prompt("Informe o comando para a lampada (Ligar/desligar): ")

const elementoimagem = document.createElement("img")

let estado

switch (comando) {
    case "Ligado":
        elementoimagem.src = "./Assets/ligada.png"
        break;

    case "Desligado":
        elementoimagem.src = "./Assets/desligada.png"
        break;

    default:
        break;
}

if (elementoimagem.src != null) {
    document.body.appendChild(elementoimagem)
}
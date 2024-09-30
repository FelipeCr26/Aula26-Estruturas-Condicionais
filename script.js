const dividendo= Number(prompt("Informe o Dividendo"))
const divisor= Number(prompt("Informe o Divisor"))

console.log(`Dividendo ${dividendo}`)
console.log("Divisor " + divisor)

let resultado = 0

// Se o valor divisor for menor ou 
//igual a zero não faz o calculo.
//Senão pode seguir com o calculo.

if (divisor != 0) {
    resultado = dividendo / divisor
} else {
    resultado = 1
}

const mensagem = `A divisão de ${dividendo} por ${divisor} é igual a ${resultado}`

const elementomensagem = document.createElement("h1")
elementomensagem.textContent = mensagem
document.body.appendChild(elementomensagem)


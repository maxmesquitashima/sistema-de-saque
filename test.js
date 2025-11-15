// Simulação das funções gets e print da DIO
let inputIndex = 0;
const inputs = [
    "deposito 100, saque 50, deposito 200",
    "deposito 1000, saque 200, saque 300, deposito 500",
    "saque 100, deposito 500, saque 50",
    "deposito 250"
];

function gets() {
    return inputs[inputIndex++];
}

function print(text) {
    console.log(text);
}

// Código original
function calcularSaldo(operacoes) {
    // Inicializa o saldo como zero
    let saldo = 0;

    // Divide as operações em um array usando a vírgula como delimitador
    const listaOperacoes = operacoes.split(',');

    // Percorre cada operação no array
    listaOperacoes.forEach(operacao => {
        // Remove espaços em branco e divide a operação em tipo e valor
        const [tipo, valorStr] = operacao.trim().split(' ');
        
        // Verifica se valorStr existe antes de tentar a conversão, para evitar erros.
        if (!valorStr) return; 
        
        const valor = parseInt(valorStr); // Converte o valor para um número inteiro

        // TODO: Verifique se o tipo é 'deposito' ou 'saque' e atualize o saldo
        
        // Verifica o tipo da operação e atualiza o saldo
        if (tipo === 'deposito') {
            saldo += valor; // Adiciona o valor se for depósito
        } else if (tipo === 'saque') {
            saldo -= valor; // Subtrai o valor se for saque
        }
    });

    // Retorna o saldo total formatado como string
    return saldo.toString();
}

// Testes
console.log("=== TESTE 1 ===");
console.log("Entrada: deposito 100, saque 50, deposito 200");
console.log("Esperado: 250");
console.log("Resultado:", calcularSaldo(gets()));

console.log("\n=== TESTE 2 ===");
console.log("Entrada: deposito 1000, saque 200, saque 300, deposito 500");
console.log("Esperado: 1000");
console.log("Resultado:", calcularSaldo(gets()));

console.log("\n=== TESTE 3 ===");
console.log("Entrada: saque 100, deposito 500, saque 50");
console.log("Esperado: 350");
console.log("Resultado:", calcularSaldo(gets()));

console.log("\n=== TESTE 4 ===");
console.log("Entrada: deposito 250");
console.log("Esperado: 250");
console.log("Resultado:", calcularSaldo(gets()));

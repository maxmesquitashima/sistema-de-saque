````markdown
# Bank Balance Calculator

## Description

This project implements a function to calculate bank balance based on a  
sequence of deposit and withdrawal operations.

## How it works

The `calcularSaldo()` function receives a string containing banking operations  
separated by commas, processes each operation and returns the final balance.

### Input Format

```
deposit <amount>, withdrawal <amount>, deposit <amount>
```

### Examples

- **Input:** `deposit 100, withdrawal 50, deposit 200`
- **Output:** `250`

- **Input:** `deposit 1000, withdrawal 200, withdrawal 300, deposit 500`
- **Output:** `1000`

## Files

- `index.js` - Main code for submission on the DIO platform
- `test.js` - Test script with use cases

## How to Test

Execute the Node test script:

```bash
node test.js
```

## Run in the browser (UI)

Open `index.html` in your browser or run a simple local server and visit `http://localhost:3000`:

```bash
# using Python 3
python3 -m http.server 3000
```

Files added for browser UI:

- `index.html` — simple web page to enter operations and show the result
- `style.css` — UI styling
- `app.js` — contains `calcularSaldo` wiring for the page (accepts PT/EN keywords)

Keyboard: press `Ctrl+Enter` (or Cmd+Enter on macOS) inside the input to calculate.

## Implemented Logic

1. Initializes the balance with zero value
2. Splits the input string into individual operations
3. For each operation:
   - Extracts the type (deposit/withdrawal) and the amount
   - If it's a deposit, adds the amount to the balance
   - If it's a withdrawal, subtracts the amount from the balance
4. Returns the total balance as a string

## Technologies

- JavaScript (Node.js)

---

# Calculadora de Saldo Bancário

## Descrição

Este projeto implementa uma função para calcular o saldo bancário baseado em  
uma sequência de operações de depósito e saque.

## Funcionamento

A função `calcularSaldo()` recebe uma string contendo operações bancárias  
separadas por vírgula, processa cada operação e retorna o saldo final.

### Formato de Entrada

```
deposito <valor>, saque <valor>, deposito <valor>
```

### Exemplos

- **Entrada:** `deposito 100, saque 50, deposito 200`
- **Saída:** `250`

- **Entrada:** `deposito 1000, saque 200, saque 300, deposito 500`
- **Saída:** `1000`

## Arquivos

- `index.js` - Código principal para submissão na plataforma DIO
- `test.js` - Script de testes com casos de uso

## Como Testar

Execute o script de testes Node:

```bash
node test.js
```

## Executar no navegador (UI)

Abra `index.html` no navegador ou execute um servidor local simples e acesse `http://localhost:3000`:

```bash
# usando Python 3
python3 -m http.server 3000
```

Arquivos adicionados para a interface:

- `index.html` — página para inserir operações e visualizar o resultado
- `style.css` — estilos da interface
- `app.js` — contém a função `calcularSaldo` adaptada e integrada à página (aceita palavras PT/EN)

Teclado: pressione `Ctrl+Enter` (ou Cmd+Enter no macOS) dentro do campo  
para calcular.

## Lógica Implementada

1. Inicializa o saldo com valor zero
2. Divide a string de entrada em operações individuais
3. Para cada operação:
   - Extrai o tipo (deposito/saque) e o valor
   - Se for depósito, adiciona o valor ao saldo
   - Se for saque, subtrai o valor do saldo
4. Retorna o saldo total como string

## Tecnologias

- JavaScript (Node.js)
````

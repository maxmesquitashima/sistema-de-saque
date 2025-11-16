// Calcular saldo (adaptado do código original)
function calcularSaldo(operacoes) {
  if (!operacoes || typeof operacoes !== "string") return "0";
  let saldo = 0;
  const listaOperacoes = operacoes.split(",");
  listaOperacoes.forEach((operacao) => {
    const [tipo, valorStr] = operacao.trim().split(" ");
    if (!valorStr) return;
    const valor = parseInt(valorStr, 10);
    if (isNaN(valor)) return;
    if (tipo === "deposito" || tipo === "deposit") {
      saldo += valor;
    } else if (tipo === "saque" || tipo === "withdrawal") {
      saldo -= valor;
    }
  });
  return saldo.toString();
}

// DOM
const inputOps = document.getElementById("inputOps");
const calcBtn = document.getElementById("calcBtn");
const resetBtn = document.getElementById("resetBtn");
const outputSaldo = document.getElementById("outputSaldo");

calcBtn.addEventListener("click", () => {
  const resultado = calcularSaldo(inputOps.value);
  outputSaldo.textContent = resultado;
});

resetBtn.addEventListener("click", () => {
  inputOps.value = "";
  outputSaldo.textContent = "0";
});

// Allow pressing Ctrl+Enter to calculate
inputOps.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") calcBtn.click();
});

// --- Saque (ATM) functionality ported from index.js ---
function calcularSaque(valor) {
  if (typeof valor !== "string" && typeof valor !== "number") {
    return "Insira uma quantia valida";
  }
  const raw = String(valor).trim();
  if (!/^[0-9]+$/.test(raw)) {
    return "Insira uma quantia valida";
  }
  const valorSaque = parseInt(raw, 10);
  if (
    isNaN(valorSaque) ||
    valorSaque <= 0 ||
    valorSaque < 10 ||
    valorSaque > 1000 ||
    valorSaque % 10 !== 0
  ) {
    return "Insira uma quantia valida";
  }

  let remaining = valorSaque;
  let notas50 = 0;
  let notas20 = 0;
  let notas10 = 0;

  const resto = remaining % 100;
  if (
    (resto === 60 || resto === 80 || resto === 10 || resto === 30) &&
    remaining >= 50
  ) {
    notas50 = Math.floor(remaining / 50) - 1;
    if (notas50 < 0) notas50 = 0;
    remaining -= notas50 * 50;
  } else {
    notas50 = Math.floor(remaining / 50);
    remaining -= notas50 * 50;
  }

  notas20 = Math.floor(remaining / 20);
  remaining -= notas20 * 20;

  notas10 = Math.floor(remaining / 10);
  remaining -= notas10 * 10;

  if (remaining !== 0) {
    return "Insira uma quantia valida";
  }

  return `50:${notas50} 20:${notas20} 10:${notas10}`;
}

// Wire DOM for saque
const withdrawInput = document.getElementById("withdrawInput");
const withdrawBtn = document.getElementById("withdrawBtn");
const withdrawReset = document.getElementById("withdrawReset");
const withdrawOutput = document.getElementById("withdrawOutput");

withdrawBtn.addEventListener("click", () => {
  const saldoAtual = parseInt(outputSaldo.textContent, 10);
  const valorSaque = parseInt(withdrawInput.value.trim(), 10);
  if (isNaN(valorSaque)) {
    withdrawOutput.textContent = "Insira uma quantia valida";
    return;
  }
  if (valorSaque > saldoAtual) {
    withdrawOutput.textContent = "Saldo insuficiente";
    return;
  }
  const res = calcularSaque(withdrawInput.value);
  withdrawOutput.textContent = res;
});

withdrawReset.addEventListener("click", () => {
  withdrawInput.value = "";
  withdrawOutput.textContent = "-";
});

withdrawInput.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") withdrawBtn.click();
});

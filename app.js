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

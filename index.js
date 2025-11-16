if (typeof gets === "undefined" || typeof print === "undefined") {
  const fs = require("fs");
  const data = fs.readFileSync(0, "utf8");
  const lines = data.replace(/\r/g, "").split("\n");
  let cursor = 0;
  global.gets = () => lines[cursor++];
  global.print = (text) => console.log(text);
}

function calcularSaque(valor) {
  // entrada deve ser string de dígitos sem espaços
  if (typeof valor !== "string" && typeof valor !== "number") {
    return "Insira uma quantia valida";
  }
  const raw = String(valor).trim();
  if (!/^[0-9]+$/.test(raw)) {
    return "Insira uma quantia valida";
  }
  const valorSaque = parseInt(raw, 10);
  if (
    Number.isNaN(valorSaque) ||
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

  // Estratégia: minimizar número de notas. Prioriza 50, mas ajusta
  // para evitar combinações problemáticas (ex.: 60, 80).
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

// pega primeira linha de entrada (plataforma) e imprime resultado.
const input = typeof gets === "function" ? gets() : undefined;
if (input !== undefined && input !== "") {
  print(calcularSaque(input));
}

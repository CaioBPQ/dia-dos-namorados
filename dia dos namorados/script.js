const inicio = new Date("2024-10-05T00:00:00");

function atualizarContador() {
  const agora = new Date();

  let anos = agora.getFullYear() - inicio.getFullYear();
  let meses = agora.getMonth() - inicio.getMonth();
  let dias = agora.getDate() - inicio.getDate();

  if (dias < 0) {
    meses -= 1;
    const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    dias += ultimoDiaMesAnterior;
  }

  if (meses < 0) {
    anos -= 1;
    meses += 12;
  }

  // Calcular diferença total em milissegundos para pegar horas, minutos e segundos
  const diffMs = agora - inicio;
  const diffSeg = Math.floor(diffMs / 1000);
  const horas = Math.floor((diffSeg % (24 * 3600)) / 3600);
  const minutos = Math.floor((diffSeg % 3600) / 60);
  const segundos = diffSeg % 60;

  const partes = [];
  if (anos) partes.push(`${anos} ano${anos > 1 ? 's' : ''}`);
  if (meses) partes.push(`${meses} mês${meses > 1 ? 'es' : ''}`);
  if (dias) partes.push(`${dias} dia${dias > 1 ? 's' : ''}`);
  if (horas) partes.push(`${horas} hora${horas > 1 ? 's' : ''}`);
  if (minutos) partes.push(`${minutos} minuto${minutos > 1 ? 's' : ''}`);
  if (segundos || partes.length === 0) partes.push(`${segundos} segundo${segundos > 1 ? 's' : ''}`);

  document.getElementById("contador").innerText =
    `Estamos juntos há ${partes.join(', ').replace(/,([^,]*)$/, ' e$1')} ❤️`;
}

atualizarContador();
setInterval(atualizarContador, 1000);

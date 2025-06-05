


  const inicio = new Date("2024-10-05T00:00:00"); // data de início do relacionamento

  function atualizarContador() {
    const agora = new Date();
    let diffMs = agora - inicio;

    const segundosTotais = Math.floor(diffMs / 1000);

    const anos = Math.floor(segundosTotais / (365.25 * 24 * 3600));
    const meses = Math.floor((segundosTotais % (365.25 * 24 * 3600)) / (30.44 * 24 * 3600));
    const semanas = Math.floor((segundosTotais % (30.44 * 24 * 3600)) / (7 * 24 * 3600));
    const dias = Math.floor((segundosTotais % (7 * 24 * 3600)) / (24 * 3600));
    const horas = Math.floor((segundosTotais % (24 * 3600)) / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;

    const partes = [];
    if (anos) partes.push(`${anos} ano${anos > 1 ? 's' : ''}`);
    if (meses) partes.push(`${meses} mês${meses > 1 ? 'es' : ''}`);
    if (semanas) partes.push(`${semanas} semana${semanas > 1 ? 's' : ''}`);
    if (dias) partes.push(`${dias} dia${dias > 1 ? 's' : ''}`);
    if (horas) partes.push(`${horas} hora${horas > 1 ? 's' : ''}`);
    if (minutos) partes.push(`${minutos} minuto${minutos > 1 ? 's' : ''}`);
    if (segundos || partes.length === 0) partes.push(`${segundos} segundo${segundos > 1 ? 's' : ''}`);

    document.getElementById("contador").innerText = `Estamos juntos há ${partes.join(', ').replace(/,([^,]*)$/, ' e$1')} ❤️`;
  }

  // Atualiza a cada segundo
  atualizarContador();
  setInterval(atualizarContador, 1000);


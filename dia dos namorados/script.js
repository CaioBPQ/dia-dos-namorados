const inicio = new Date("2024-10-05");
const hoje = new Date();
const diff = Math.floor((hoje - inicio) / (1000 * 60 * 60 * 24));
document.getElementById("contador").innerText = `Estamos juntos há ${diff} dias ❤️`;

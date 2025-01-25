const symbols = ["🍒", "🍋", "🔔", "⭐", "🍉", "🍇", "💎", "🪙", "🎰", "🍓", "🥝", "🍍"];

let credits = 10;
const welcomeMessages = [
  "Boa sorte, ",
  "Prepare-se para vencer, ",
  "Que os símbolos estejam a seu favor, ",
  "Vamos girar e ganhar, ",
  "Bem-vindo ao jogo, "
];

function validateRegistration() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const nameParts = name.split(" ");

  if (nameParts.length < 2) {
    alert("Por favor, insira seu nome completo (nome e sobrenome).");
    return false;
  }

  const phoneRegex = /^\d{11}$/;
  if (!phoneRegex.test(phone)) {
    alert("Por favor, insira um número de telefone válido com 11 dígitos.");
    return false;
  }

  return true;
}

function validateAndStartGame() {
  if (validateRegistration(true)) {
    const name = document.getElementById("name").value.trim();
    const welcomeMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    document.getElementById("welcomeMessage").innerText = welcomeMessage + name;
    document.getElementById("registrationForm").classList.add("hidden");
    document.getElementById("gameScreen").classList.remove("hidden");
  }
}

function openPixModal() {
  document.getElementById("pixModal").style.display = "flex";
}

function closePixModal() {
  document.getElementById("pixModal").style.display = "none";
}

function addCredits(amount) {
  credits += amount;
  document.getElementById("credits").innerText = `Créditos: ${credits}`;
  closePixModal();
}

function spinReels() {
  if (credits <= 0) {
    alert("Sem créditos! Recarregue para continuar jogando.");
    return;
  }

  credits--;
  document.getElementById("credits").innerText = `Créditos: ${credits}`;

  const reels = Array.from({ length: 9 }, () => symbols[Math.floor(Math.random() * symbols.length)]);
  for (let i = 1; i <= 9; i++) {
    document.getElementById(`reel${i}`).innerText = reels[i - 1];
  }

  const resultMessage = checkWin(reels);
  document.getElementById("result").innerText = resultMessage;

  if (resultMessage.includes("Ganhou")) {
    triggerFireworks();
  }
}

/*function checkWin(reels) {
  const allEqual = reels.every((symbol) => symbol == reels[0]);
  if (allEqual) {
    credits += 50;
    document.getElementById("credits").innerText = `Créditos: ${credits}`;
    return "Parabéns! Você Ganhou +50 Créditos!";
  }
  return "Boa sorte na próxima rodada!";
}*/

function checkWin(reels) {
  // As 9 posições dos reels são distribuídas em um grid 3x3
  // Vamos reformatar os reels para um formato de matriz 3x3 para facilitar a verificação
  const grid = [
    [reels[0], reels[1], reels[2]],
    [reels[3], reels[4], reels[5]],
    [reels[6], reels[7], reels[8]]
  ];

  // Verifica as linhas horizontais
  for (let i = 0; i < 3; i++) {
    if (grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) {
      credits += 50; // Adiciona 50 créditos ao saldo
      document.getElementById("credits").innerText = `Créditos: ${credits}`;
      return "Parabéns! Você Ganhou +50 Créditos!";
    }
  }

  // Verifica as colunas verticais
  for (let i = 0; i < 3; i++) {
    if (grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i]) {
      credits += 50; // Adiciona 50 créditos ao saldo
      document.getElementById("credits").innerText = `Créditos: ${credits}`;
      return "Parabéns! Você Ganhou +50 Créditos!";
    }
  }

  // Verifica as diagonais
  if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
    credits += 50; // Adiciona 50 créditos ao saldo
    document.getElementById("credits").innerText = `Créditos: ${credits}`;
    return "Parabéns! Você Ganhou +50 Créditos!";
  }
  if (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
    credits += 50; // Adiciona 50 créditos ao saldo
    document.getElementById("credits").innerText = `Créditos: ${credits}`;
    return "Parabéns! Você Ganhou +50 Créditos!";
  }

  // Se não houver vitória
  return "Boa sorte na próxima rodada!";
}
  

function triggerFireworks() {
  const canvas = document.getElementById("fireworksCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const fireworks = [];

  function createFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    fireworks.push({ x, y, radius: 0, alpha: 1 });
  }

  function drawFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((firework, index) => {
      ctx.beginPath();
      ctx.arc(firework.x, firework.y, firework.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 0, ${firework.alpha})`;
      ctx.fill();
      firework.radius += 2;
      firework.alpha -= 0.02;
      if (firework.alpha <= 0) fireworks.splice(index, 1);
    });

    if (fireworks.length > 0) {
      requestAnimationFrame(drawFireworks);
    }
  }

  createFirework();
  createFirework();
  createFirework();
  drawFireworks();

  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 3000);
}

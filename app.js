let userName = "";

const gifts = [
  "Jogo de panelas  ",
  "Frigideira antiaderente",
  "Forma de bolo quadrada  ",
  "Forma de bolo redonda ",
  "Forma de pudim  ",
  "Panela de Pressão  ",
  "Assadeiras",
  "Escorredor de louça  ",
  "Escorredor de macarrão e forma de gelo ",
  "Jogo de potes plásticos e panos de prato  ",
  "Potes de vidro  ",
  "Garrafa de água  ",
  "Tábua de corte (madeira ou vidro) ",
  "Conjunto de facas  ",
  "tula, pegador ",
  "Abridor de garrafa e vinho e peneira  ",
  "Triturador de alho  ",
  "Triturador de alimentos  ",
  "Liquidificador  ",
  "Mixer ",
"Sanduicheira  ",
"Cafeteira   ",
"Jarra de vidro ",
"Kit de churrasco  ",
"Porta mantimentos  ",
"Lixeira de cozinha  ",
"Tapete passadeira  ",
"Lixeira banheiro ",
"Cabides + varal de meias ",
"Varal de chão ",
"Esfregão / Mop",
"Jogo de pratos ",
"Jogo de copos ",
"Taças vinho  ",
"Taças de Agua ",
"Taças de Cerveja ",
"Caneca de Chopp ",
"Jogos de Xícaras de Café ",
"Baleiro de Vidro ",
"Boleira de Vidro ",
"Sal e Pimentero ",
"Travessas de Vidro ",
"Jogo de Sobremesas ",
"Garrafa de Café ",
"Fruteira de Mesa ",

];

// Carrega a lista de presentes
const giftSelect = document.getElementById("giftSelect");

gifts.forEach(gift => {
  const option = document.createElement("option");
  option.value = gift;
  option.textContent = gift;
  giftSelect.appendChild(option);
});

function login() {
  const name = document.getElementById("name").value;
  if (!name) {
    alert("Digite seu nome");
    return;
  }
  userName = name;
  alert("Bem-vindo(a), " + userName + " 💖");
}

function setPresence(presente) {
  if (!userName) {
    alert("Faça o login primeiro");
    return;
  }
  alert(
    presente
      ? userName + " confirmou presença ✅"
      : userName + " não poderá comparecer ❌"
  );
}

function chooseGift() {
  if (!userName) {
    alert("Faça o login primeiro");
    return;
  }
  const gift = giftSelect.value;
  alert(userName + " escolheu: " + gift + " 🎁");
}

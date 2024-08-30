// Array com as mensagens
const messages = [
    "Mais um mês se passou",
    "E continuamos aprendendo sobre nós",
    "A cada dia nos amamos mais",
    "Não importa o quanto eu cite suas qualidades, pois você é indescritível",
    "Tão doce, querida, meiga e gentil",
    "Feliz 4 meses meu bem",
    "https://youtu.be/Sz7LQUHRxTI copie e veja no youtube"
];

// Index da mensagem atual
let currentIndex = -1; // Começa em -1 para que o primeiro clique mostre a primeira mensagem

// Função para trocar a mensagem
function changeMessage() {
    // Alterna entre as mensagens
    currentIndex = (currentIndex + 1) % messages.length;
    // Atualiza o texto no div
    document.getElementById('div-texto').textContent = messages[currentIndex];
}

// Adiciona o evento de clique ao botão
document.getElementById('change-text-button').addEventListener('click', changeMessage);

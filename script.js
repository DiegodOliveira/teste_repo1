// Array com as mensagens
const messages = [
    "Mais um mês se passou",
    "E continuamos aprendendo sobre nós",
    "A cada dia nos amamos mais",
    "Não importa o quanto eu cite suas qualidades, pois você é indescritível",
    "Tão doce, querida, meiga e gentil",
    "Feliz 4 meses meu bem"
];

// Index da mensagem atual
let currentIndex = -1; // Começa em -1 para que o primeiro clique mostre a primeira mensagem

// Função para trocar a mensagem ou redirecionar
function changeMessage() {
    // Incrementa o índice
    currentIndex += 1;

    // Verifica se o índice ultrapassou o último índice do array
    if (currentIndex < messages.length) {
        // Atualiza o texto no div
        document.getElementById('div-texto').textContent = messages[currentIndex];
    } else {
        // Redireciona para outra página após a última mensagem
        window.location.href = "SOldieroflove.html"; // Substitua "pagina2.html" pela URL desejada
    }
}

// Adiciona o evento de clique ao botão
document.getElementById('change-text-button').addEventListener('click', changeMessage);

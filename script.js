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

// Função para trocar a mensagem ou inserir o vídeo
function changeMessage() {
    // Incrementa o índice
    currentIndex += 1;

    // Verifica se o índice ultrapassou o último índice do array
    if (currentIndex < messages.length) {
        // Atualiza o texto no div
        document.getElementById('div-texto').textContent = messages[currentIndex];
    } else {
        // Substitui o conteúdo do div pelo vídeo e a mensagem final
        document.getElementById('div-texto').innerHTML = `
            <iframe width="864" height="486" src="https://www.youtube.com/embed/Sz7LQUHRxTI" title="Soldier Of Love - Pearl Jam (Legendado)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h2>caso o vídeo não funcione clique em assistir no youtube por favor</h2>
        `;
    }
}

// Adiciona o evento de clique ao botão
document.getElementById('change-text-button').addEventListener('click', changeMessage);

function alternarResposta() {    
    const resposta = this.parentNode.nextElementSibling;
    resposta.classList.toggle('ativo');
    const aria_expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !aria_expanded);
}

// Adiciona o evento de clique para as perguntas
const perguntas = document.querySelectorAll('.duvida-pergunta-texto');
perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', alternarResposta);
});

// Adiciona o evento de clique para os botões
const botoes = document.querySelectorAll('.duvida-botao');
botoes.forEach(botao => {
    botao.addEventListener('click', alternarResposta);
});

// Função para redirecionar para index.html
function irParaIndex() {
    window.location.href = "index.html";
}

// Função para redirecionar para Inscricao.html
function irParaInscricao() {
    window.location.href = "Inscricao.html";
}

// Função para redirecionar para PerguntasRespostas.html
function irParaPerguntas() {
    window.location.href = "PerguntasRespostas.html";
}

// barrinnha index
document.addEventListener("DOMContentLoaded", function() {
    const expandableItems = document.querySelectorAll('.expandable');
    
    expandableItems.forEach(item => {
        item.addEventListener('click', () => {
            const subItems = item.parentNode.querySelectorAll('.sub-items');
            subItems.forEach(subItem => {
                if (subItem.style.display === 'none' || subItem.style.display === '') {
                    subItem.style.display = 'block';
                    subItem.style.height = '0px'; // Adiciona altura inicial de 0px
                    subItem.style.paddingTop = '0px'; // Adiciona preenchimento superior inicial de 0px
                    subItem.style.paddingBottom = '0px'; // Adiciona preenchimento inferior inicial de 0px
                    subItem.style.opacity = '0'; // Adiciona opacidade inicial de 0
                    setTimeout(() => {
                        subItem.style.height = 'auto'; // Altera altura para "auto" após um pequeno intervalo
                        subItem.style.paddingTop = '10px'; // Adiciona preenchimento superior
                        subItem.style.paddingBottom = '10px'; // Adiciona preenchimento inferior
                        subItem.style.opacity = '1'; // Altera opacidade para 1
                    }, 10);
                } else {
                    subItem.style.height = '0px'; // Reduz a altura de volta a 0
                    subItem.style.paddingTop = '0px'; // Remove o preenchimento superior
                    subItem.style.paddingBottom = '0px'; // Remove o preenchimento inferior
                    subItem.style.opacity = '0'; // Altera opacidade para 0
                    setTimeout(() => {
                        subItem.style.display = 'none'; // Oculta o elemento após a animação
                    }, 300);
                }
            });
        });
    });
});


// login script
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
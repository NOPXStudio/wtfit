// JavaScript for Hamburger Menu Toggle
// Seleciona o botão do hambúrguer e o menu mobile
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuLinks = mobileMenu.querySelectorAll('a');

// Adiciona um ouvinte de evento de clique ao botão do hambúrguer
hamburger.addEventListener("click", function() {
    // Alterna a classe 'is-active' no botão para animar o hambúrguer
    hamburger.classList.toggle("is-active");
    // Alterna a classe 'active' no menu mobile para mostrá-lo/ocultá-lo
    mobileMenu.classList.toggle("active");
});

// Fecha o menu mobile quando um link é clicado
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove a classe 'is-active' do botão do hambúrguer
        hamburger.classList.remove("is-active");
        // Remove a classe 'active' do menu mobile para ocultá-lo
        mobileMenu.classList.remove("active");
    });
});

// JavaScript for Scroll to Top Button
// Seleciona o botão de voltar ao topo
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Mostra/oculta o botão com base na posição de rolagem da página
window.onscroll = function() {
    // Se a rolagem do corpo ou do documento for maior que 20px
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 900) {
        scrollToTopBtn.style.display = "block"; // Mostra o botão
    } else {
        scrollToTopBtn.style.display = "none"; // Oculta o botão
    }
};

// Rola a página para o topo quando o botão é clicado
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,      // Rola para o topo da página
        behavior: "smooth" // Anima a rolagem suavemente
    });
});

// Smooth scrolling for all anchor links
// Seleciona todos os links que começam com '#'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Adiciona um ouvinte de evento de clique a cada link
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o comportamento padrão do link (salto imediato)

        // Rola a página até o elemento alvo do link com animação suave
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for Hero Section Image Swap
// Seleciona o container das imagens de "antes e depois"
const heroImagesContainer = document.getElementById('heroImagesContainer');

// Verifica se o container existe antes de adicionar o ouvinte de evento
if (heroImagesContainer) {
    // Adiciona um ouvinte de evento de clique ao container das imagens
    heroImagesContainer.addEventListener('click', function() {
        // Alterna a classe 'swapped' no container para trocar as posições das imagens
        this.classList.toggle('swapped');
    });
}

const botaoNoturno = document.querySelector(".botao-noturno");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navAhome = document.querySelector(".nav-a-home");
const navAfilmes = document.querySelector(".nav-a-filmes");
const navAfotos = document.querySelector(".nav-a-fotos");
const navAlivros = document.querySelector(".nav-a-livros");
const footer = document.querySelector("footer")
const html = document.querySelector("html")

const figcaptionFonte = document.querySelector("#figcaption-fonte")
const figcaptionNoturno = document.querySelector("#figcaption-lampada")

const iconeNoturno = document.querySelector("#icone-noturno")
const iconeFonte = document.querySelector("#icone-fonte")


const nomeContatos = document.querySelector(".nome-contatos");
const skills = document.querySelector(".skills");
const softSkills = document.querySelector(".soft-skills");
const perfil = document.querySelector(".perfil");
const formacao = document.querySelector(".formacao");
const experiencia = document.querySelector(".experiencia")
const redes = document.querySelector(".redes-sociais")
const curriculo = document.querySelector(".curriculo")

const mail = document.querySelector(".mail")
const tel = document.querySelector(".tel")
const localizacao = document.querySelector(".location")

const iconeMail = document.querySelector("#icone-mail")
const iconeTel = document.querySelector("#icone-tel")
const iconeLocation = document.querySelector("#icone-location")

function modoNoturno (){
    body.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode-header");
    nav.classList.toggle("dark-mode-nav");
    footer.classList.toggle("dark-mode-nav");
    navAhome.classList.toggle("dark-mode-nav-a");
    navAfilmes.classList.toggle("dark-mode-nav-a");
    navAfotos.classList.toggle("dark-mode-nav-a");
    navAlivros.classList.toggle("dark-mode-nav-a");

    if(body.classList.contains("dark-mode")){
        iconeNoturno.setAttribute('src', 'assets/imagens/lampada-branco.png')
        iconeFonte.setAttribute('src', 'assets/imagens/texto-branco.png')
        figcaptionNoturno.textContent = "Acender"
    }else{
        iconeNoturno.setAttribute('src', 'assets/imagens/lampada-preto.png')
        iconeFonte.setAttribute('src', 'assets/imagens/texto-preto.png')
        figcaptionNoturno.textContent = "Apagar"
    }

    if(body.classList.contains("dark-mode")){
        iconeMail.setAttribute('src', 'assets/imagens/icon-email-branco.png');
        iconeTel.setAttribute('src', 'assets/imagens/icon-cll-branco.png')
        iconeLocation.setAttribute('src', 'assets/imagens/icon-localizacao-branco.png')
    }else{
        iconeMail.setAttribute('src', 'assets/imagens/icon-email.png')
        iconeTel.setAttribute('src', 'assets/imagens/icon-cll.png')
        iconeLocation.setAttribute('src', 'assets/imagens/icon-localizacao.png')
    }

    nomeContatos.classList.toggle("dark-mode-curriculo");
    skills.classList.toggle("dark-mode-curriculo");
    softSkills.classList.toggle("dark-mode-curriculo");
    perfil.classList.toggle("dark-mode-curriculo");
    formacao.classList.toggle("dark-mode-curriculo");
    experiencia.classList.toggle("dark-mode-curriculo");
    redes.classList.toggle("dark-mode-curriculo");
    curriculo.classList.toggle("dark-mode-fundo");

    mail.classList.toggle("dark-mode-nav-a");
    tel.classList.toggle("dark-mode-nav-a");
    localizacao.classList.toggle("dark-mode-nav-a");
}
botaoNoturno.addEventListener("click", modoNoturno)



function mudarFonte (){
    html.classList.toggle("mudar-fonte")

    if(html.classList.contains("mudar-fonte")){
        figcaptionFonte.textContent = "Grande"
    }else{
        figcaptionFonte.textContent = "Normal"
    }
}
iconeFonte.addEventListener("click", mudarFonte )
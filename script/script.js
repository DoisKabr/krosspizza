const divVideoHeader = document.querySelector('#divVideoHeader');
const secaoDeImagens = document.querySelector('#secaoDeImagens');
const pizzasSalgadas = document.querySelector('#pizzasSalgadas');
const tela = window.screen;
const tituloPagina = document.querySelector('title');

function controlaTamanhoTela() {
    if (tela.width <= 970) {
        function imagemHeader() {
            let imagem = document.createElement('img');
            imagem.id = 'divImagemHeader';
            imagem.src = '../imagens/imagens do site/pizzas/14.jpg';

            divVideoHeader.appendChild(imagem)
        }
        imagemHeader();

        function sliderPrincipal() {
            let imagem = document.createElement('div');
            imagem.id = 'mainSlider';
            imagem.className = "video";
            secaoDeImagens.prepend(imagem)
        }
        sliderPrincipal()

        let passa = 0;
        let imagens = [];
        function carregarImagemSlider() {
            imagens[0] = new Image();
            imagens[0].src = '../imagens/imagens do site/pizzas/imagensDeSlider/03.jpg';
            imagens[1] = new Image();
            imagens[1].src = '../imagens/imagens do site/pizzas/imagensDeSlider/05.jpg';
            imagens[2] = new Image();
            imagens[2].src = '../imagens/imagens do site/pizzas/imagensDeSlider/06.jpg';
            imagens[3] = new Image();
            imagens[3].src = '../imagens/imagens do site/pizzas/imagensDeSlider/07.jpg';
            imagens[4] = new Image();
            imagens[4].src = '../imagens/imagens do site/pizzas/imagensDeSlider/08.jpg';
        }
        carregarImagemSlider();

        function trocaImagem() {
            if (passa >= imagens.length) {
                passa = 0
            }
            let imagem = document.querySelector('#mainSlider')
            imagem.style = `
                background-image: url('${imagens[passa].src}');
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            `

            passa += 1
        }
        trocaImagem()
        setInterval(trocaImagem, 5000)

    }
    else if (tela.width > 970) {
        function videoHeader() {
            let video = document.createElement('video');
            video.src = '../videos/pc/02.mp4'
            video.id = 'videoHeader';
            video.className = 'videoHeader';
            video.muted = true;
            video.loop = true;
            video.autoplay = true;
            video.preload = true;

            divVideoHeader.appendChild(video)
        }
        videoHeader();

        function videoSecaoDeImagens() {
            let video = document.createElement('video');
            video.src = '../videos/pc-movel/01.mp4'
            video.id = 'videoSecaoDeImagens';
            video.className = 'video';
            video.muted = true;
            video.loop = true;
            video.autoplay = true;

            secaoDeImagens.prepend(video)
        }
        videoSecaoDeImagens();
    }
}
controlaTamanhoTela()


// Fotos focadas do topo do site
const ftFocus = [...document.querySelectorAll('.ftFocus')]
let i = 0;
const intervaloFocus = setInterval(() => {
    for (let i2 = 0; i2 < ftFocus.length; i2++) {
        if (ftFocus[i2].classList.contains('semFocus')) {
            ftFocus[i2].classList.remove('semFocus')
        }
    }
    if (i >= ftFocus.length) {
        i = 0;
    }
    ftFocus[i].classList.add('semFocus')

    i++
}, 3000)
if (tela.width <= 970) {
    clearInterval(intervaloFocus)
}

// Cardapio dinamico da pagina inicial
function cardapioDinamico() {
    fetch('../produtos/pizzas_salgadas.json')
        .then(res => res.json())
        .then(res => {
            res.forEach(el => {
                if (el.id >= 7 && el.id <= 15) {
                    const produtos = document.createElement('div');
                    produtos.id = 'todasPizzas'
                    const descricao = document.createElement('div');
                    descricao.id = 'descricaoCardapio'

                    const imagem = document.createElement('img');
                    imagem.id = 'produtosImagem';
                    imagem.className = 'produtosImagem'
                    imagem.src = '../imagens/favicon/logo.png'


                    const divNome = document.createElement('div');
                    divNome.id = 'produtosNome';
                    divNome.className = 'produtosNome';

                    const nome = document.createElement('h5');
                    nome.className = 'produtosNome';
                    nome.innerHTML = el.nome;
                    const nomePreco = document.createElement('h5');
                    nomePreco.className = 'produtosNome aumentoDePreco';
                    nomePreco.innerHTML = `R$ ${el.preco},00`;


                    const ingredientes = document.createElement('h6');
                    ingredientes.id = 'produtosIngredientes'
                    ingredientes.className = 'produtosIngredientes'
                    ingredientes.innerHTML = el.ingredientes;

                    produtos.appendChild(imagem);
                    divNome.appendChild(nome);
                    divNome.appendChild(nomePreco);
                    descricao.appendChild(divNome);
                    descricao.appendChild(ingredientes);
                    produtos.appendChild(descricao)

                    pizzasSalgadas.appendChild(produtos)
                }
            });

            const verMais = document.createElement('a');
            verMais.id = 'verMais'
            verMais.innerHTML = 'Ver mais ...'
            verMais.href = './paginas/cardapio.html';

            pizzasSalgadas.appendChild(verMais)

        })
}
cardapioDinamico();

// Tela de envio de formulario do WhatsApp

const btnWhatsapp = document.querySelector('#btnWhatsapp');

btnWhatsapp.addEventListener('click', () => {
    const fundo = document.createElement('div');
    fundo.id = 'fundoWhatsapp';
    fundo.style = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    background-color: rgba(000, 000, 000, 0.5);
    z-index: 10;
    `;

    const caixa = document.createElement('div');
    if (tela.width > 970) {
        caixa.style = `
        position: relative;
        width: 500px;
        height: 600px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 5px;
        border: 5px solid #f2a61c;
        `;
    } else {
        caixa.style = `
        position: relative;
        width: 100%;
        height: 100vh;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 5px;
        border: 5px solid #f2a61c;
        `;
    }

    const texto = document.createElement('div');
    texto.style = `
    width: 100%;
    padding: 1rem;
    `;
    const textoP = document.createElement('p');
    textoP.innerHTML = 'Este processo serve para facilitar o seu cadastro !';
    textoP.style = `
    width: 100%;
    text-align: center;
    `;

    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.placeholder = 'Seu nome...'
    inputNome.required;
    inputNome.style = `
    width: 80%;
    height: 50px;
    margin-bottom: 1rem;
    padding: .5rem;
    `;
    const inputEndereco = document.createElement('input');
    inputEndereco.type = 'text';
    inputEndereco.placeholder = 'Seu endereço...'
    inputEndereco.required;
    inputEndereco.style = `
    width: 80%;
    height: 50px;
    margin-bottom: 1rem;
    padding: .5rem;
    `;
    const inputNumero = document.createElement('input');
    inputNumero.type = 'tel';
    inputNumero.placeholder = 'Seu número...'
    inputNumero.required;
    inputNumero.maxLength = 11;
    inputNumero.style = `
    width: 80%;
    height: 50px;
    margin-bottom: 1rem;
    padding: .5rem;
    `;

    const botao = document.createElement('button');
    botao.innerHTML = 'Enviar...';
    botao.style = `
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    background-color: #25D366;
    border-radius: 5px;
    margin: 5rem 0rem;
    padding: 1rem 2rem;

    border: none;
    cursor: pointer;
    `;

    botao.addEventListener('click', () => {
        if (inputNome.value == '' || inputEndereco.value == '' || inputNumero.value == '') {
            alert('Por favor preencha todos os campos !')
        } else {
            const pegaNome = inputNome.value;
            const pegaEndereco = inputEndereco.value;
            const pegaNumero = inputNumero.value;

            const convNome = pegaNome.replaceAll(' ', '%20');
            const convEndereco = pegaEndereco.replaceAll(' ', '%20');
            const convNumero = pegaNumero;

            window.location.href = `https://wa.me/5511942525024?text=Boa%20noite,%20Poderia%20me%20enviar%20o%20cardapio?%0A%0ANome:%20${convNome}%0AEndereço:%20${convEndereco}%0ANúmero:%20${convNumero}`
        }
    })

    // botao de fechar janela
    const dvFecha = document.createElement('div');
    dvFecha.style = `
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    `;
    const dvEspaco = document.createElement('div');
    const dvFechar = new Image();
    dvFechar.src = '../imagens/svg/fechar.svg';
    dvFechar.style = `
    width: 40px;
    height: 40px;
    background-color: red;

    cursor: pointer;
    `;
    dvFechar.addEventListener('click', (evt) => {
        evt.target.parentNode.parentNode.parentNode.remove()
    })

    dvFecha.appendChild(dvEspaco);
    dvFecha.appendChild(dvFechar);
    caixa.appendChild(dvFecha);
    texto.appendChild(textoP);
    caixa.appendChild(texto);
    caixa.appendChild(inputNome);
    caixa.appendChild(inputEndereco);
    caixa.appendChild(inputNumero);
    caixa.appendChild(botao);
    fundo.appendChild(caixa);
    document.body.prepend(fundo);
});

// Menu do site
function criarMenu() {


    const menuAbrir = document.createElement('div');
    menuAbrir.style = `
    border: 2px solid #fff;
    `;
    menuAbrir.id = 'menuAbrir_inicial';
    if (tela.width > 970) {
        menu.style = `
        display: none;
    `;
    }
    const menu = document.createElement('div');
    menu.style = `
    border: 2px solid #f2a61c;
    `;
    menu.id = 'menuPagina_inicial';
    if (tela.width > 970) {
        menu.style = `
        display: none;
    `;
    }

    // Tela de envio de formulario do WhatsApp
    const btnWhatsappMenu = new Image();
    btnWhatsappMenu.src = '../imagens/icones/whatsapp.png';

    btnWhatsappMenu.style = `
    width: 40px;
    height: 40px;
    object-fit: cover;
    display: flex;
    align-items: center;
    `;
    btnWhatsappMenu.id = '#btnWhatsappMenu_inicial';
    btnWhatsappMenu.addEventListener('click', () => {

        document.querySelector('#menuAbrir_inicial').remove()
        document.querySelector('#menuPagina_inicial').remove()

        const fundo = document.createElement('div');
        fundo.id = 'fundoWhatsapp_inicial';
        fundo.style = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    background-color: rgba(000, 000, 000, 0.5);
    z-index: 10;
    `;

        const caixa = document.createElement('div');
        if (tela.width > 970) {
            caixa.style = `
        position: relative;
        width: 500px;
        height: 600px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 5px;
        border: 5px solid #f2a61c;
        `;
        } else {
            caixa.style = `
        position: relative;
        width: 100%;
        height: 100vh;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 5px;
        border: 5px solid #f2a61c;
        `;
        }

        const texto = document.createElement('div');
        texto.style = `
    width: 100%;
    padding: 1rem;
    `;
        const textoP = document.createElement('p');
        textoP.innerHTML = 'Este processo serve para facilitar o seu cadastro !';
        textoP.style = `
    width: 100%;
    text-align: center;
    `;

        const inputNome = document.createElement('input');
        inputNome.type = 'text';
        inputNome.placeholder = 'Seu nome...'
        inputNome.required;
        inputNome.style = `
    width: 80%;
    height: 50px;
    margin-bottom: 1rem;
    padding: .5rem;
    `;
        const inputEndereco = document.createElement('input');
        inputEndereco.type = 'text';
        inputEndereco.placeholder = 'Seu endereço...'
        inputEndereco.required;
        inputEndereco.style = `
    width: 80%;
    height: 50px;
    margin-bottom: 1rem;
    padding: .5rem;
    `;
        const inputNumero = document.createElement('input');
        inputNumero.type = 'tel';
        inputNumero.placeholder = 'Seu número...'
        inputNumero.required;
        inputNumero.maxLength = 11;
        inputNumero.style = `
    width: 80%;
    height: 50px;
    margin-bottom: 1rem;
    padding: .5rem;
    `;

        const botao = document.createElement('button');
        botao.innerHTML = 'Enviar...';
        botao.style = `
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    background-color: #25D366;
    border-radius: 5px;
    margin: 5rem 0rem;
    padding: 1rem 2rem;

    border: none;
    cursor: pointer;
    `;

        botao.addEventListener('click', () => {
            if (inputNome.value == '' || inputEndereco.value == '' || inputNumero.value == '') {
                alert('Por favor preencha todos os campos !')
            } else {
                const pegaNome = inputNome.value;
                const pegaEndereco = inputEndereco.value;
                const pegaNumero = inputNumero.value;

                const convNome = pegaNome.replaceAll(' ', '%20');
                const convEndereco = pegaEndereco.replaceAll(' ', '%20');
                const convNumero = pegaNumero;

                window.location.href = `https://wa.me/5511942525024?text=Boa%20noite,%20Poderia%20me%20enviar%20o%20cardapio?%0A%0ANome:%20${convNome}%0AEndereço:%20${convEndereco}%0ANúmero:%20${convNumero}`
            }
        })

        // botao de fechar janela
        const dvFecha = document.createElement('div');
        dvFecha.style = `
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    `;
        const dvEspaco = document.createElement('div');
        const dvFechar = new Image();
        dvFechar.src = '../imagens/svg/fechar.svg';
        dvFechar.style = `
    width: 40px;
    height: 40px;
    background-color: red;

    cursor: pointer;
    `;
        dvFechar.addEventListener('click', (evt) => {
            evt.target.parentNode.parentNode.parentNode.remove()
            criarMenu()
        })

        dvFecha.appendChild(dvEspaco);
        dvFecha.appendChild(dvFechar);
        caixa.appendChild(dvFecha);
        texto.appendChild(textoP);
        caixa.appendChild(texto);
        caixa.appendChild(inputNome);
        caixa.appendChild(inputEndereco);
        caixa.appendChild(inputNumero);
        caixa.appendChild(botao);
        fundo.appendChild(caixa);
        document.body.prepend(fundo);
    });

    const enderecoGoogle = document.querySelector('#enderecoGoogle');
    const caixaHorarios = document.querySelector('#caixaHorarios');
    const secaoContatos = document.querySelector('#secaoContatos');

    // Ir para fotos das pizzas
    const irFotosPizza = new Image();
    irFotosPizza.src = '../imagens/svg/fotosPizza.svg';

    irFotosPizza.style = `
    width: 40px;
    height: 40px;
    object-fit: cover;
    display: flex;
    align-items: center;
    `;
    irFotosPizza.addEventListener('click', () => {
        window.scroll({
            top: secaoDeImagens.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    })

    // Ir para localização
    const irLocalizacao = new Image();
    irLocalizacao.src = '../imagens/svg/localizacao.svg';

    irLocalizacao.style = `
    width: 40px;
    height: 40px;
    object-fit: cover;
    display: flex;
    align-items: center;
    `;
    irLocalizacao.addEventListener('click', () => {
        window.scroll({
            top: (enderecoGoogle.offsetTop - 10),
            left: 0,
            behavior: 'smooth'
        })
    })
    // Ir para Horarios
    const irHorarios = new Image();
    irHorarios.src = '../imagens/svg/horario.svg';

    irHorarios.style = `
    width: 40px;
    height: 40px;
    object-fit: cover;
    display: flex;
    align-items: center;
    `;
    irHorarios.addEventListener('click', () => {
        window.scroll({
            top: (caixaHorarios.offsetTop - 100),
            left: 0,
            behavior: 'smooth'
        })
    })
    // Ir para contatos
    const irContatos = new Image();
    irContatos.src = '../imagens/svg/telefone.svg';

    irContatos.style = `
    width: 40px;
    height: 40px;
    object-fit: cover;
    display: flex;
    align-items: center;
    `;
    irContatos.addEventListener('click', () => {
        window.scroll({
            top: secaoContatos.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    })
    // Ir para página Cardapio
    const paginaInicio = new Image();
    paginaInicio.src = '../imagens/svg/cardapio.svg';
    paginaInicio.style = `
    width: 40px;
    height: 40px;
    object-fit: cover;
    display: flex;
    align-items: center;
    `;
    paginaInicio.addEventListener('click', () => {
        window.location.href = '../paginas/cardapio.html'
    })
    // fechar o menu
    const fecharMenu = new Image();
    fecharMenu.id = 'fecharMenu_inicial';
    fecharMenu.src = '../imagens/svg/menu.svg';
    fecharMenu.style = `
    width: 40px;
    height: 40px;
    object-fit: cover;
    display: flex;
    align-items: center;
    `;
    let muda = 0;
    fecharMenu.addEventListener('click', () => {
        if (muda == 0) {
            fecharMenu.src = '../imagens/svg/fechar.svg';
            menuAbrir.style = `
            border: 2px solid #f2a61c;
            `;
            menu.style = `
            border: 2px solid #fff;
            `;
            muda = 1;
        } else if (muda == 1) {
            fecharMenu.src = '../imagens/svg/menu.svg';
            menuAbrir.style = `
            border: 2px solid #fff;
            `;
            menu.style = `
            border: 2px solid #f2a61c;
            `;
            muda = 0;
        }
        const menuPagina = document.querySelector('#menuAbrir_inicial');
        menuPagina.classList.toggle('menuMostrar_inicial');
    });

    menuAbrir.appendChild(btnWhatsappMenu);
    menuAbrir.appendChild(irFotosPizza);
    menuAbrir.appendChild(irLocalizacao);
    menuAbrir.appendChild(irHorarios);
    menuAbrir.appendChild(irContatos);
    menuAbrir.appendChild(paginaInicio);
    menu.appendChild(fecharMenu);
    document.body.appendChild(menuAbrir);
    document.body.appendChild(menu);
}
criarMenu()
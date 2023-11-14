const btnVoltarPage = document.querySelectorAll('[btnVoltarPage]');
const promocoesPizzas = document.querySelector('#promocoesPizzas');
const pizzasSalgadasCardapio = document.querySelector('#pizzasSalgadasCardapio');
const pizzasDocesCardapio = document.querySelector('#pizzasDocesCardapio');
const divBordasCardapio = document.querySelector('#divBordasCardapio');
const divBebidasCardapio = document.querySelector('#divBebidasCardapio');
const tela = window.screen;

    btnVoltarPage.forEach((el)=>{
        el.addEventListener('click',()=>{
            window.history.go(-1)
        });
    });
function controlaTamanhoTela() {
    if (tela.width <= 970) {
        function imagemHeader() {
            let imagem = document.createElement('img');
            imagem.id = 'divImagemHeader';
            imagem.src = '../imagens/imagens do site/pizzas/01.jpg';

            divVideoHeader.appendChild(imagem)
        }
        imagemHeader();

    }
    else if (tela.width > 970) {
        // function videoHeader() {
        //     let video = document.createElement('video');
        //     video.src = '../videos/pc/02.mp4'
        //     video.id = 'videoHeader';
        //     video.className = 'videoHeader';
        //     video.muted = true;
        //     video.loop = true;
        //     video.autoplay = true;

        //     divVideoHeader.appendChild(video)
        // }
        // videoHeader();
        function imagemHeader() {
            let imagem = document.createElement('img');
            imagem.id = 'divImagemHeader2';
            imagem.src = '../imagens/imagens do site/pizzas/14.jpg';

            divVideoHeader.appendChild(imagem)
        }
        imagemHeader();
    }
}
controlaTamanhoTela()

// Cardapio dinamico da pagina Cardapio
function cardapioDinamicoPizzaPromocao() {
    fetch('../produtos/pizzas_salgadas.json')
        .then(res => res.json())
        .then(res => {
            res.forEach(el => {
                if (el.promocao == true) {
                    const produtos = document.createElement('div');
                    produtos.id = 'todasPizzas_cardapio'
                    const descricao = document.createElement('div');
                    descricao.id = 'descricaoCardapio_cardapio'

                    const imagem = document.createElement('img');
                    imagem.id = 'produtosImagem_cardapio';
                    imagem.className = 'produtosImagem_cardapio'
                    imagem.src = '../imagens/favicon/logo.png'

                    const divNome = document.createElement('div');
                    divNome.id = 'produtosNome_cardapio';
                    divNome.className = 'produtosNome_cardapio';

                    const nome = document.createElement('h5');
                    nome.innerHTML = el.nome;

                    const nomePreco = document.createElement('h5');
                    nomePreco.className = 'aumentoDePreco coresPromocionais';
                    nomePreco.innerHTML = `R$ ${el.preco},00`;


                    const ingredientes = document.createElement('h6');
                    ingredientes.id = 'produtosIngredientes_cardapio'
                    ingredientes.className = 'produtosIngredientes_cardapio'
                    ingredientes.innerHTML = el.ingredientes;

                    produtos.appendChild(imagem);
                    divNome.appendChild(nome);
                    divNome.appendChild(nomePreco);
                    descricao.appendChild(divNome);
                    descricao.appendChild(ingredientes);
                    produtos.appendChild(descricao);
                    promocoesPizzas.appendChild(produtos);
                }

            });

        })
}
cardapioDinamicoPizzaPromocao();
function cardapioDinamicoPizzaSalgada() {
    fetch('../produtos/pizzas_salgadas.json')
        .then(res => res.json())
        .then(res => {
            res.forEach(el => {
                const produtos = document.createElement('div');
                produtos.id = 'todasPizzas_cardapio'
                const descricao = document.createElement('div');
                descricao.id = 'descricaoCardapio_cardapio'

                const imagem = document.createElement('img');
                imagem.id = 'produtosImagem_cardapio';
                imagem.className = 'produtosImagem_cardapio'
                imagem.src = '../imagens/favicon/logo.png'

                const divNome = document.createElement('div');
                divNome.id = 'produtosNome_cardapio';
                divNome.className = 'produtosNome_cardapio';

                const nome = document.createElement('h5');
                nome.innerHTML = el.nome;

                const nomePreco = document.createElement('h5');
                nomePreco.className = 'aumentoDePreco';
                nomePreco.innerHTML = `R$ ${el.preco},00`;


                const ingredientes = document.createElement('h6');
                ingredientes.id = 'produtosIngredientes_cardapio'
                ingredientes.className = 'produtosIngredientes_cardapio'
                ingredientes.innerHTML = el.ingredientes;

                produtos.appendChild(imagem);
                divNome.appendChild(nome);
                divNome.appendChild(nomePreco);
                descricao.appendChild(divNome);
                descricao.appendChild(ingredientes);
                produtos.appendChild(descricao);
                pizzasSalgadasCardapio.appendChild(produtos)

            });

        })
}
cardapioDinamicoPizzaSalgada();
function cardapioDinamicoPizzaDoce() {
    fetch('../produtos/pizzas_doces.json')
        .then(res => res.json())
        .then(res => {
            res.forEach(el => {
                const produtos = document.createElement('div');
                produtos.id = 'todasPizzas_cardapio'
                const descricao = document.createElement('div');
                descricao.id = 'descricaoCardapio_cardapio'

                const imagem = document.createElement('img');
                imagem.id = 'produtosImagem_cardapio';
                imagem.className = 'produtosImagem_cardapio'
                imagem.src = '../imagens/favicon/logo.png'

                const divNome = document.createElement('div');
                divNome.id = 'produtosNome_cardapio';
                divNome.className = 'produtosNome_cardapio';

                const nome = document.createElement('h5');
                nome.innerHTML = el.nome;

                const nomePreco = document.createElement('h5');
                nomePreco.className = 'aumentoDePreco';
                nomePreco.innerHTML = `R$ ${el.preco},00`;


                const ingredientes = document.createElement('h6');
                ingredientes.id = 'produtosIngredientes_cardapio'
                ingredientes.className = 'produtosIngredientes_cardapio'
                ingredientes.innerHTML = el.ingredientes;

                produtos.appendChild(imagem);
                divNome.appendChild(nome);
                divNome.appendChild(nomePreco);
                descricao.appendChild(divNome);
                descricao.appendChild(ingredientes);
                produtos.appendChild(descricao);

                pizzasDocesCardapio.appendChild(produtos)

            });

        })
}
cardapioDinamicoPizzaDoce();

function cardapioDinamicoBordas() {
    fetch('../produtos/bordas.json')
        .then(res => res.json())
        .then(res => {
            res.forEach(el => {
                const produtos = document.createElement('div');
                produtos.id = 'bordasCardapio'
                const descricao = document.createElement('div');
                descricao.id = 'bordasCardapio';

                const divNome = document.createElement('div');
                divNome.id = 'produtosNome_cardapio';
                divNome.className = 'produtosNome_cardapio bordas_cardapio';

                const nome = document.createElement('h5');
                nome.innerHTML = el.nome;

                const nomePreco = document.createElement('h5');
                nomePreco.className = 'aumentoDePreco';
                nomePreco.innerHTML = `R$ ${el.preco}`;



                divNome.appendChild(nome);
                divNome.appendChild(nomePreco);
                descricao.appendChild(divNome);
                produtos.appendChild(descricao);

                divBordasCardapio.appendChild(produtos)

            });

        })
}
cardapioDinamicoBordas();

function cardapioDinamicoBebidas() {
    fetch('../produtos/bebidas.json')
        .then(res => res.json())
        .then(res => {
            res.forEach(el => {
                const produtos = document.createElement('div');
                produtos.id = 'bebidasCardapio'
                const descricao = document.createElement('div');
                descricao.id = 'bebidasCardapio';

                const divNome = document.createElement('div');
                divNome.id = 'produtosNome_cardapio';
                divNome.className = 'produtosNome_cardapio bordas_cardapio';

                const nome = document.createElement('h5');
                nome.innerHTML = el.nome;

                const nomePreco = document.createElement('h5');
                nomePreco.className = 'aumentoDePreco';
                nomePreco.innerHTML = `R$ ${el.preco}.00`;



                divNome.appendChild(nome);
                divNome.appendChild(nomePreco);
                descricao.appendChild(divNome);
                produtos.appendChild(descricao);

                divBebidasCardapio.appendChild(produtos)

            });

        })
}
cardapioDinamicoBebidas();

// Menu do site
function criarMenu() {


    const menuAbrir = document.createElement('div');
    menuAbrir.style = `
    border: 2px solid #fff;
    `;
    menuAbrir.id = 'menuAbrir';
    if (tela.width > 970) {
        menu.style = `
        display: none;
    `;
    }
    const menu = document.createElement('div');
    menu.style = `
    border: 2px solid #f2a61c;
    `;
    menu.id = 'menuPagina';
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
    btnWhatsappMenu.id = '#btnWhatsappMenu';
    btnWhatsappMenu.addEventListener('click', () => {

        document.querySelector('#menuAbrir').remove()
        document.querySelector('#menuPagina').remove()

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

    const pizzasSalgadas_cardapio_texto = document.querySelector('#pizzasSalgadas_cardapio_texto')
    const pizzasDoces_cardapio_texto = document.querySelector('#pizzasDoces_cardapio_texto')
    const bordas_cardapio_texto = document.querySelector('#bordas_cardapio_texto')
    const bebidas_cardapio_texto = document.querySelector('#bebidas_cardapio_texto')

    // Mover para pizza salgada
    const irPizzaSalgada = new Image();
    irPizzaSalgada.src = '../imagens/svg/flecha_cima.svg';

    irPizzaSalgada.style = `
    width: 40px;
    height: 40px;
    object-fit: cover;
    display: flex;
    align-items: center;
    `;
    irPizzaSalgada.addEventListener('click', () => {
        window.scroll({
            top: pizzasSalgadas_cardapio_texto.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    })

    // Mover para pizza doce
    const irPizzaDoce = new Image();
    irPizzaDoce.src = '../imagens/svg/flecha_baixo.svg';

    irPizzaDoce.style = `
    width: 40px;
    height: 40px;
    object-fit: cover;
    display: flex;
    align-items: center;
    `;
    irPizzaDoce.addEventListener('click', () => {
        window.scroll({
            top: pizzasDoces_cardapio_texto.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    })
    // Mover para bordas
    const irBordas = new Image();
    irBordas.src = '../imagens/svg/letraB.svg';

    irBordas.style = `
    width: 40px;
    height: 40px;
    object-fit: cover;
    display: flex;
    align-items: center;
    `;
    irBordas.addEventListener('click', () => {
        window.scroll({
            top: bordas_cardapio_texto.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    })
    // Mover para bebidas
    const irBebidas = new Image();
    irBebidas.src = '../imagens/svg/bebida.svg';

    irBebidas.style = `
    width: 40px;
    height: 40px;
    object-fit: cover;
    display: flex;
    align-items: center;
    `;
    irBebidas.addEventListener('click', () => {
        window.scroll({
            top: bebidas_cardapio_texto.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    })

    // Voltar para página inicial
    const paginaInicio = new Image();
    paginaInicio.src = '../imagens/svg/home.svg';
    paginaInicio.style = `
    width: 40px;
    height: 40px;
    object-fit: cover;
    display: flex;
    align-items: center;
    `;
    paginaInicio.addEventListener('click', () => {
        window.location.href = '../index.html'
    })
    // fechar o menu
    const fecharMenu = new Image();
    fecharMenu.id = 'fecharMenu';
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
        const menuPagina = document.querySelector('#menuAbrir');
        menuPagina.classList.toggle('menuMostrar');
    });

    menuAbrir.appendChild(btnWhatsappMenu);
    menuAbrir.appendChild(irPizzaSalgada);
    menuAbrir.appendChild(irPizzaDoce);
    menuAbrir.appendChild(irBordas);
    menuAbrir.appendChild(irBebidas);
    menuAbrir.appendChild(paginaInicio);
    menu.appendChild(fecharMenu);
    document.body.appendChild(menuAbrir);
    document.body.appendChild(menu);
}
criarMenu()
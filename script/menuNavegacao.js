// Use a tela que esta criada em outro documento

const tituloPaginaMenu = document.querySelector('#krossPizza');

function menuDeNavegacaoPC() {
    const telaFundo = document.createElement('div');
    telaFundo.className = 'telaFundoPreto';

    document.body.prepend(telaFundo);
    componentePai(telaFundo);
}

function componentePai(telaFundo) {
    const menuNavegacao = document.createElement('menuNavegacao');
    menuNavegacao.className = 'menuNavegacao';

    telaFundo.appendChild(menuNavegacao);
    componenteWhatsapp(menuNavegacao);
    voltarInicio(menuNavegacao)
}

function componenteWhatsapp(menuNavegacao) {
    const whats = new Image();
    whats.src = '../imagens/icones/whatsapp.png';
    whats.className = 'configPadraoBotao';
    whats.addEventListener('click', () => {

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
    z-index: 55;
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

    menuNavegacao.appendChild(whats)
}

function voltarInicio(menuNavegacao) {
    const inicio = new Image();
    inicio.className = 'configPadraoBotao';

    if (tituloPaginaMenu.innerHTML == 'Cardapio') {
        inicio.src = '../imagens/svg/home.svg'
        inicio.title = 'Voltar para a tela inicial';
        inicio.addEventListener('click', () => {
            window.location.href = '../index.html';
        })
    } else
        if (tituloPaginaMenu.innerHTML == 'Kross Pizza') {
            inicio.src = '../imagens/svg/cardapio.svg'
            inicio.title = 'Ir para o cardapio';
            inicio.addEventListener('click', () => {
                window.location.href = '../paginas/cardapio.html';
            })
        }


    menuNavegacao.appendChild(inicio)
}

menuDeNavegacaoPC()
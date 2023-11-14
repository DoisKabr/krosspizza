const telaSlider = window.screen;
const secaoSlider = document.querySelector('#secaoSlider');
const slider = document.querySelector('#slider');

let arrImg = [];
let arrImgMOVEL = [];
function carregarImagens() {
    arrImg[0] = new Image();
    arrImg[0].src = '../imagens/imagens do site/bunners-e-promocoes/promocoes-PC.png';
    arrImg[1] = new Image();
    arrImg[1].src = '../imagens/imagens do site/bunners-e-promocoes/promocoesBorda-PC.png';
    arrImg[2] = new Image();
    arrImg[2].src = '../imagens/imagens do site/bunners-e-promocoes/promocoesGanhe-PC.png';

    arrImgMOVEL[0] = new Image();
    arrImgMOVEL[0].src = '../imagens/imagens do site/bunners-e-promocoes/promocoes-MOVEL.png';
    arrImgMOVEL[1] = new Image();
    arrImgMOVEL[1].src = '../imagens/imagens do site/bunners-e-promocoes/promocoesBorda-MOVEL.png';
    arrImgMOVEL[2] = new Image();
    arrImgMOVEL[2].src = '../imagens/imagens do site/bunners-e-promocoes/promocoesGanhe-MOVEL.png';
}
carregarImagens();

function criarImagens() {
    arrImg.forEach((el, i) => {
        if (telaSlider.width >= 750) {
            const img = document.createElement('div');
            img.id = `configImagensPC${i + 1}`;
            img.className = 'configImagensPC';
            img.style = `
         background-image: url('${arrImg[i].src}');
         background-position: center;
         background-size: 100%;
         background-repeat: no-repeat;
         left: ${telaSlider.width}px;
         `;
            slider.appendChild(img);
        } else if (telaSlider.width < 750) {
            const img = document.createElement('div');
            img.id = `configImagensMOVEL${i + 1}`;
            img.className = 'configImagensMOVEL';
            img.style = `
             background-image: url('${arrImgMOVEL[i].src}');
             background-position: center;
             background-size: 100%;
             background-repeat: no-repeat;
             left: ${telaSlider.width}px;
             `;
            slider.appendChild(img);
        }
    });
}
criarImagens()

let mx = [];
let moveri = slider.offsetWidth;
function mover(el) {
    if (el.offsetLeft >= -4 && el.offsetLeft <= 4) {
        
        el.style.left = 0 + 'px'
        setTimeout(()=>{
            moveri -= 0.1;
            el.style.left = moveri + 'px'
            mover(el);
        },10000);

    } else 
    if (el.offsetLeft >= -slider.offsetWidth) {
        setTimeout(() => {
            el.style.left = moveri + 'px'
            moveri -= 9;
            mover(el);
        }, 0);

    } else {
        moveri = slider.offsetWidth;
        el.style.left = moveri + 'px'
        int+=1;
        next();
    }
}
let int = 0;
function next() {
    if (int >= mx.length) {
        int = 0;
    }
    mover(mx[int]);
}

if(telaSlider.width > 750){
    mx = [...document.querySelectorAll('.configImagensPC')]
    next();
}else
if(telaSlider.width < 750){
    mx = [...document.querySelectorAll('.configImagensMOVEL')]
    next();
};

if(telaSlider.width < 340){
    secaoSlider.style.display = 'none';
}else
if(telaSlider.width == 428){
    secaoSlider.style.display = 'none';
};
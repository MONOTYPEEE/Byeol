const modalBgBg = document.querySelector("#infoModalBg");
const modalBox = document.querySelector('#infoModal');
const htmlBOdy = document.querySelector('body');
let isModalOn = false;

function modalVisableSwitch(){
    if(isModalOn==true){
        modalBgBg.classList.add('hiden');
        modalBox.classList.add('hiden');
        htmlBOdy.style.overflow = "hidden";
        isModalOn=false;
    }
    else{
        modalBgBg.classList.remove('hiden');
        modalBox.classList.remove('hiden');
        htmlBOdy.style.overflow = "auto";
        isModalOn=true;
    }
}

modalBgBg.addEventListener('click',modalVisableSwitch);
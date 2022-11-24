const modalBgBg = document.querySelector("#infoModalBg");
const modalBox = document.querySelector('#infoModal');
let isModalOn = false;

function modalVisableSwitch(){
    if(isModalOn==true){
        modalBgBg.classList.add('hiden');
        modalBox.classList.add('hiden');
        isModalOn=false;
    }
    else{
        modalBgBg.classList.remove('hiden');
        modalBox.classList.remove('hiden');
        isModalOn=true;
    }
}

modalBgBg.addEventListener('click',modalVisableSwitch);
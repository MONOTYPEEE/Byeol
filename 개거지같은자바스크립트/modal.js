const modalBgBg = document.querySelector("#infoModalBg");
const modalBox = document.querySelector('#infoModal');
const htmlBOdy = document.querySelector('body');
let isModalOn = false;

function modalLoader(event){
    const givenID = event.path[1].classList[0];
    modalBox.querySelector("#imImage").style.backgroundImage = `url('${starData[givenID].file}')`;

    modalBox.querySelector("#imsNameE").innerHTML = starData[givenID].nameEn;
    modalBox.querySelector("#imsNameK").innerHTML = starData[givenID].nameKo;
    modalBox.querySelector("#imsNameL").innerHTML = starData[givenID].nameLt;

    modalBox.querySelectorAll(".imPL :last-child")[0].innerHTML = starData[givenID].whereSee;
    modalBox.querySelectorAll(".imPL :last-child")[1].innerHTML = starData[givenID].numOfStar;
    modalBox.querySelectorAll(".imPL :last-child")[2].innerHTML = starData[givenID].size;
    modalBox.querySelectorAll(".imPL :last-child")[3].innerHTML = dayjs(starData[givenID].whenMeridian).format("M월 D일");
    modalBox.querySelectorAll(".imPL :last-child")[4].innerHTML = starData[givenID].desc;

    modalVisableSwitch()
}

function modalVisableSwitch(){
    if(isModalOn==true){
        modalBgBg.classList.add('hiden');
        modalBox.classList.add('hiden');
        htmlBOdy.style.overflow = "auto";
        isModalOn=false;
    }
    else{
        modalBgBg.classList.remove('hiden');
        modalBox.classList.remove('hiden');
        htmlBOdy.style.overflow = "hidden";
        isModalOn=true;
    }
}

modalBgBg.addEventListener('click',modalVisableSwitch);
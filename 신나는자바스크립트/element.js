const cardListBox = document.querySelector('#cardList');
const boxes = document.querySelectorAll(`#cardMain`);

function loadList(elm, idx, elmParent){
    const newTT = document.createElement('div');
    newTT.id = 'cardMain';
    cardListBox.appendChild(newTT);
    newTT.innerHTML = `            <div id="cardImg"></div>
    <span>
        <div id="cardNameK"></div>
        <div id="cardNameLt"></div>
        <div id="cardMeridianWhen"></div>
        <div id="cardTags"></div>
    </span>`;

    const tagBox = document.querySelectorAll('#cardTags');
    elm.tags.forEach(function(element){
        const tagX = document.createElement("span");
        tagX.id = 'cardTag';
        tagBox[idx].appendChild(tagX);
        tagX.innerHTML = element;
    });

    newTT.querySelector('#cardNameK').innerText = elm.nameKo;
    newTT.querySelector('#cardNameLt').innerText = elm.nameLt;
    newTT.querySelector('#cardMeridianWhen').innerText = `${elm.whenMeridian} 최고`;  
    //newTT.querySelectorAll('#cardTag')[0].innerText = elm.tags[0];
    newTT.querySelector('#cardImg').style.backgroundImage =`url('${elm.file}')`;
}
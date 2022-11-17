const cardListBox = document.querySelector('#cardList');
const boxes = document.querySelectorAll(`#cardMain`);

function loadList(FENM){
    const newTT = document.createElement('div');
    newTT.id = 'cardMain';
    cardListBox.appendChild(newTT);
    newTT.innerHTML = `            <div id="cardImg"></div>
    <span>
        <div id="cardNameK"></div>
        <div id="cardNameLt"></div>
        <div id="cardMeridianWhen"></div>
        <div id="cardTags">
            <span id="cardTag"></span>
        </div>
    </span>`;
    newTT.querySelector('#cardNameK').innerText = FENM.nameKo;
    newTT.querySelector('#cardNameLt').innerText = FENM.nameLt;
    newTT.querySelector('#cardMeridianWhen').innerText = `${FENM.whenMeridian} 최고`;  
    newTT.querySelectorAll('#cardTag')[0].innerText = FENM.tags[0]; 
    newTT.querySelector('#cardImg').style.backgroundImage =`url('${FENM.file}')`;
}

starData.forEach(function(number){
    loadList(number);
});
const cardListBox = document.querySelector('#cardList');
const boxes = document.querySelectorAll(`#cardMain`);

function loadList(arrIndex){
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
    newTT.querySelector('#cardNameK').innerText = starData[arrIndex].nameKo;
    newTT.querySelector('#cardNameLt').innerText = starData[arrIndex].nameLt;
    newTT.querySelector('#cardMeridianWhen').innerText = `${starData[arrIndex].whenMeridian} 최고`;  
    newTT.querySelectorAll('#cardTag')[0].innerText = starData[arrIndex].tags[0]; 
}

for(let i = 0;i<=starData.length-1;i++){
    loadList(i);
}
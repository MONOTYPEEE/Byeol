const cardListBox = document.querySelector('#cardList');
const boxes = document.querySelectorAll(`#cardMain`);

function loadList(elm, idx, elmParent){
    const newTT = document.createElement('div');
    newTT.id = 'cardMain';
    newTT.classList.add(starData.indexOf(elm));
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
        tagX.innerHTML = element;
        // console.log(element);
        tagBox[idx].appendChild(tagX);
        tagX.addEventListener('click',function(element){
            switch(element.path[0].innerHTML){
                case '겨울철 밤하늘 별자리':{
                    location.href = `./tag.html?tagname=winter`;
                    break;
                }
                case '황도 제12궁':case '황도 제11궁':
                case '황도 제10궁':case '황도 제9궁':
                case '황도 제8궁':case '황도 제7궁':
                case '황도 제6궁':case '황도 제5궁':
                case '황도 제4궁':case '황도 제3궁':
                case '황도 제2궁':case '황도 제1궁':{
                    location.href = `./tag.html?tagname=zodiac`;
                    break;
                }
                case '여름철 밤하늘 별자리':{
                    location.href = `./tag.html?tagname=summer`;
                    break;
                }
                case '봄철 밤하늘 별자리':{
                    location.href = `./tag.html?tagname=spring`;
                    break;
                }
                case '가을철 밤하늘 별자리':{
                    location.href = `./tag.html?tagname=authmn`;
                    break;
                }
                case '북쪽 밤하늘 별자리':{
                    location.href = `./tag.html?tagname=northen`;
                    break;
                }
            }
        });
    });

    newTT.querySelector('#cardImg').addEventListener('click',modalLoader);

    newTT.querySelector('#cardNameK').innerText = elm.nameKo;
    newTT.querySelector('#cardNameLt').innerText = elm.nameLt;
    newTT.querySelector('#cardMeridianWhen').innerText = `${dayjs(elm.whenMeridian).format("M월 D일")} 자오선 통과`;  
    //newTT.querySelectorAll('#cardTag')[0].innerText = elm.tags[0];
    newTT.querySelector('#cardImg').style.backgroundImage =`url('${elm.file}')`;
}
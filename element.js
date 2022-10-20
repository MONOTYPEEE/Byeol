const cardListBox = document.querySelector('#cardList');

function loadList(){
    const newTT = document.createElement('span');
    newTT.id = 'cardMain';
    newTT.innerHTML = '';
    cardListBox.appendChild(newTT); 
}


loadList();
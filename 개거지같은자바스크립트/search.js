const searchBar = document.querySelector("#searchInput");

function searchToggler(){
    if(searchBar.value==''){
        allCardVisable();
    }
    else{
        allCardHiden();
        cardListBox.querySelectorAll("#cardMain").forEach(function(element){
            if(element.querySelector('#cardNameK').innerHTML.includes(searchBar.value)||
            element.querySelector('#cardNameLt').innerHTML.toLowerCase().includes(searchBar.value)||
            element.querySelector('#cardNameLt').innerHTML.toUpperCase().includes(searchBar.value)||
            element.querySelector('#cardNameLt').innerHTML.includes(searchBar.value)){
                element.classList.remove('hiden');
            }
        });
    }
};

function allCardHiden(){
    cardListBox.querySelectorAll("#cardMain").forEach(function(elm){
        elm.classList.add('hiden');
    });
};

function allCardVisable(){
    cardListBox.querySelectorAll("#cardMain").forEach(function(elm){
        elm.classList.remove('hiden');
    });
};

searchBar.addEventListener('input',searchToggler);
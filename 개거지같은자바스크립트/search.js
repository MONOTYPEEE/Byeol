const searchBar = document.querySelector("#searchInput");

function searchToggler(){
    if(searchBar==''){

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
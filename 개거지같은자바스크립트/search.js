const searchBar = document.querySelector("#searchInput");

searchBar.addEventListener('input',function(){
    if(searchBar!=''){

    }

    cardListBox.querySelectorAll("#cardMain").forEach(function(elemnt){
        if(elemnt.querySelector('#cardNameK').innerHTML.includes(searchBar.value)||
        elemnt.querySelector('#cardNameLt').innerHTML.toLowerCase().includes(searchBar.value)||
        elemnt.querySelector('#cardNameLt').innerHTML.toUpperCase().includes(searchBar.value)||
        elemnt.querySelector('#cardNameLt').innerHTML.includes(searchBar.value)){
            //한글이름, 소문자화라틴어, 대문자화라틴어, 라틴어 검사 
            console.log(elemnt);
        }
    });
    console.log("end of search");
});
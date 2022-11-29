const searchBar = document.querySelector("#searchInput");

searchBar.addEventListener('input',function(){
    cardListBox.querySelectorAll("#cardNameK").forEach(function(elemnt){
        if(elemnt.innerHTML.includes(searchBar.value)){
            console.log(elemnt);
        }
    });
});
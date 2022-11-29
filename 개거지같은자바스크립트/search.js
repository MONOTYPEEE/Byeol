const searchBar = document.querySelector("#searchInput");

searchBar.addEventListener('input',function(){
    cardListBox.querySelectorAll("#cardMain").forEach(function(elemnt){
        if(
            elemnt.querySelector('#cardNameK').innerHTML.includes(searchBar.value)
            ||
            elemnt.querySelector('#cardNameLt').innerHTML.toLowerCase().includes(searchBar.value)
            ||
            elemnt.querySelector('#cardNameLt').innerHTML.toUpperCase().includes(searchBar.value)
            ){
            console.log(elemnt);
        }
    });
    console.log("end of search");
});
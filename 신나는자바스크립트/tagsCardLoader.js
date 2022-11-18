const urlParam = new URL(location).searchParams.get('tagname');
let a = 0;

switch(urlParam){
    case 'zodiac':{
        starData.forEach(function(element,index,array){
            if(element.emoji!=undefined){
                loadList(element,index,array);
            }
        });
    }

    case 'authmn':
    case 'summer':
    case 'winter':
    case 'spring':
}